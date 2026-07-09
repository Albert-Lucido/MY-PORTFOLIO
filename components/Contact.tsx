"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const contacts = [
  { label: "Email", value: "albert@example.com", href: "mailto:albert@example.com", icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/albert-lucido", href: "https://linkedin.com", icon: Linkedin },
  { label: "GitHub", value: "github.com/albert-lucido", href: "https://github.com", icon: Github },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8"
      >
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-3 text-[#94A3B8]">I&apos;m open to opportunities, collaborations, and meaningful conversations.</p>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-2xl border border-white/10 bg-[#111827]/90 p-4 transition hover:border-[#38BDF8]/40"
              >
                <div className="mb-2 inline-flex rounded-full bg-white/10 p-2 text-[#38BDF8]">
                  <Icon size={16} />
                </div>
                <p className="text-sm font-semibold">{contact.label}</p>
                <p className="mt-1 text-xs text-[#94A3B8]">{contact.value}</p>
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
