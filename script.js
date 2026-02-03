// =========================================================
// EduFit Junior Prep LP JS
// - FAQ accordion
// - Smooth scroll for internal anchors
// - Basic CTA click tracking hook (optional)
// =========================================================

(function () {
  // Smooth scroll for same-page anchors
  document.addEventListener("click", function (e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;

    const href = a.getAttribute("href");
    if (!href || href === "#") return;

    const el = document.querySelector(href);
    if (!el) return;

    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", href);
  });

  // Accordion
  const accRoot = document.querySelector("[data-accordion]");
  if (accRoot) {
    const items = Array.from(accRoot.querySelectorAll(".acc-item"));

    items.forEach((btn) => {
      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        // close all
        items.forEach((b) => {
          b.setAttribute("aria-expanded", "false");
          const panel = b.nextElementSibling;
          if (panel) panel.hidden = true;
          const icon = b.querySelector(".acc-icon");
          if (icon) icon.textContent = "＋";
        });

        // open current if it was closed
        if (!expanded) {
          btn.setAttribute("aria-expanded", "true");
          const panel = btn.nextElementSibling;
          if (panel) panel.hidden = false;
          const icon = btn.querySelector(".acc-icon");
          if (icon) icon.textContent = "－";
        }
      });
    });
  }

  // Optional: CTA click tracking hook
  // If you use Google Analytics / GTM, you can listen for these events.
  document.addEventListener("click", function (e) {
    const cta = e.target.closest("[data-cta]");
    if (!cta) return;

    const label = cta.getAttribute("data-cta") || "unknown";

    // Example for GTM:
    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({ event: "lp_cta_click", label });

    // Minimal debug in console (remove in production if you want)
    // console.log("[CTA]", label);
  });
})();
