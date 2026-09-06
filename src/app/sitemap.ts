import type { MetadataRoute } from "next";
import { projects } from "@/lib/portfolio-data";
import { experiences } from "@/lib/experience-data";

export const dynamic = "force-static";

const siteUrl = "https://lourensiusyudha.my.id";
const lastModified = new Date("2026-09-05T00:00:00+08:00");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteUrl}/images/hero-yudha-coding-v2.webp`],
    },
    {
      url: `${siteUrl}/services/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...experiences.map((experience) => ({
      url: `${siteUrl}/experience/${experience.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...projects.map((project) => ({
      url: `${siteUrl}/work/${project.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${siteUrl}${project.image}`],
    })),
  ];
}
