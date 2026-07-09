"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          eyebrow="Skills"
          title="A stack that spans frontend, backend, mobile, database, and AI work"
          description="These groups are organized directly from the resume so the portfolio stays truthful and easy to scan."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs text-slate-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
