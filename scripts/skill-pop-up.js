(function () {
  // ===== EDIT THIS: one entry per skill (key = the extra class on .skill) =====
  const DATA = {
    "html": {
    title: "HTML",
    color: "#E34F26",
    level: "Advanced",
    about: "Building well-structured, semantic and accessible web pages with a focus on clean markup and SEO.",
    know: [
      "Semantic HTML5 & accessibility",
      "Forms, validation & SEO meta tags",
      "Responsive page structure",
      "Modern HTML elements"
    ],
    built: [
      "Personal Portfolio Website",
      "SpaceQuest Landing Page",
      "ViChat Interface"
    ],
    since: "Continuously building since 2023"
  },

  "css": {
    title: "CSS",
    color: "#33A9DC",
    level: "Advanced",
    about: "Creating responsive, visually engaging interfaces with modern layouts, animations and interactive styling.",
    know: [
      "Flexbox & CSS Grid",
      "Animations & transitions",
      "Responsive design",
      "CSS variables & theming",
      "Custom UI components"
    ],
    built: [
      "Pull-cord Theme Toggle",
      "Space Preloader",
      "Responsive Portfolio UI"
    ],
    since: "Continuously improving"
  },

  "js": {
    title: "JavaScript",
    color: "#F7DF1E",
    level: "Strong",
    about: "Developing interactive web experiences using JavaScript, DOM manipulation, asynchronous operations and animations.",
    know: [
      "DOM manipulation & events",
      "ES6+ JavaScript",
      "Async / Await & Fetch API",
      "API integration",
      "GSAP animations"
    ],
    built: [
      "Interactive Portfolio Features",
      "Typing Role Animation",
      "Dynamic Project Popups"
    ],
    since: "Learning through practical projects"
  },

  "react": {
    title: "React JS",
    color: "#61DAFB",
    level: "Strong",
    about: "Building component-based web applications with React and exploring modern full-stack development using Next.js.",
    know: [
      "Components, props & hooks",
      "State management",
      "React Router & component architecture",
      "Next.js fundamentals",
      "Tailwind CSS & shadcn/ui"
    ],
    built: [
      "ViChat - Real-time Chat Application",
      "Personal Portfolio",
      "Interactive Web Interfaces"
    ],
    since: "Learning through hands-on development"
  },

  "python": {
    title: "Python",
    color: "#3776AB",
    level: "Intermediate",
    about: "Using Python for automation, computer vision, API integration and experimenting with practical AI-powered applications.",
    know: [
      "Python scripting & automation",
      "OpenCV & MediaPipe",
      "API integration",
      "Computer vision fundamentals",
      "Cybersecurity fundamentals"
    ],
    built: [
      "AI Hand Gesture Volume Controller",
      "Computer Vision Music Player",
      "Hand Tracking & Gesture Recognition"
    ],
    since: "Learning through experimentation"
  },

  "video-editing": {
    title: "Video Editing",
    color: "#8B5CF6",
    level: "Advanced",
    about: "Creating educational technology content with engaging storytelling, clean visuals, precise pacing and sound design.",
    know: [
      "Video cutting & pacing",
      "Colour correction & grading",
      "Audio editing & noise reduction",
      "Motion graphics & visual storytelling",
      "YouTube content production"
    ],
    built: [
      "The Creative Coder YouTube Videos",
      "Technology Explainer Videos",
      "Cybersecurity Educational Content"
    ],
    since: "Creating content for YouTube"
  },

  "photography": {
    title: "Photography",
    color: "#64748B",
    level: "Developing",
    about: "Exploring visual composition, lighting and creative framing to capture aesthetically pleasing photographs.",
    know: [
      "Composition & framing",
      "Lighting fundamentals",
      "Basic photo editing",
      "Visual storytelling"
    ],
    built: [
      "Personal Photography Experiments",
      "Creative Visual Content"
    ],
    since: "Exploring and learning"
  },

  "cybersecurity": {
    title: "Cybersecurity",
    color: "#10B981",
    level: "Learning",
    about: "Exploring ethical hacking, network security and practical cybersecurity concepts through hands-on learning in controlled environments.",
    know: [
      "Networking fundamentals",
      "Linux & Kali Linux basics",
      "Ethical hacking fundamentals",
      "Wi-Fi security concepts",
      "Web security fundamentals"
    ],
    built: [
      "Kali Linux Virtual Lab",
      "Cybersecurity Learning Experiments",
      "Educational Security Demonstrations"
    ],
    since: "Currently exploring cybersecurity"
  }
  };
  // ============================================================================

  const list = items => items.map(i => `<li>${i}</li>`).join("");

  // Build popup DOM once
  const backdrop = document.createElement("div");
  backdrop.className = "sp-backdrop";
  const wrap = document.createElement("div");
  wrap.className = "sp-wrap";
  wrap.innerHTML = `
    <div class="sp-panel" role="dialog" aria-modal="true" aria-labelledby="sp-title">
      <button class="sp-close" aria-label="Close skill details"></button>
      <div class="sp-head sp-anim">
        <div class="sp-logo"></div>
        <div><h3 id="sp-title"></h3><small class="sp-since"></small></div>
      </div>
      <div class="sp-meter sp-anim">
        <div class="sp-meter-top"><span class="sp-level"></span><span><b class="sp-num">0</b>/10</span></div>
        <div class="sp-track"><div class="sp-fill"></div></div>
      </div>
      <p class="sp-about sp-anim"></p>
      <div class="sp-anim"><h4>What I know</h4><ul class="sp-know"></ul></div>
      <div class="sp-anim"><h4>Built with it</h4><div class="sp-tags"></div></div>
    </div>`;
  document.body.append(backdrop, wrap);

  const $ = s => wrap.querySelector(s);
  const panel = $(".sp-panel"), fill = $(".sp-fill"), num = $(".sp-num");
  let tl = null, lastFocus = null;

  function open(skill) {
    const key = [...skill.classList].find(c => DATA[c]);
    if (!key) return;
    const d = DATA[key];
    const level = parseFloat(skill.dataset.level) || 0;

    // Fill content
    $(".sp-logo").innerHTML = skill.querySelector("svg").outerHTML;
    $("#sp-title").textContent = d.title;
    $(".sp-since").textContent = d.since;
    $(".sp-level").textContent = d.level;
    $(".sp-about").textContent = d.about;
    $(".sp-know").innerHTML = list(d.know);
    $(".sp-tags").innerHTML = d.built.map(b => `<span>${b}</span>`).join("");
    panel.style.setProperty("--sp-color", d.color);
    TweenMax.set(fill, { width: 0 });
    num.textContent = "0";

    // Animation starts from the clicked icon
    const r = skill.getBoundingClientRect();
    const dx = r.left + r.width / 2 - innerWidth / 2;
    const dy = r.top + r.height / 2 - innerHeight / 2;
    const counter = { v: 0 };
    TweenMax.set(".sp-anim", { clearProps: "transform,opacity" });
    if (tl) tl.kill();
    tl = new TimelineMax({ onReverseComplete: () => { wrap.style.visibility = "hidden"; document.body.style.overflow = ""; } })
      .set(wrap, { visibility: "visible" }, 0)
      .to(backdrop, 0.6, { opacity: 0.88, visibility: "visible", ease: Power2.easeInOut }, 0)
      .fromTo(panel, 0.9,
        { x: dx, y: dy, scale: 0.15, rotationY: 75, opacity: 0,
          transformPerspective: 900, transformOrigin: "left center" },
        { x: 0, y: 0, scale: 1, rotationY: 0, opacity: 1, ease: Power3.easeOut }, 0)
      .staggerFromTo(".sp-anim", 0.4,
  { y: 18, opacity: 0 },
  { y: 0, opacity: 1, ease: Power2.easeOut }, 0.08, 0.5)
      .to(fill, 0.9, { width: level * 10 + "%", ease: Power2.easeOut }, 0.7)
      .to(counter, 0.9, { v: level, ease: Power2.easeOut,
          onUpdate: () => { num.textContent = Number.isInteger(level) ? Math.round(counter.v) : counter.v.toFixed(1); } }, 0.7);

    lastFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    $(".sp-close").focus({ preventScroll: true });
  }

  function close() {
    if (!tl) return;
    tl.timeScale(1.6).reverse();
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }

  document.querySelectorAll(".skill").forEach(s => {
    s.setAttribute("tabindex", "0");
    s.setAttribute("role", "button");
    s.addEventListener("click", () => open(s));
    s.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(s); }
    });
  });

  backdrop.addEventListener("click", close);
  wrap.addEventListener("click", e => { if (e.target === wrap) close(); });
  $(".sp-close").addEventListener("click", close);
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
})();