"use client";

import { Facebook, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/site";

const contacts = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}`, icon: Phone },
  { label: "Location", value: profile.location, href: "#home", icon: MapPin },
  { label: "LinkedIn", value: profile.linkedin.replace("https://", ""), href: profile.linkedin, icon: Linkedin },
  { label: "Facebook", value: profile.facebook.replace("https://", ""), href: profile.facebook, icon: Facebook },
  { label: "GitHub", value: profile.github.replace("https://", ""), href: profile.github, icon: Github },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6 }}
        className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl md:p-10"
      >
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Open to roles, collaborations, and meaningful conversations</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">If you are reviewing this portfolio for hiring or collaboration, use any of the links below to reach me directly.</p>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-3xl border border-white/10 bg-slate-950/60 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-slate-950/80"
              >
                <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 p-2 text-cyan-300">
                  <Icon size={16} />
                </div>
                <p className="text-sm font-semibold text-white">{contact.label}</p>
                <p className="mt-1 text-xs text-slate-300">{contact.value}</p>
              </a>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
          <a href={profile.resumeDownloadHref} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-300/30 hover:text-cyan-300">
            Download Resume
          </a>
          <a href={profile.resumeViewHref} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-300/30 hover:text-cyan-300">
            View Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
