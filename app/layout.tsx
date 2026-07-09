import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { profile, siteMetadata } from "@/data/site";
import "../styles/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.baseUrl),
  title: {
    default: `${profile.name} | ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  alternates: {
    canonical: siteMetadata.canonicalPath,
  },
  keywords: [profile.name, profile.title, "Portfolio", "Next.js", "TypeScript", "React", "React Native", "Node.js", "FastAPI", "PostgreSQL"],
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.summary,
    type: "website",
    images: [
      {
        url: profile.image,
        width: 1200,
        height: 1200,
        alt: `${profile.name} profile picture`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.title}`,
    description: profile.summary,
    images: [profile.image],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable} h-full scroll-smooth`}>
      <body className="min-h-full antialiased">
        {children}
      </body>
    </html>
  );
}
