import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Albert Lucido | Software Developer",
    template: "%s | Albert Lucido",
  },
  description:
    "Personal portfolio of Albert Lucido, a software developer focused on modern web, mobile, and AI-powered applications.",
  keywords: [
    "Albert Lucido",
    "Software Developer",
    "Portfolio",
    "Next.js",
    "TypeScript",
    "React",
  ],
  openGraph: {
    title: "Albert Lucido | Software Developer",
    description:
      "Explore projects, skills, and contact details for Albert Lucido.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[#0B1120] text-[#F8FAFC] antialiased">
        {children}
      </body>
    </html>
  );
}
