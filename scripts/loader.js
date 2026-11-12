/* =====================================================================
   loader.js : "Event Horizon" preloader controller
   Works together with the tiny inline script in <head> (see index.html),
   which decides BEFORE first paint whether the loader should show.
   ===================================================================== */
(function () {
  "use strict";

  /* ------------------------- EDIT THESE ------------------------- */
  var CONFIG = {
    storageKey: "sl-seen",   // must match the key in the <head> script
    theme: "site",           // "site" = follows --background-color / --text-color
                             // "space" = always a dark cosmos
    introDuration: 3400,     // ms: black hole expands, photo emerges
    holdAfterIntro: 350,     // ms: short pause at the peak
    exitDuration: 1300,      // ms: zoom + aperture reveal of your site
    maxWait: 8000,           // ms: loader leaves no later than this, no matter what
    particles: 28,
    stars: 55
  };
  /* -------------------------------------------------------------- */

  var root = document.documentElement;
  var loader = document.getElementById("sl-loader");
  if (!loader) return;

  function finish() {
    root.classList.remove("sl-active");
    if (loader.parentNode) loader.parentNode.removeChild(loader);
  }

  // Not a first visit in this tab session (or reduced motion): remove it.
  if (!root.classList.contains("sl-active")) {
    finish();
    return;
  }

  /* ---- configure ---- */
  loader.setAttribute("data-theme", CONFIG.theme);
  loader.style.setProperty("--sl-intro", CONFIG.introDuration + "ms");
  loader.style.setProperty("--sl-exit", CONFIG.exitDuration + "ms");
  if (!(window.CSS && typeof CSS.registerProperty === "function")) {
    loader.classList.add("sl-no-prop");
  }

  var photo = loader.querySelector(".sl-photo img");
  if (photo) {
    photo.addEventListener("error", function () { photo.style.display = "none"; });
  }

  /* ---- build stars + particles (kept out of the HTML on purpose) ---- */
  function rand(min, max) { return min + Math.random() * (max - min); }

  var starsEl = loader.querySelector(".sl-stars");
  var particlesEl = loader.querySelector(".sl-particles");

  if (starsEl) {
    var sf = document.createDocumentFragment();
    for (var i = 0; i < CONFIG.stars; i++) {
      var s = document.createElement("i");
      s.className = "sl-star";
      s.style.cssText =
        "left:" + rand(0, 100).toFixed(1) + "%;top:" + rand(0, 100).toFixed(1) + "%;" +
        "--s:" + rand(1, 2.4).toFixed(1) + "px;--o:" + rand(0.2, 0.6).toFixed(2);
      sf.appendChild(s);
    }
    starsEl.appendChild(sf);
  }

  if (particlesEl) {
    var pf = document.createDocumentFragment();
    for (var j = 0; j < CONFIG.particles; j++) {
      var p = document.createElement("i");
      p.className = "sl-p";
      p.style.cssText =
        "--a:" + rand(0, 360).toFixed(0) + "deg;" +
        "--r:" + rand(0.55, 1.15).toFixed(2) + ";" +
        "--d:" + rand(2.6, 5).toFixed(2) + "s;" +
        "--dl:" + rand(0, 2.5).toFixed(2) + ";" +
        "--s:" + rand(1.5, 3.2).toFixed(1) + "px";
      pf.appendChild(p);
    }
    particlesEl.appendChild(pf);
  }

  /* ---- timing: leave only when intro is done AND the site is ready ---- */
  var introDone = false;
  var siteReady = false;
  var exited = false;



function tryExit() {
    if (exited || !introDone || !siteReady) return;

    exited = true;

    // Remember that the loader has appeared in this tab session.
    try {
        sessionStorage.setItem(CONFIG.storageKey, "1");
    } catch (e) {}

    // Start the exit animation.
    loader.classList.add("sl-exit");

    // Remove loader after the animation finishes.
    setTimeout(finish, CONFIG.exitDuration + 150);
}



  var loaded = new Promise(function (resolve) {
    if (document.readyState === "complete") resolve();
    else window.addEventListener("load", resolve, { once: true });
  });
  var fontsReady = (document.fonts && document.fonts.ready) || Promise.resolve();

  Promise.all([loaded, fontsReady]).then(function () {
    siteReady = true;
    tryExit();
  });

  setTimeout(function () {
    introDone = true;
    tryExit();
  }, CONFIG.introDuration + CONFIG.holdAfterIntro);

  // Failsafe: never get stuck, even if "load" never fires.
  setTimeout(function () {
    introDone = true;
    siteReady = true;
    tryExit();
  }, Math.max(CONFIG.maxWait, CONFIG.introDuration + CONFIG.holdAfterIntro + 500));
})();