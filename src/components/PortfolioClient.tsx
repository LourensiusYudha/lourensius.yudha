"use client";

import { useEffect } from "react";
import { portfolioHtml } from "@/lib/portfolio-html";
import { SmoothScroll } from "@/components/SmoothScroll";
import { MotionEffects } from "@/components/MotionEffects";
import "../app/portfolio.css";

let scriptInserted = false;

type PortfolioWindow = Window & {
  __motionScroll?: boolean;
  __portfolioDeferBoot?: boolean;
  bootPortfolio?: () => void;
};

export function PortfolioClient() {
  useEffect(() => {
    const win = window as PortfolioWindow;
    win.__motionScroll = true;
    win.__portfolioDeferBoot = true;

    const boot = () => win.bootPortfolio?.();

    if (scriptInserted) {
      if (typeof win.bootPortfolio === "function") boot();
      return;
    }

    scriptInserted = true;
    const script = document.createElement("script");
    script.src = `/script.js?v=${Date.now()}`;
    script.async = false;
    script.dataset.portfolio = "true";
    script.onload = () => boot();
    document.body.appendChild(script);
  }, []);

  return (
    <SmoothScroll>
      <div
        id="portfolio-root"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: portfolioHtml }}
      />
      <MotionEffects />
    </SmoothScroll>
  );
}
