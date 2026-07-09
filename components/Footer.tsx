import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex flex-wrap items-center gap-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:border-cyan-300/30 hover:text-cyan-300">
            <Github size={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:border-cyan-300/30 hover:text-cyan-300">
            <Linkedin size={16} />
          </a>
          <a href={profile.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:border-cyan-300/30 hover:text-cyan-300">
            <Facebook size={16} />
          </a>
          <a href={`mailto:${profile.email}`} className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:border-cyan-300/30 hover:text-cyan-300" aria-label="Email">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
