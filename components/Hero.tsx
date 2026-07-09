"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="mx-auto flex min-h-[90vh] w-full max-w-6xl items-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#38BDF8]">Hello, I&apos;m</p>
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">Albert Lucido</h1>
        <h2 className="mt-4 text-2xl font-semibold text-[#94A3B8] md:text-3xl">Software Developer</h2>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[#94A3B8] md:text-lg">
          I build clean, scalable digital products with a strong focus on performance, usability, and modern development practices.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
          >
            View Projects
          </a>
          <a
            href="#"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-[#F8FAFC] transition hover:border-[#38BDF8] hover:text-[#38BDF8]"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-8 flex items-center gap-3 text-[#94A3B8]">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full p-3 transition hover:bg-white/10 hover:text-[#38BDF8]" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full p-3 transition hover:bg-white/10 hover:text-[#38BDF8]" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:albert@example.com" className="rounded-full p-3 transition hover:bg-white/10 hover:text-[#38BDF8]" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
