/* ================================
   Vidhi Goyal Portfolio Scripts
   GSAP + ScrollTrigger animations
================================ */

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    setStaticNumbers();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  initHeroAnimation();
  initScrollRevealAnimations();
  initProjectCardAnimations();
  initStatsCounters();
  initMagneticHover();
});

/* Hero entrance animation */
function initHeroAnimation() {
  gsap.from(".hero-animate", {
    opacity: 0,
    y: 24,
    duration: 0.55,
    stagger: 0.08,
    ease: "power2.out"
  });
}

/* Section heading reveal */
function initScrollRevealAnimations() {
  gsap.utils.toArray(".reveal-heading").forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 22,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        once: true
      }
    });
  });
}

/* Project cards and content card reveal */
function initProjectCardAnimations() {
  gsap.utils.toArray(".reveal-card").forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 28,
      scale: 0.985,
      duration: 0.55,
      delay: (index % 3) * 0.06,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 88%",
        once: true
      }
    });
  });
}

/* Stats counter animation */
function initStatsCounters() {
  const counters = document.querySelectorAll(".stat-number");

  counters.forEach((counter) => {
    const target = Number(counter.dataset.count);

    ScrollTrigger.create({
      trigger: counter,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.fromTo(
          counter,
          { innerText: 0 },
          {
            innerText: target,
            duration: 0.6,
            ease: "power2.out",
            snap: { innerText: 1 },
            onUpdate: function () {
              counter.innerText = Math.floor(counter.innerText);
            }
          }
        );
      }
    });
  });
}

/* Subtle magnetic hover effect */
function initMagneticHover() {
  const magneticItems = document.querySelectorAll(".magnetic");

  magneticItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item, {
        scale: 1.03,
        duration: 0.25,
        ease: "power2.out"
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        scale: 1,
        duration: 0.25,
        ease: "power2.out"
      });
    });
  });
}

/* Fallback numbers for reduced-motion users */
function setStaticNumbers() {
  document.querySelectorAll(".stat-number").forEach((counter) => {
    counter.innerText = counter.dataset.count;
  });
}
