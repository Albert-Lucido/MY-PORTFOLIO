"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Github, Linkedin, Mail, MapPin, FileDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" className="mx-auto flex min-h-[92vh] w-full max-w-6xl items-center px-6 py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6 }}
        className="grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
      >
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">Portfolio of</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">{profile.name}</h1>
          <h2 className="mt-5 max-w-2xl text-xl font-medium text-slate-300 md:text-2xl">{profile.headline}</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{profile.summary}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <MapPin size={16} className="text-cyan-300" />
              {profile.location}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">React · React Native · Node.js · FastAPI</span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#projects" className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300">
              View Projects
            </Link>
            <a
              href={profile.resumeDownloadHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300"
            >
              <FileDown size={16} />
              Download Resume
            </a>
            <a
              href={profile.resumeViewHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-cyan-300/40 hover:bg-white/[0.08]"
            >
              <ArrowUpRight size={16} />
              View Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 text-slate-300">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-cyan-300/30 hover:text-cyan-300" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-cyan-300/30 hover:text-cyan-300" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={profile.facebook} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-cyan-300/30 hover:text-cyan-300" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href={`mailto:${profile.email}`} className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-cyan-300/30 hover:text-cyan-300" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {profile.highlights.map((highlight) => (
              <div key={highlight} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300 backdrop-blur-md">
                {highlight}
              </div>
            ))}
          </div>
        </div>

        <div className="order-first lg:order-last">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-cyan-950/20">
            <Image src={profile.image} alt={`${profile.name} profile portrait`} fill sizes="(max-width: 1024px) 100vw, 380px" className="rounded-[1.5rem] object-cover" priority />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
