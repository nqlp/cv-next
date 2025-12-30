"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { containerVariants, itemVariants, titleVariants } from "../../lib/motion";

export default function ExperienceSection() {
  const tExp = useTranslations("Experience");

  return (
    <section id="experiences" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-extrabold mb-12 text-slate-900 flex items-center gap-3"
        >
          <span className="bg-blue-600 w-2 h-8 rounded-full"></span>
          {tExp("title")}
        </motion.h2>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={itemVariants}
            className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-blue-600 hover:shadow-xl transition-all hover:border-l-blue-500"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {tExp("cedille_title")}
                </h3>
                <p className="font-medium text-slate-500">{tExp("cedille_role")}</p>
              </div>
              <span className="text-sm font-bold bg-blue-50 text-blue-700 px-4 py-2 rounded-full self-start">
                {tExp("cedille_date")}
              </span>
            </div>

            <ul className="space-y-3">
              {[tExp("cedille_task_1"), tExp("cedille_task_2"), tExp("cedille_task_3"), tExp("cedille_link")].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-slate-400 hover:shadow-xl transition-all"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{tExp("spc_title")}</h3>
                <p className="font-medium text-slate-500">{tExp("spc_role")}</p>
              </div>
              <span className="text-sm font-bold bg-slate-100 text-slate-600 px-4 py-2 rounded-full self-start">
                {tExp("spc_date")}
              </span>
            </div>

            <ul className="space-y-3">
              {[tExp("spc_task_1"), tExp("spc_task_2"), tExp("spc_task_3"), tExp("spc_task_4"), tExp("spc_task_5")].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
