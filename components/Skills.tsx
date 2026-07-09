"use client";

import { motion } from "framer-motion";

const skillGroups = [
  { title: "Languages", skills: ["Python", "JavaScript", "TypeScript", "Java", "C++"] },
  { title: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { title: "Backend", skills: ["Node.js", "Express", "FastAPI"] },
  { title: "Database", skills: ["PostgreSQL", "MongoDB", "SQLite", "MySQL"] },
  { title: "Tools", skills: ["Git", "GitHub", "Vercel", "Figma", "VS Code"] },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-white/10 bg-[#111827]/90 p-5">
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-[#94A3B8]">
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
