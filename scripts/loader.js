
/* =========================================================
   THE CREATIVE CODER — PRELOADER CONTROLLER
   Minimal Terminal Loader
========================================================= */

(function () {
    "use strict";

    const CONFIG = {
        storageKey: "sl-seen",
        introDuration: 1100,
        holdAfterIntro: 150,
        exitDuration: 850,
        maxWait: 7000
    };

    const root = document.documentElement;
    const loader = document.getElementById("sl-loader");

    if (!loader) return;

    const progressBar = document.getElementById("sl-progress-bar");
    const percentage = document.getElementById("sl-percentage");
    const loaderText = document.getElementById("sl-loader-text");

    let progress = 0;
    let introDone = false;
    let siteReady = false;
    let exited = false;

    let progressInterval;

    /* Remove loader */

    function finish() {
        root.classList.remove("sl-active");

        if (loader.parentNode) {
            loader.parentNode.removeChild(loader);
        }
    }

    /* Check first visit */

    if (!root.classList.contains("sl-active")) {
        finish();
        return;
    }

    /* Theme detection */

    const currentTheme = root.getAttribute("data-theme") || "dark";

    loader.setAttribute("data-theme", currentTheme);

    /* Progress animation */

    function updateProgress(value) {
        progress = Math.min(value, 100);

        if (progressBar) {
            progressBar.style.width = progress + "%";
        }

        if (percentage) {
            percentage.textContent =
                Math.floor(progress).toString().padStart(2, "0") + "%";
        }
    }

    progressInterval = setInterval(function () {
        if (progress < 90) {
            updateProgress(
                progress + Math.max(0.5, (90 - progress) * 0.045)
            );
        }
    }, 80);

    /* Finish loading */

    function tryExit() {
        if (exited || !introDone || !siteReady) return;

        exited = true;

        clearInterval(progressInterval);

        try {
            sessionStorage.setItem(CONFIG.storageKey, "1");
        } catch (error) {
            // Storage unavailable: continue normally.
        }

        updateProgress(100);

        if (loaderText) {
            loaderText.textContent = "Welcome aboard";
        }

        loader.classList.add("sl-exit");

        setTimeout(finish, CONFIG.exitDuration + 100);
    }

    /* Wait for website and fonts */

    const pageLoaded = new Promise(function (resolve) {
        if (document.readyState === "complete") {
            resolve();
        } else {
            window.addEventListener("load", resolve, { once: true });
        }
    });

    const fontsLoaded =
        document.fonts && document.fonts.ready
            ? document.fonts.ready
            : Promise.resolve();

    Promise.all([pageLoaded, fontsLoaded])
        .catch(function () {
            // Continue even if font loading fails.
        })
        .then(function () {
            siteReady = true;
            tryExit();
        });

    /* Intro timing */

    setTimeout(function () {
        introDone = true;
        tryExit();
    }, CONFIG.introDuration + CONFIG.holdAfterIntro);

    /* Safety fallback */

    setTimeout(function () {
        introDone = true;
        siteReady = true;
        tryExit();
    }, CONFIG.maxWait);

})();
