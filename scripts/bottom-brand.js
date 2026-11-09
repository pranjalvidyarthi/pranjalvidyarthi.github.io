/* ---------- "</>TheCreativeCoder</>" fades in behind the page near the bottom ---------- */
(function () {
    const brand = document.getElementById('bgBrand');
    if (!brand) return;

    const MAX_OPACITY = 0.12;     // "low opacity" - raise/lower to taste
    const START = 0.72;           // begins appearing at 72% of the page scrolled
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    function update() {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;

        // 0 -> 1 across the last part of the page, eased
        let t = (progress - START) / (1 - START);
        t = Math.min(Math.max(t, 0), 1);
        t = t * t * (3 - 2 * t);

        brand.style.opacity = (t * MAX_OPACITY).toFixed(3);
        if (!reduce) {
            brand.style.transform = 'translate(-50%, -50%) scale(' + (0.94 + 0.06 * t).toFixed(3) + ')';
        }
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
})();
