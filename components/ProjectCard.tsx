import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-[#111827]/90 p-5 transition hover:-translate-y-1 hover:border-[#38BDF8]/40">
      <div className="mb-4 h-40 rounded-xl border border-dashed border-white/20 bg-gradient-to-br from-[#0f172a] to-[#1e293b]" />
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#94A3B8]">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="rounded-full border border-[#2563EB]/40 bg-[#2563EB]/10 px-3 py-1 text-xs text-[#BFDBFE]">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        <a href={project.liveUrl} className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#1D4ED8]">
          <ExternalLink size={16} />
          Live Demo
        </a>
        <a href={project.githubUrl} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-[#F8FAFC] transition hover:border-[#38BDF8] hover:text-[#38BDF8]">
          <Github size={16} />
          GitHub
        </a>
      </div>
    </article>
  );
}
