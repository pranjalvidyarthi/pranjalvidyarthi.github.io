        /* ---------- Local time ---------- */
        function tick() {
            const d = new Date();
            document.getElementById('time').textContent =
                d.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true }).replace(' ', '');
            document.getElementById('date').textContent =
                '\u00b7 ' + d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
        }
        tick(); setInterval(tick, 20000);