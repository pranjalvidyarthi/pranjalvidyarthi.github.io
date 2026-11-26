
(function () {

  const button = document.querySelector(".play-button");
  const backdrop = document.querySelector(".play-backdrop");
  const perspective = document.querySelector(".play-perspective");
  const closeBtn = document.querySelector(".play-close");

  if (!button || !backdrop || !perspective || !closeBtn) return;

  // Move fixed elements outside transformed sections.
  document.body.appendChild(backdrop);
  document.body.appendChild(perspective);

  // Calculate the original button position.
  function getButtonPosition() {
    const rect = button.getBoundingClientRect();

    return {
      x: rect.left + rect.width / 2 - window.innerWidth / 2,
      y: rect.top + rect.height / 2 - window.innerHeight / 2
    };
  }

  const initialPosition = getButtonPosition();

  // Initial circle animation.
  TweenMax.set(".play-circle-01", {
    rotation: 90,
    transformOrigin: "center center"
  });

  TweenMax.set(".play-circle-02", {
    rotation: -90,
    transformOrigin: "center center"
  });

  // Initial popup position.
  TweenMax.set(perspective, {
    xPercent: -50,
    yPercent: -50,
    x: initialPosition.x,
    y: initialPosition.y,
    scale: 0.175,
    transformOrigin: "center center",
    pointerEvents: "none"
  });

  // Hide video initially.
  TweenMax.set(".play-video", {
    visibility: "hidden",
    opacity: 0
  });

  // Initial triangle shape.
  TweenMax.set(".play-triangle", {
    transformOrigin: "left center",
    transformStyle: "preserve-3d",
    rotationY: 10,
    scaleX: 2
  });

  // Circle rotation timeline.
  const rotateTL = new TimelineMax({ paused: true })

    .to(".play-circle-01", 0.7, {
      opacity: 0.1,
      rotation: "+=360",
      strokeDasharray: "456 456",
      ease: Power1.easeInOut
    }, 0)

    .to(".play-circle-02", 0.7, {
      opacity: 0.1,
      rotation: "-=360",
      strokeDasharray: "411 411",
      ease: Power1.easeInOut
    }, 0);


  // Popup opening and closing timeline.
  const openTL = new TimelineMax({

    paused: true,

    onStart: () => {
      button.classList.add("is-open");
      perspective.classList.add("is-open");

      perspective.style.pointerEvents = "auto";
    },

    onReverseComplete: () => {
      button.classList.remove("is-open");
      perspective.classList.remove("is-open");

      perspective.style.pointerEvents = "none";
    }

  })

    .to(backdrop, 1, {
      opacity: 0.95,
      visibility: "visible",
      ease: Power2.easeInOut
    }, 0)

    .to(closeBtn, 1, {
      opacity: 1,
      ease: Power2.easeInOut
    }, 0)

    .to(perspective, 1, {
      x: 0,
      y: 0,
      scale: 1,
      ease: Power2.easeInOut
    }, 0)

    .to(".play-triangle", 1, {
      scaleX: 1,
      ease: ExpoScaleEase.config(2, 1, Power2.easeInOut)
    }, 0)

    .to(".play-triangle", 1, {
      rotationY: 0,
      ease: ExpoScaleEase.config(10, 0.01, Power2.easeInOut)
    }, 0)

    .to(".play-video", 1, {
      visibility: "visible",
      opacity: 1
    }, 0.5);


  // Open popup.
  function openPopup() {
    openTL.play();
  }

  // Close popup.
  function closePopup() {
    openTL.reverse();
  }

  // Mouse hover.
  button.addEventListener("mouseenter", () => {
    rotateTL.play();
  });

  button.addEventListener("mouseleave", () => {
    rotateTL.reverse();
  });

  // Click events.
  button.addEventListener("click", openPopup);

  backdrop.addEventListener("click", closePopup);

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closePopup();
  });

  // Keyboard accessibility.
  button.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openPopup();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePopup();
    }
  });

  // Recalculate initial position when viewport changes.
  window.addEventListener("resize", () => {

    if (openTL.progress() === 0) {

      const position = getButtonPosition();

      TweenMax.set(perspective, {
        x: position.x,
        y: position.y
      });

    }

  });

})();
