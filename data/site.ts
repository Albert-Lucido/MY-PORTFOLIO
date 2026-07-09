export type SkillGroup = {
  title: string;
  skills: string[];
};

export type TimelineEntry = {
  title: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
};

export type ProjectSlug = "thesis" | "payroll" | "intern" | "signalph";

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectDetail = {
  slug: ProjectSlug;
  title: string;
  subtitle: string;
  summary: string;
  overview: string;
  role: string;
  technologies: string[];
  objectives: string[];
  features: string[];
  challenges: string[];
  lessons: string[];
  results: string[];
  thumbnail: ProjectImage;
  gallery: ProjectImage[];
};

export const profile = {
  name: "Albert John B. Lucido",
  title: "Software Developer",
  headline: "Full-stack developer building AI-powered web and mobile systems.",
  summary:
    "I design and build production-focused software across web, mobile, backend, and AI workflows. My recent work spans a deployed MERN attendance system, a thesis-award-winning precision agriculture app, an AI-assisted signal intelligence platform, and a payroll management system.",
  location: "Alaminos, Laguna, Philippines",
  email: "albertjohnlucido@gmail.com",
  phone: "+63 918 772 2859",
  image: "/images/profile/pfp.png",
  github: "https://github.com/Albert-Lucido",
  linkedin: "https://www.linkedin.com/in/albert-john-lucido-39a862321/",
  facebook: "https://www.facebook.com/albert.lucido.73",
  resumeDownloadHref: "https://drive.google.com/uc?export=download&id=1c1uQCts7qh_rQZdGYDYaQYBdqdTRv1cz",
  resumeViewHref: "https://drive.google.com/file/d/1c1uQCts7qh_rQZdGYDYaQYBdqdTRv1cz/view?usp=sharing",
  socials: [
    { label: "GitHub", href: "https://github.com/Albert-Lucido" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/albert-john-lucido-39a862321/" },
    { label: "Facebook", href: "https://www.facebook.com/albert.lucido.73" },
    { label: "Email", href: "mailto:albertjohnlucido@gmail.com" },
  ],
  about:
    "I am a computer science student and software developer who enjoys turning real requirements into reliable products. I focus on clear architecture, maintainable code, and interfaces that feel polished without losing practicality.",
  highlights: [
    "Deployed MERN attendance and reporting system",
    "Best Thesis Award for UAV rice weed detection",
    "Hackathon finalist for SignalPH",
    "Hands-on work across React, React Native, Node.js, FastAPI, and PostgreSQL",
  ],
};

export const skillGroups: SkillGroup[] = [
  { title: "Languages", skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"] },
  { title: "Frontend", skills: ["React", "Next.js", "React Native", "Tailwind CSS", "Figma"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Auth"] },
  { title: "Mobile", skills: ["React Native", "Expo", "TypeScript", "Offline-first UX"] },
  { title: "Databases", skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"] },
  { title: "AI / Machine Learning", skills: ["YOLO", "Computer Vision", "AI Multi-Agent Architecture", "Data Cleaning"] },
  { title: "Tools", skills: ["Git", "Postman", "Ubuntu", "VS Code", "PyCharm", "UiPath"] },
  { title: "Cloud", skills: ["Vercel", "Render", "Docker"] },
];

export const timeline: TimelineEntry[] = [
  {
    title: "Full-Stack Developer Intern",
    organization: "Knowles Training Institute",
    period: "Feb 2026 – Apr 2026",
    description:
      "Core contributor on a deployed MERN attendance and reporting system, covering backend APIs, database schema, JWT authentication, role-based access control, integration, QA, deployment testing, CSV import tooling, and team coordination.",
    tags: ["MERN", "JWT Auth", "RBAC", "Deployment Testing"],
  },
  {
    title: "Bachelor of Science in Computer Science",
    organization: "De La Salle Lipa",
    period: "Education",
    description:
      "Built a foundation in software engineering, application development, and problem solving that supported projects across web, mobile, and AI-driven systems.",
    tags: ["Computer Science", "Application Development", "Software Engineering"],
  },
  {
    title: "Data Scientist Associate",
    organization: "DataCamp",
    period: "2022 – 2026",
    description:
      "Certification validating practical data skills that support analytics, data handling, and AI-oriented project work.",
    tags: ["DataCamp", "Analytics", "Certification"],
  },
];

export const projects: ProjectDetail[] = [
  {
    slug: "thesis",
    title: "AI-Driven UAV Rice Weed Detection System",
    subtitle: "Best Thesis Award",
    summary:
      "A mobile application and backend workflow for UAV-based rice weed detection with YOLOv11 inference, GeoJSON visualization, heatmaps, and annotation viewing for precision agriculture.",
    overview:
      "This thesis project focuses on helping agricultural workflows through computer vision. The system supports UAV-based weed detection in rice fields, visualizes mapped results, and exposes outputs that make the findings easier to review and act on.",
    role: "Developed the mobile application, backend inference workflow, and data visualization features for weed detection review.",
    technologies: ["React Native", "TypeScript", "Python", "PostgreSQL", "FastAPI", "YOLOv11"],
    objectives: [
      "Detect rice weed patterns from UAV imagery using computer vision models.",
      "Present detections through mobile-friendly visualizations and annotations.",
      "Support analysis with GeoJSON layers, heatmaps, and backend inference outputs.",
    ],
    features: [
      "YOLOv11-based weed detection workflow",
      "GeoJSON map visualization",
      "Heatmap rendering for field patterns",
      "Annotation viewing for review and validation",
      "Mobile interface for field-oriented access",
    ],
    challenges: [
      "Translating model outputs into clear, reviewable UI states.",
      "Balancing mobile usability with spatial and detection data.",
      "Keeping the backend inference path clean and repeatable.",
    ],
    lessons: [
      "Computer vision systems become more usable when outputs are structured for review, not just prediction.",
      "Agricultural workflows benefit from combining spatial mapping with simple mobile access.",
    ],
    results: ["Recognized with Best Thesis Award."],
    thumbnail: { src: "/projects/thesis/thumbnail.png", alt: "AI-Driven UAV Rice Weed Detection System dashboard preview" },
    gallery: [
      { src: "/projects/thesis/gallery-1.png", alt: "Thesis project screenshot 1" },
      { src: "/projects/thesis/gallery-2.png", alt: "Thesis project screenshot 2" },
      { src: "/projects/thesis/gallery-3.png", alt: "Thesis project screenshot 3" },
      { src: "/projects/thesis/gallery-4.png", alt: "Thesis project screenshot 4" },
      { src: "/projects/thesis/gallery-5.png", alt: "Thesis project screenshot 5" },
      { src: "/projects/thesis/gallery-6.png", alt: "Thesis project screenshot 6" },
    ],
  },
  {
    slug: "payroll",
    title: "Payroll Management System",
    subtitle: "Admin and employee workflows",
    summary:
      "A MERN payroll and employee management system with attendance, leave tracking, payslip generation, dashboards, reporting, and role-based management features.",
    overview:
      "This project streamlines payroll operations by combining employee records, attendance, leave handling, and reporting in one web application. The design emphasizes operational clarity for administrators while keeping employee-facing flows straightforward.",
    role: "Built the payroll and employee management experience, including reporting-oriented flows and dashboard views.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    objectives: [
      "Support payroll and employee management in a single web platform.",
      "Make attendance, leave, and payslip workflows easy to review.",
      "Provide dashboards and reporting for role-based access.",
    ],
    features: [
      "Attendance tracking",
      "Leave tracking",
      "Payslip generation",
      "Admin dashboard",
      "Employee dashboard",
      "Role-based management",
    ],
    challenges: [
      "Keeping administrative workflows clean while maintaining employee-facing clarity.",
      "Coordinating multiple records and reporting views without duplication.",
    ],
    lessons: [
      "Operational dashboards work best when the most common tasks are always visible.",
      "Reporting features need strong data structure before presentation logic can stay simple.",
    ],
    results: ["Delivered as a MERN-based payroll and employee management system."],
    thumbnail: { src: "/projects/payroll/thumbnail.png", alt: "Payroll Management System dashboard preview" },
    gallery: [
      { src: "/projects/payroll/gallery-1.png", alt: "Payroll screenshot 1" },
      { src: "/projects/payroll/gallery-2.png", alt: "Payroll screenshot 2" },
      { src: "/projects/payroll/gallery-3.png", alt: "Payroll screenshot 3" },
      { src: "/projects/payroll/gallery-4.png", alt: "Payroll screenshot 4" },
      { src: "/projects/payroll/gallery-5.png", alt: "Payroll screenshot 5" },
      { src: "/projects/payroll/gallery-6.png", alt: "Payroll screenshot 6" },
      { src: "/projects/payroll/gallery-7.png", alt: "Payroll screenshot 7" },
    ],
  },
  {
    slug: "intern",
    title: "Knowles Training Institute System",
    subtitle: "Deployed MERN attendance and reporting platform",
    summary:
      "A deployed MERN attendance and reporting system where I contributed backend APIs, database schema, JWT authentication, role-based access control, integration, QA, deployment testing, and CSV import tooling.",
    overview:
      "This internship project was a collaborative internal system built for real organizational use. My work centered on backend stability, access control, and integration between the server, database, and multiple user roles.",
    role: "One of four core developers responsible for backend development, integration support, testing, and revision cycles.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "CSV Processing"],
    objectives: [
      "Build a production-ready attendance and reporting system.",
      "Support multiple user roles through secure authentication and access control.",
      "Keep data operations reliable for organization-wide use.",
    ],
    features: [
      "JWT-based authentication",
      "Role-based access control",
      "Attendance and reporting workflows",
      "CSV import and cleaning utilities",
      "Integrated multi-role system flows",
      "QA and deployment testing support",
    ],
    challenges: [
      "Managing backend-frontend integration across multiple roles.",
      "Cleaning and importing real organizational data safely.",
      "Keeping revisions coordinated across a rotating intern team.",
    ],
    lessons: [
      "Production work depends as much on integration and validation as on feature implementation.",
      "Role-based systems stay manageable when the access model is designed early.",
    ],
    results: ["Helped deliver a deployed internal system used for attendance and reporting."],
    thumbnail: { src: "/projects/intern/thumbnail.png", alt: "Knowles Training Institute system preview" },
    gallery: [
      { src: "/projects/intern/gallery-1.png", alt: "Intern system HR view 1" },
      { src: "/projects/intern/gallery-2.png", alt: "Intern system HR view 2" },
      { src: "/projects/intern/gallery-3.png", alt: "Intern system intern view 1" },
      { src: "/projects/intern/gallery-4.png", alt: "Intern system intern view 2" },
      { src: "/projects/intern/gallery-5.png", alt: "Intern system monitoring view" },
      { src: "/projects/intern/gallery-6.png", alt: "Intern system supervisor view 1" },
      { src: "/projects/intern/gallery-7.png", alt: "Intern system supervisor view 2" },
      { src: "/projects/intern/gallery-8.png", alt: "Intern system team leader view" },
    ],
  },
  {
    slug: "signalph",
    title: "SignalPH",
    subtitle: "Sikaptala Hackathon 2026 Finalist",
    summary:
      "An AI-assisted signal intelligence platform for route-based connectivity prediction and SIM provider recommendation, with coverage mapping, weak-signal detection, crowdsourced reporting, offline readiness alerts, and anomaly logging.",
    overview:
      "SignalPH combines signal intelligence, mapping, and recommendation flows into one product concept. It was built to help people understand connectivity conditions along routes and make better provider decisions using AI-assisted insights.",
    role: "Developed the core product experience and feature set for mapping, recommendation, and reporting workflows.",
    technologies: ["React", "Node.js", "PostgreSQL", "AI Multi-Agent Architecture"],
    objectives: [
      "Predict connectivity quality along travel routes.",
      "Recommend SIM providers based on signal conditions.",
      "Surface weak-signal, offline, and anomaly insights in one interface.",
    ],
    features: [
      "Signal coverage mapping",
      "Weak-signal detection",
      "Crowdsourced reporting",
      "Offline readiness alerts",
      "Anomaly event logging",
      "AI-assisted provider recommendations",
    ],
    challenges: [
      "Combining structured map data with recommendation logic.",
      "Designing a product that remains useful even when connectivity is weak.",
      "Keeping multiple AI-assisted signals understandable to the user.",
    ],
    lessons: [
      "Recommendation systems are more credible when users can inspect the reasoning inputs.",
      "A route-based product needs both good mapping and clear alerts to be useful in practice.",
    ],
    results: ["Reached finalist status in the Sikaptala Hackathon 2026."],
    thumbnail: { src: "/projects/signalph/thumbnail.png", alt: "SignalPH map and signal intelligence preview" },
    gallery: [
      { src: "/projects/signalph/gallery-1.png", alt: "SignalPH screenshot 1" },
      { src: "/projects/signalph/gallery-2.png", alt: "SignalPH screenshot 2" },
      { src: "/projects/signalph/gallery-3.png", alt: "SignalPH screenshot 3" },
      { src: "/projects/signalph/gallery-4.png", alt: "SignalPH screenshot 4" },
      { src: "/projects/signalph/gallery-5.png", alt: "SignalPH screenshot 5" },
    ],
  },
];

export const projectMap = Object.fromEntries(projects.map((project) => [project.slug, project] as const));

export function getProjectBySlug(slug: string) {
  return projectMap[slug as ProjectSlug];
}

export const siteMetadata = {
  // Update this to your actual Vercel URL once deployed.
  // Example: "https://albert-lucido.vercel.app"
  baseUrl: "https://albert-lucido.vercel.app",
  canonicalPath: "/",
};
