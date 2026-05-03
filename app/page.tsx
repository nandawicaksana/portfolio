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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "HRMS Enterprise",
      tag: "Management",
      color: "from-blue-600/40",
      thumbnail: "/projects/hrms/hrms-index-dashboard-chart.png",
      description: "Sistem HR terintegrasi.",
      images: [
        "/projects/hrms/hrms-halaman-auth-login.png",
        "/projects/hrms/hrms-index-dashboard-chart.png",
        "/projects/hrms/hrms-index-data-pekerja.png",
      ]
    },
    {
      title: "Reservasi Ruang Rapat",
      tag: "Scheduling",
      color: "from-orange-500/30",
      thumbnail: "/projects/agenda/index.png",
      description: "Sistem booking ruang meeting.",
      images: [
        "/projects/agenda/index.png",
        "/projects/agenda/login.png",
      ]
    },
    {
      title: "Teknifix",
      tag: "Live Project",
      color: "from-cyan-500/30",
      description: "Website company profile.",
      link: "https://teknifix.vercel.app",
      thumbnail: "/projects/teknifix/teknifixvercel.png",
      images: ["/projects/teknifix/teknifixvercel.png"]
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