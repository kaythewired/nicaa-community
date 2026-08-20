"use client";

import { useEffect } from "react";

export function ScrollMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const updateScroll = () => {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll-progress", String(range > 0 ? window.scrollY / range : 0));
    };
    const moveGlow = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { rootMargin: "0px 0px -10%", threshold: 0.08 },
    );
    const observeReveal = (item: Element) => {
      if (!item.classList.contains("is-visible")) observer.observe(item);
    };
    document.querySelectorAll("[data-reveal]").forEach(observeReveal);

    const pageObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches("[data-reveal]")) observeReveal(node);
          node.querySelectorAll("[data-reveal]").forEach(observeReveal);
        });
      });
      updateScroll();
    });
    pageObserver.observe(document.body, { childList: true, subtree: true });
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("pointermove", moveGlow, { passive: true });
    return () => {
      observer.disconnect();
      pageObserver.disconnect();
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", moveGlow);
    };
  }, []);

  return (
    <>
      <div className="site-progress" aria-hidden="true" />
      <div className="ambient-glow" aria-hidden="true" />
    </>
  );
}
