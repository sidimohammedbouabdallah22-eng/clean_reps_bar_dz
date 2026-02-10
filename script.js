const INSTAGRAM_DM_URL = "https://www.instagram.com/the_coach_sidali/";
const INSTAGRAM_HANDLE = "@the_coach_sidali";

document.querySelectorAll("[data-ig-link]").forEach((link) => {
  link.setAttribute("href", INSTAGRAM_DM_URL);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

document.querySelectorAll("[data-ig-handle]").forEach((node) => {
  node.textContent = INSTAGRAM_HANDLE;
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealTargets = document.querySelectorAll("[data-reveal]");

if (prefersReducedMotion) {
  revealTargets.forEach((node) => node.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.14 }
  );

  revealTargets.forEach((node) => observer.observe(node));
}
