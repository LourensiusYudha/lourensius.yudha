"use client";

import { useEffect } from "react";
import type Lenis from "lenis";

type PortfolioWindow = Window & {
  __lenis?: Lenis;
};

function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n));
}

function trackProgress(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const total = el.offsetHeight - window.innerHeight;
  if (total <= 0) return 0;
  return clamp(-rect.top / total);
}

const STACK_TOP = 96;

/**
 * Hero cover sticky + premium soft stack for project cards.
 */
export function StickyScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktopMq = window.matchMedia("(min-width: 961px)");
    const heroSpace = document.querySelector<HTMLElement>('[data-sticky="hero"]');
    const stack = document.querySelector<HTMLElement>("[data-projects-stack]");

    let raf = 0;

    const updateStack = (desktop: boolean) => {
      if (!stack) return;
      const cards = stack.querySelectorAll<HTMLElement>(":scope > .project-card");
      document.documentElement.classList.toggle("projects-stack-on", desktop && !prefersReduced);

      if (!desktop || prefersReduced) {
        cards.forEach((card) => {
          card.style.removeProperty("--stack-scale");
          card.style.removeProperty("--stack-shade");
          card.classList.remove("is-stack-active", "is-stack-behind");
        });
        return;
      }

      cards.forEach((card, i) => {
        const next = cards[i + 1];
        let scale = 1;
        let shade = 0;

        if (next) {
          const nextTop = next.getBoundingClientRect().top;
          // Soft premium peel: gentle shrink + depth as next card arrives
          const start = STACK_TOP + window.innerHeight * 0.58;
          const end = STACK_TOP + 16;
          const p = clamp((start - nextTop) / Math.max(start - end, 1));
          // ease-out curve for silkier feel
          const eased = 1 - Math.pow(1 - p, 2.2);
          scale = 1 - eased * 0.048;
          shade = eased * 0.18;
        }

        card.style.setProperty("--stack-scale", String(scale));
        card.style.setProperty("--stack-shade", String(shade));
        card.classList.toggle("is-stack-behind", scale < 0.992);
      });

      let active = 0;
      cards.forEach((card, i) => {
        if (card.getBoundingClientRect().top <= STACK_TOP + 24) active = i;
      });
      cards.forEach((card, i) => {
        card.classList.toggle("is-stack-active", i === active);
      });
    };

    const update = () => {
      raf = 0;
      const desktop = desktopMq.matches && !prefersReduced;
      const heroMotion = !prefersReduced;
      document.documentElement.classList.toggle("sticky-scroll-on", heroMotion);

      if (heroSpace) {
        const hero = heroSpace.querySelector<HTMLElement>("#hero");
        if (hero) {
          if (heroMotion) {
            const p = trackProgress(heroSpace);
            hero.style.setProperty("--hero-sticky", String(p));
            hero.classList.toggle("is-sticky-leaving", p > 0.06);
          } else {
            hero.style.removeProperty("--hero-sticky");
            hero.classList.remove("is-sticky-leaving");
          }
        }
      }

      updateStack(desktop);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    desktopMq.addEventListener("change", onScroll);

    const win = window as PortfolioWindow;
    const lenis = win.__lenis;
    const onLenis = () => onScroll();
    lenis?.on("scroll", onLenis);

    const lenisTimer = window.setTimeout(() => {
      (window as PortfolioWindow).__lenis?.on("scroll", onLenis);
    }, 400);

    return () => {
      window.clearTimeout(lenisTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      desktopMq.removeEventListener("change", onScroll);
      lenis?.off("scroll", onLenis);
      (window as PortfolioWindow).__lenis?.off("scroll", onLenis);
      if (raf) cancelAnimationFrame(raf);
      document.documentElement.classList.remove("sticky-scroll-on", "projects-stack-on");
    };
  }, []);

  return null;
}
