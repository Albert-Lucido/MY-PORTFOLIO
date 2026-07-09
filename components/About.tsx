"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6 }}
        className="grid gap-10 lg:grid-cols-[320px_1fr]"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-md">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/60 shadow-[0_24px_60px_rgba(2,6,23,0.35)]">
            <Image src={profile.image} alt={`${profile.name} portrait`} fill sizes="(max-width: 1024px) 100vw, 320px" className="object-cover" />
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="About" title="Professional, practical, and focused on building real systems" description={profile.about} />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {profile.highlights.slice(0, 4).map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
