"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { timeline } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          eyebrow="Experience"
          title="Education, internship work, and certification in one timeline"
          description="A concise timeline that shows the work experience and academic foundation behind the portfolio."
        />

        <div className="mt-10 grid gap-4">
          {timeline.map((entry) => (
            <article
              key={`${entry.title}-${entry.organization}`}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.07]"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">{entry.period}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{entry.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{entry.organization}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 md:text-base">{entry.description}</p>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
