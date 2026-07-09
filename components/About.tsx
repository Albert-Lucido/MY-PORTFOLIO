"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid gap-10 md:grid-cols-[280px_1fr]"
      >
        <div className="aspect-square rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#0f172a] p-4">
          <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-white/20 text-center text-sm text-[#94A3B8]">
            Profile Image
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold">About</h2>
          <div className="mt-6 space-y-4 text-[#94A3B8]">
            <p>
              I&apos;m a software developer who enjoys turning ideas into polished, user-focused experiences across web and mobile platforms.
            </p>
            <p>
              My work blends modern frontend tooling with practical engineering decisions to deliver products that are reliable, maintainable, and impactful.
            </p>
            <p>
              I&apos;m currently focused on building projects that combine AI, data, and intuitive interfaces to solve real-world problems.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">Education / Timeline</h3>
            <p className="mt-2 text-sm text-[#94A3B8]">Timeline placeholder — add your education milestones and key experiences here.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
