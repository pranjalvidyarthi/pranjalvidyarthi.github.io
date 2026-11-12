
/* =========================================
   PROJECTS COMPONENT - JAVASCRIPT
   Filtering, theme, reveal animations & modal
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       1. PROJECT CATEGORY FILTERS
    ===================================== */

    const projectsSection = document.querySelector(".projects-section");

    if (!projectsSection) return;

    const filterButtons = projectsSection.querySelectorAll(".filter-btn");
    const projectCards = projectsSection.querySelectorAll(".project-card");
    const countNumber = projectsSection.querySelector(".count-number");

    filterButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const selectedFilter = button.dataset.filter;

            // Update active filter button
            filterButtons.forEach((item) => {
                const isActive = item === button;

                item.classList.toggle("active", isActive);
                item.setAttribute("aria-pressed", String(isActive));
            });

            let visibleCount = 0;

            // Filter project cards
            projectCards.forEach((card) => {

                const shouldShow =
                    selectedFilter === "all" ||
                    card.dataset.category === selectedFilter;

                card.hidden = !shouldShow;

                if (shouldShow) {
                    visibleCount++;
                }

            });

            // Update project counter
            if (countNumber) {
                countNumber.textContent =
                    String(visibleCount).padStart(2, "0");
            }

        });

    });


    /* =====================================
       2. THEME SWITCH
    ===================================== */

    const themeToggle = projectsSection.querySelector("#theme-toggle");
    const themeLabel = themeToggle?.querySelector(".toggle-label");
    const themeIcon = themeToggle?.querySelector(".toggle-icon");

    const themeMeta = document.querySelector('meta[name="theme-color"]');

    function setTheme(isDark) {

        document.body.classList.toggle("dark", isDark);

        // Update button text
        if (themeLabel) {
            themeLabel.textContent = isDark
                ? "Light theme"
                : "Dark theme";
        }

        // Update button icon
        if (themeIcon) {
            themeIcon.textContent = isDark ? "☾" : "☼";
        }

        // Update browser theme colour
        if (themeMeta) {
            themeMeta.content = isDark
                ? "#141210"
                : "#eeeae5";
        }

        // Save visitor preference
        try {
            localStorage.setItem(
                "projects-theme",
                isDark ? "dark" : "light"
            );
        } catch (error) {
            console.warn("Theme preference could not be saved.");
        }

    }

    // Restore previously selected theme
    let savedTheme = "light";

    try {
        savedTheme = localStorage.getItem("projects-theme") || "light";
    } catch (error) {
        console.warn("Could not access saved theme.");
    }

    setTheme(savedTheme === "dark");

    // Theme toggle click
    themeToggle?.addEventListener("click", () => {

        const isCurrentlyDark =
            document.body.classList.contains("dark");

        setTheme(!isCurrentlyDark);

    });


    /* =====================================
       3. SCROLL REVEAL ANIMATIONS
    ===================================== */

    const revealItems = projectsSection.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, obs) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        obs.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealItems.forEach((item) => {
            observer.observe(item);
        });

    } else {

        revealItems.forEach((item) => {
            item.classList.add("visible");
        });

    }


    /* =====================================
       4. PROJECT DETAILS DATA
    ===================================== */

    const projectDetails = {

        "ViChat": {

            number: "01 — WEB APPLICATION",

            category: "REAL-TIME CHAT APP",

            image: "../public/project-icon/vichat-icon.svg",

            description:
                "ViChat is a real-time messaging web application built with Next.js, TypeScript, Clerk, and Stream Chat. It is designed to make it easy for registered users to discover other users and communicate through one-to-one conversations.",

            idea:
                "Create a clean place for people to communicate with a straightforward, familiar interface.",

            built:
                "A chat application concept with authentication and real-time messaging functionality.",

            stack: [
                "Next.js",
                "Tailwind CSS",
                "Clerk",
                "Stream Chat"
            ],

            live: "https://vi-chat-two.vercel.app/",

            source:
                "https://github.com/pranjalvidyarthi/ViChat"

        },


    };


    /* =====================================
       5. PROJECT MODAL ELEMENTS
    ===================================== */

    const projectModal = document.getElementById("project-modal");

    if (!projectModal) return;

    const modalPanel = projectModal.querySelector(".modal-panel");

    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalCategory = document.getElementById("modal-category");
    const modalNumber = document.getElementById("modal-number");

    const modalDescription =
        document.getElementById("modal-description");

    const modalIdea = document.getElementById("modal-idea");
    const modalBuilt = document.getElementById("modal-built");
    const modalTags = document.getElementById("modal-tags");

    const modalLive = document.getElementById("modal-live");
    const modalSource = document.getElementById("modal-source");

    let lastFocusedElement = null;


    /* =====================================
       6. PROJECT MODAL LINK HANDLER
    ===================================== */

    function setProjectLink(element, url) {

        if (!element) return;

        const isPlaceholder = !url || url === "#";

        element.hidden = isPlaceholder;

        if (!isPlaceholder) {
            element.href = url;
        } else {
            element.removeAttribute("href");
        }

    }


    /* =====================================
       7. OPEN PROJECT MODAL
    ===================================== */

    function openProjectModal(projectName, trigger) {

        const project = projectDetails[projectName];

        if (!project) {
            console.warn("Project details not found:", projectName);
            return;
        }

        lastFocusedElement = trigger;

        // Fill project information
        modalTitle.textContent = projectName;

        modalCategory.textContent = project.category;

        modalNumber.textContent = project.number;

        modalDescription.textContent = project.description;

        modalIdea.textContent = project.idea;

        modalBuilt.textContent = project.built;

        // Update project image
        modalImage.src = project.image;

        modalImage.alt = projectName + " project preview";

        // Clear previous technology tags
        modalTags.replaceChildren();

        // Generate technology tags
        project.stack.forEach((technology) => {

            const tag = document.createElement("span");

            tag.textContent = technology;

            modalTags.appendChild(tag);

        });

        // Update external links
        setProjectLink(modalLive, project.live);

        setProjectLink(modalSource, project.source);

        // Show modal
        projectModal.classList.add("is-open");

        projectModal.setAttribute("aria-hidden", "false");

        // Prevent background scrolling
        document.body.classList.add("modal-open");

        // Focus modal for accessibility
        modalPanel.focus();

    }


    /* =====================================
       8. CLOSE PROJECT MODAL
    ===================================== */

    function closeProjectModal() {

        if (!projectModal.classList.contains("is-open")) {
            return;
        }

        projectModal.classList.remove("is-open");

        projectModal.setAttribute("aria-hidden", "true");

        document.body.classList.remove("modal-open");

        // Restore previous focus
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }

    }


    /* =====================================
       9. PROJECT CARD CLICK EVENTS
    ===================================== */

    projectCards.forEach((card) => {

        const title = card.querySelector("h2")?.textContent.trim();

        const triggers = card.querySelectorAll(
            ".project-image, .text-link"
        );

        triggers.forEach((trigger) => {

            trigger.addEventListener("click", (event) => {

                event.preventDefault();

                openProjectModal(title, trigger);

            });

        });

    });


    /* =====================================
       10. CLOSE BUTTON & BACKDROP
    ===================================== */

    projectModal.querySelectorAll("[data-close-modal]").forEach((element) => {

        element.addEventListener("click", closeProjectModal);

    });


    /* =====================================
       11. KEYBOARD ACCESSIBILITY
    ===================================== */

    document.addEventListener("keydown", (event) => {

        if (!projectModal.classList.contains("is-open")) {
            return;
        }

        // Close with Escape
        if (event.key === "Escape") {

            closeProjectModal();

            return;

        }

        // Trap keyboard focus inside modal
        if (event.key === "Tab") {

            const focusableElements = [
                ...modalPanel.querySelectorAll(
                    'a[href]:not([hidden]), button:not([hidden])'
                )
            ];

            if (!focusableElements.length) {
                event.preventDefault();
                modalPanel.focus();
                return;
            }

            const firstElement = focusableElements[0];

            const lastElement =
                focusableElements[focusableElements.length - 1];

            if (
                event.shiftKey &&
                document.activeElement === firstElement
            ) {

                event.preventDefault();

                lastElement.focus();

            } else if (
                !event.shiftKey &&
                document.activeElement === lastElement
            ) {

                event.preventDefault();

                firstElement.focus();

            }

        }

    });

});
