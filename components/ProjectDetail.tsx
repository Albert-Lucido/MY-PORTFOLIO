"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import ProjectGallery from "@/components/ProjectGallery";
import { profile } from "@/data/site";
import type { ProjectDetail as ProjectDetailType } from "@/data/site";

type ProjectDetailProps = {
  project: ProjectDetailType;
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10 md:py-14">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-10">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-300/30 hover:text-white">
            <ArrowLeft size={16} />
            Back to home
          </Link>
          <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-cyan-200">{project.subtitle}</span>
        </div>

        <section className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:grid-cols-[1.25fr_0.75fr] lg:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">Project Detail</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">{project.title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">{project.overview}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs text-slate-200">
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
              <Image src={project.thumbnail.src} alt={project.thumbnail.alt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" priority />
            </div>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <p><span className="text-slate-100">Role:</span> {project.role}</p>
              <p><span className="text-slate-100">Result:</span> {project.results.join(" ")}</p>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <ExternalLink size={16} />
              GitHub Profile
            </a>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Overview</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">{project.summary}</p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">My Role</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">{project.role}</p>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Objectives</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 md:text-base">
              {project.objectives.map((objective) => (
                <li key={objective} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Key Features</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 md:text-base">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-300" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Technology Stack</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span key={technology} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <div>
            <h2 className="text-2xl font-semibold text-white">Screenshot Gallery</h2>
            <p className="mt-2 text-sm text-slate-300">Click any screenshot to enlarge it in a lightbox.</p>
          </div>
          <ProjectGallery images={project.gallery} />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Challenges</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 md:text-base">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rose-300" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Lessons Learned</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 md:text-base">
              {project.lessons.map((lesson) => (
                <li key={lesson} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6">
          <h2 className="text-2xl font-semibold text-white">Results</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200 md:text-base">
            {project.results.map((result) => (
              <li key={result} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-200" />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </section>
      </motion.div>
    </main>
  );
}
