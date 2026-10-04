import { getTranslations } from "next-intl/server";
import { SOCIAL_LINKS } from "@/lib/site";

export default async function ContactSection() {
    const t = await getTranslations("Contact");

    return (
        <section
            id="contact"
            className="py-24 px-6 bg-linear-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-y border-slate-100 dark:border-slate-800"
        >
            <div className="max-w-6xl mx-auto">
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.45)]">
                    <div className="absolute -top-24 -right-20 h-56 w-56 rounded-full bg-cyan-200/40 blur-2xl"></div>
                    <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-2xl"></div>

                    <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 px-10 py-12">
                        <div className="space-y-3">
                            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-400">
                                {t("title")}
                            </p>
                        </div>

                        <a
                            href={`mailto:${SOCIAL_LINKS.email}`}
                            className="group inline-flex items-center justify-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-white font-semibold shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                        >
                            <span className="text-sm uppercase tracking-[0.2em]">{t("button_text")}</span>
                            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 transition-transform group-hover:translate-x-1"></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
