"use client";

import { useEffect } from "react";
import { animate, inView, stagger } from "motion";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Quiet entrance + scroll reveals for the HTML portfolio.
 */
export function MotionEffects() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    (window as Window & { __motionScroll?: boolean }).__motionScroll = true;
    document.documentElement.classList.add("motion-active");

    if (prefersReduced) {
      document.querySelectorAll<HTMLElement>(".reveal, .anim-2, .anim-3, .anim-4, .anim-6, .anim-7").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.classList.add("visible");
      });
      document.querySelectorAll<HTMLElement>(".skill-meter").forEach((el) => el.classList.add("visible"));
      return () => {
        document.documentElement.classList.remove("motion-active");
        delete (window as Window & { __motionScroll?: boolean }).__motionScroll;
      };
    }

    document.querySelectorAll<HTMLElement>("[class*='anim-']").forEach((el) => {
      el.style.animation = "none";
      el.style.opacity = "0";
      el.style.transform = "translateY(14px)";
    });

    const heroEls = document.querySelectorAll<HTMLElement>(
      ".hero-file-bar, .hero-display, .hero-stage, .hero-bottom, .hero-scroll-hint",
    );

    if (heroEls.length) {
      animate(
        heroEls,
        { opacity: [0, 1], y: [16, 0] },
        {
          delay: stagger(0.1, { startDelay: 0.08 }),
          duration: 0.6,
          ease: easeOut,
        },
      );
    }

    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
      if (el.classList.contains("visible")) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
    });

    const stopReveal = inView(
      ".reveal",
      (element) => {
        const el = element as HTMLElement;
        animate(el, { opacity: 1, y: 0 }, { duration: 0.5, ease: easeOut });
        el.classList.add("visible");
      },
      { margin: "0px 0px -6% 0px", amount: 0.15 },
    );

    const stopSkillMeters = inView(
      ".skill-meter-list",
      () => {
        document.querySelectorAll<HTMLElement>(".skill-meter").forEach((el, i) => {
          window.setTimeout(() => el.classList.add("visible"), i * 80);
        });
      },
      { amount: 0.2 },
    );

    return () => {
      stopReveal();
      stopSkillMeters();
      document.documentElement.classList.remove("motion-active");
      delete (window as Window & { __motionScroll?: boolean }).__motionScroll;
    };
  }, []);

  return null;
}
