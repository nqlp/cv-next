import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/site";
export default async function ContactSection() {
  const t = await getTranslations("Contact");
  const d = await getTranslations("Design");
  return <section id="contact" className="contact-section"><div className="shell contact-inner"><div><span className="eyebrow">{t("title")}</span><h2>{d("contact_headline")}<br /><span>{d("contact_accent")}</span></h2><p>{t("description")}</p></div><a className="contact-action" href={`mailto:${SOCIAL_LINKS.email}`}><span className="contact-arrow"><ArrowUpRight size={46} strokeWidth={1.3} /></span><span>{t("button_text")}</span><span className="contact-email">{SOCIAL_LINKS.email}</span></a></div></section>;
}