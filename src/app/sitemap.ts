import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";

const PATHS = ["", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
    return routing.locales.flatMap((locale) =>
        PATHS.map((path) => ({
            url: `${SITE_URL}/${locale}${path}`,
            changeFrequency: "monthly" as const,
            priority: path === "" ? 1 : 0.8,
            alternates: {
                languages: Object.fromEntries(
                    routing.locales.map((alt) => [alt, `${SITE_URL}/${alt}${path}`])
                ),
            },
        }))
    );
}
