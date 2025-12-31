"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";

export default function ContactSection() {
    const t = useTranslations("Contact");
    const router = useRouter();

    return (
        <section
            id="contact"
            className="py-24 px-6 bg-linear-to-br from-slate-50 via-white to-cyan-50 border-y border-slate-100"
        >
            <div className="max-w-6xl mx-auto">
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_-50px_rgba(15,23,42,0.45)]">
                    <div className="absolute -top-24 -right-20 h-56 w-56 rounded-full bg-cyan-200/40 blur-2xl"></div>
                    <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-2xl"></div>

                    <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 px-10 py-12">
                        <div className="space-y-3">
                            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700">
                                {t("title")}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => router.push("/contact")}
                            className="group inline-flex items-center justify-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-white font-semibold shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-0.5 hover:bg-slate-800"
                        >
                            <span className="text-sm uppercase tracking-[0.2em]">{t("button_text")}</span>
                            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 transition-transform group-hover:translate-x-1"></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}