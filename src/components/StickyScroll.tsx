"use client";

import { useEffect } from "react";
import type Lenis from "lenis";

type PortfolioWindow = Window & {
  __lenis?: Lenis;
};

function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n));
}

const STACK_TOP = 92;
const STACK_STEP = 22;

/**
 * Scroll-driven sticky project stack coordinated with Lenis.
 */
export function StickyScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktopMq = window.matchMedia("(min-width: 961px)");
    const stack = document.querySelector<HTMLElement>("[data-projects-stack]");
    if (!stack) return;

    let raf = 0;
    let activeLenis: Lenis | undefined;
    const cards = Array.from(stack.querySelectorAll<HTMLElement>(":scope > .project-stack-item"));

    const updateStack = () => {
      const desktop = desktopMq.matches && !prefersReduced;
      document.documentElement.classList.toggle("projects-stack-on", desktop && !prefersReduced);

      if (!desktop || prefersReduced) {
        cards.forEach((card) => {
          card.style.removeProperty("--stack-scale");
          card.style.removeProperty("--stack-shade");
          card.style.removeProperty("--stack-order");
          card.style.removeProperty("--stack-top");
          card.classList.remove("is-stack-active", "is-stack-behind");
        });
        return;
      }

      cards.forEach((card, i) => {
        const next = cards[i + 1];
        const cardTop = STACK_TOP + i * STACK_STEP;
        let scale = 1;
        let shade = 0;

        if (next) {
          const nextTop = next.getBoundingClientRect().top;
          // Soft premium peel: gentle shrink + depth as next card arrives
          const start = window.innerHeight * 0.88;
          const end = STACK_TOP + (i + 1) * STACK_STEP + 16;
          const p = clamp((start - nextTop) / Math.max(start - end, 1));
          const eased = 1 - Math.pow(1 - p, 2.2);
          scale = 1 - eased * 0.065;
          shade = eased * 0.32;
        }

        card.style.setProperty("--stack-scale", String(scale));
        card.style.setProperty("--stack-shade", String(shade));
        card.style.setProperty("--stack-order", String(i + 1));
        card.style.setProperty("--stack-top", `${cardTop}px`);
        card.classList.toggle("is-stack-behind", scale < 0.992);
      });

      let active = 0;
      cards.forEach((card, i) => {
        if (card.getBoundingClientRect().top <= STACK_TOP + i * STACK_STEP + 24) active = i;
      });
      cards.forEach((card, i) => {
        card.classList.toggle("is-stack-active", i === active);
      });
    };

    const update = () => {
      raf = 0;
      updateStack();
    };

    const scheduleUpdate = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    const attachLenis = () => {
      const nextLenis = (window as PortfolioWindow).__lenis;
      if (!nextLenis || nextLenis === activeLenis) return;
      activeLenis?.off("scroll", scheduleUpdate);
      activeLenis = nextLenis;
      activeLenis.on("scroll", scheduleUpdate);
      scheduleUpdate();
    };

    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(stack);
    update();
    attachLenis();
    window.addEventListener("lenis-ready", attachLenis);
    desktopMq.addEventListener("change", scheduleUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("lenis-ready", attachLenis);
      desktopMq.removeEventListener("change", scheduleUpdate);
      activeLenis?.off("scroll", scheduleUpdate);
      if (raf) cancelAnimationFrame(raf);
      document.documentElement.classList.remove("projects-stack-on");
    };
  }, []);

  return null;
}
