        /* ---------- Theme (pull cord) ---------- */
        const root = document.documentElement, cord = document.getElementById('cord');
        const BASE = 290, MAX = 120, TRIGGER = 55;
        try { const t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; } catch (e) { }

        function toggleTheme() {
            const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
            root.dataset.theme = next;
            try { localStorage.setItem('theme', next); } catch (e) { }
        }
        /* ---------- Rope physics (Verlet) ---------- */
        const cv = document.getElementById('cordCanvas'), ctx = cv.getContext('2d');
        const W = 240, H = 520, AX = 120, N = 14, REST = BASE / N;
        const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        cv.width = W * dpr; cv.height = H * dpr; ctx.scale(dpr, dpr);

        const pts = Array.from({ length: N + 1 }, (_, i) => ({ x: AX, y: i * REST, px: AX, py: i * REST }));
        const last = pts[N];
        let seg = REST, dragging = false, holding = false, ret = null, RET_MS = 420, target = { x: AX, y: BASE }, awake = false, raf = 0;

        function straighten() { pts.forEach((p, i) => { p.x = p.px = AX; p.y = p.py = i * REST; }); seg = REST; }

        function simulate() {
            // release: play the pull in reverse, easing the bead back to rest along a clean path
            if (ret) {
                const t = Math.min(1, (performance.now() - ret.t0) / RET_MS), e = 1 - Math.pow(1 - t, 3);
                target.x = ret.fx + (AX - ret.fx) * e;
                target.y = ret.fy + (BASE - ret.fy) * e;
                seg = ret.s0 + (REST - ret.s0) * e;
                if (t >= 1) { ret = null; dragging = false; pts.forEach(p => { p.px = p.x; p.py = p.y; }); }
            }
            // retract any stretch quickly after release (gives the snap-back)
            if (!dragging) seg += (REST - seg) * 0.22;
            for (let i = 1; i <= N; i++) {
                const p = pts[i], vx = (p.x - p.px) * 0.985, vy = (p.y - p.py) * 0.985;
                p.px = p.x; p.py = p.y; p.x += vx; p.y += vy + 0.55;      // gravity
            }
            for (let k = 0; k < 14; k++) {
                pts[0].x = AX; pts[0].y = 0;
                if (dragging) { last.x = target.x; last.y = target.y; }
                for (let i = 0; i < N; i++) {
                    const a = pts[i], b = pts[i + 1];
                    const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy) || 1, diff = (d - seg) / d;
                    const fa = i === 0 ? 0 : 0.5, fb = (i + 1 === N && dragging) ? 0 : (i === 0 ? 1 : 0.5);
                    a.x += dx * diff * fa; a.y += dy * diff * fa;
                    b.x -= dx * diff * fb; b.y -= dy * diff * fb;
                }
            }
        }

        function draw() {
            ctx.clearRect(0, 0, W, H);
            ctx.lineCap = 'round'; ctx.lineJoin = 'round';
            ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y);
            for (let i = 1; i < N; i++) {
                const mx = (pts[i].x + pts[i + 1].x) / 2, my = (pts[i].y + pts[i + 1].y) / 2;
                ctx.quadraticCurveTo(pts[i].x, pts[i].y, mx, my);
            }
            ctx.lineTo(last.x, last.y);
            ctx.strokeStyle = '#cdbb9a'; ctx.lineWidth = 3.2; ctx.setLineDash([]); ctx.stroke();
            ctx.strokeStyle = '#8f7e60'; ctx.lineWidth = 3.2; ctx.setLineDash([2, 3]); ctx.stroke();
            ctx.setLineDash([]);
            // bead, tilted along the last rope segment
            const p = pts[N - 1], ang = Math.atan2(last.y - p.y, last.x - p.x) - Math.PI / 2;
            ctx.save(); ctx.translate(last.x, last.y); ctx.rotate(ang);
            const g = ctx.createRadialGradient(-4, 8, 2, 0, 14, 20);
            g.addColorStop(0, '#b0663c'); g.addColorStop(1, '#5a2d17');
            ctx.shadowColor = 'rgba(0,0,0,.35)'; ctx.shadowBlur = 8; ctx.shadowOffsetY = 5;
            ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(0, 13, 10, 17, 0, 0, Math.PI * 2); ctx.fill();
            ctx.restore();
            // keep the invisible grab area on the bead
            const r = cv.getBoundingClientRect();
            cord.style.transform = 'translate(' + (r.left + last.x - 22) + 'px,' + (r.top + last.y - 6) + 'px)';
        }

        function loop() {
            simulate(); draw();
            let energy = 0;
            for (let i = 1; i <= N; i++) energy += Math.abs(pts[i].x - pts[i].px) + Math.abs(pts[i].y - pts[i].py);
            if (dragging || energy > 0.05 || Math.abs(seg - REST) > 0.01) raf = requestAnimationFrame(loop);
            else { awake = false; }
        }
        function wake() { if (!awake) { awake = true; raf = requestAnimationFrame(loop); } }

        /* ---------- Dragging ---------- */
        function toTarget(e) {
            const r = cv.getBoundingClientRect();
            let x = e.clientX - r.left, y = Math.max(40, e.clientY - r.top - 14);
            const dx = x - AX, d = Math.hypot(dx, y), limit = BASE + MAX;
            if (d > limit) { const k = (limit + (d - limit) * 0.12) / d; x = AX + dx * k; y *= k; }  // rubber-band
            target.x = x; target.y = y;
            seg = Math.max(REST, Math.hypot(x - AX, y) / N);                                         // rope stretches
        }
        cord.addEventListener('pointerdown', e => {
            holding = dragging = true; ret = null; cord.classList.add('drag'); cord.setPointerCapture(e.pointerId);
            toTarget(e); wake();
        });
        cord.addEventListener('pointermove', e => { if (holding) toTarget(e); });
        function release() {
            if (!holding) return;
            holding = false; cord.classList.remove('drag');
            const pulled = Math.hypot(last.x - AX, last.y) - BASE;
            if (pulled > TRIGGER) toggleTheme();
            if (reduceMotion) { dragging = false; straighten(); draw(); }
            else { ret = { t0: performance.now(), fx: target.x, fy: target.y, s0: seg }; wake(); }
        }
        cord.addEventListener('pointerup', release);
        cord.addEventListener('pointercancel', release);
        cord.addEventListener('keydown', e => {            // keyboard: Enter / Space
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); toggleTheme();
                if (!reduceMotion) { last.x += 28; last.y += 45; wake(); }
            }
        });
        addEventListener('resize', draw);
        draw();

