"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tools from "@/components/Tools";
import Projects from "@/components/Projects";
import Certificate from "@/components/Certificate";
import ProjectModal from "@/components/ProjectModal";
import Footer from "@/components/Footer";

type Project = {
  title: string;
  tag: string;
  description: string;
  thumbnail?: string;
  images: string[];
  link?: string;
  color?: string;
};

export default function Home() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const [lang, setLang] = useState<"en" | "id">("en");
  const txt = (id: string, en: string) => {
  return lang === "id" ? id : en;
};
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

 const projects: Project[] = [
  {
    title: "HRMS Enterprise",
    tag: txt("Manajemen", "Management"),
    color: "from-blue-600/40",
    thumbnail: "/projects/hrms/hrms-index-dashboard-chart.png",
    description: txt(
      "Sistem HR terintegrasi untuk pengelolaan karyawan, data pekerja, dashboard analytics, dan operasional perusahaan.",
      "Integrated HR system for employee management, workforce data, dashboard analytics, and company operations."
    ),
    images: [
      "/projects/hrms/hrms-halaman-auth-login.png",
      "/projects/hrms/hrms-index-dashboard-chart.png",
      "/projects/hrms/hrms-index-data-pekerja.png",
    ]
  },

  {
    title: "Reservasi Ruang Rapat",
    tag: txt("Penjadwalan", "Scheduling"),
    color: "from-orange-500/30",
    thumbnail: "/projects/agenda/index.png",
    description: txt(
      "Sistem booking ruang meeting untuk mempermudah penjadwalan dan manajemen penggunaan ruang rapat.",
      "Meeting room booking system designed to simplify scheduling and room management."
    ),
    images: [
      "/projects/agenda/index.png",
      "/projects/agenda/login.png",
    ]
  },

  {
    title: "Teknifix",
    tag: txt("Project Live", "Live Project"),
    color: "from-cyan-500/30",
    description: txt(
      "Website company profile modern dengan desain responsive dan tampilan profesional.",
      "Modern company profile website with responsive design and professional appearance."
    ),
    link: "https://teknifix.vercel.app",
    thumbnail: "/projects/teknifix/teknifixvercel.png",
    images: [
      "/projects/teknifix/teknifixvercel.png"
    ]
  },
{
  title: "Suciana Portfolio",
  tag: txt("Portfolio Website", "Portfolio Website"),
  color: "from-pink-500/30",
  description: txt(
    "Website portfolio modern dengan desain responsive, animasi interaktif, dark mode, dan optimasi UI/UX untuk personal branding.",
    "Modern portfolio website with responsive design, interactive animations, dark mode, and UI/UX optimization for personal branding."
  ),
  link: "https://suciana.vercel.app",
  thumbnail: "/projects/suciana/suciana.png",
  images: [
    "/projects/suciana/suciana.png"
  ]
},

  {
    title: "Allfourstrings",
    tag: txt("Revamp Website", "Website Revamp"),
    color: "from-cyan-500/30",
    description: txt(
      "Melakukan redesign dan perapihan website company profile termasuk optimasi UI/UX, responsive layout, dan SEO.",
      "Revamped the company profile website including UI/UX improvements, responsive layouts, and SEO optimization."
    ),
    link: "https://www.allfourstrings-id.com/",
    thumbnail: "/projects/allfourstrings/allfourstrings.png",
    images: [
      "/projects/allfourstrings/allfourstrings.png"
    ]
  },

  {
    title: "Cargo.in",
    tag: txt("Project Monitoring", "Project Monitoring"),
    color: "from-blue-500/30",
    description: txt(
      "Berperan dalam monitoring dan koordinasi pengembangan website sesuai kebutuhan dan arahan client.",
      "Handled project monitoring and development coordination based on client requirements and business direction."
    ),
    link: "https://cgoin.com/",
    thumbnail: "/projects/cgoin/cgoin.png",
    images: [
      "/projects/cgoin/cgoin.png"
    ]
  },

  {
    title: "Everlogi AI Chatbot / Evi.AI",
    tag: txt("Integrasi AI", "AI Integration"),
    color: "from-pink-500/30",
    description: txt(
      "Mengimplementasikan chatbot AI yang dapat menjawab pertanyaan customer berdasarkan data dan knowledge perusahaan.",
      "Implemented an AI-powered chatbot capable of answering customer questions using company knowledge and business data."
    ),
    link: "https://everlogi.com/",
    thumbnail: "/projects/everlogi/everlogi.png",
    images: [
      "/projects/everlogi/everlogi.png"
    ]
  },
];

  /* ESC CLOSE ONLY */
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);

  return (
    <main>

      <Navbar lang={lang} setLang={setLang} />

      <Hero lang={lang} />

      <About lang={lang} isDarkMode={isDarkMode} />

      <Tools lang={lang} />

      <Projects
        projects={projects}
        setSelectedProject={setSelectedProject}
        isDarkMode={isDarkMode}
        lang={lang}
      />

      <Certificate lang={lang} />


      <Footer lang={lang} isDarkMode={isDarkMode} />

      {/* ✅ ONLY ONE MODAL */}
      {selectedProject && (
        <ProjectModal
          key={selectedProject.title}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </main>
  );
}