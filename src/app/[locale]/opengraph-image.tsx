import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { AUTHOR_NAME } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${AUTHOR_NAME} — Portfolio`;

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Meta" });
    const tLocation = await getTranslations({ locale, namespace: "Location" });

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    background: "linear-gradient(135deg, #0f172a 0%, #155e75 100%)",
                    color: "white",
                    fontFamily: "sans-serif",
                }}
            >
                <div style={{ display: "flex", width: 96, height: 12, borderRadius: 999, background: "#22d3ee" }} />
                <div style={{ display: "flex", fontSize: 84, fontWeight: 800, marginTop: 40 }}>
                    {AUTHOR_NAME}
                </div>
                <div style={{ display: "flex", fontSize: 40, color: "#a5f3fc", marginTop: 16 }}>
                    {t("title").replace(`${AUTHOR_NAME} - `, "")}
                </div>
                <div style={{ display: "flex", fontSize: 28, color: "#cbd5e1", marginTop: 32 }}>
                    {tLocation("title")}
                </div>
            </div>
        ),
        size
    );
}
