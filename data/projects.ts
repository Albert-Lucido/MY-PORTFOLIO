export type Project = {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    title: "AI-Driven UAV Rice Weed Detection",
    description:
      "A computer vision-powered UAV workflow for identifying weed patterns in rice fields and supporting smarter agricultural decisions.",
    technologies: ["Python", "FastAPI", "React", "OpenCV"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing featured projects, technical skills, and professional contact links with a modern responsive UI.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Mobile Application",
    description:
      "A mobile-first application concept focused on seamless user journeys, clean interactions, and maintainable architecture.",
    technologies: ["React Native", "TypeScript", "SQLite"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Web Application",
    description:
      "A scalable web platform prototype with responsive design, modular components, and performance-oriented frontend patterns.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
];
