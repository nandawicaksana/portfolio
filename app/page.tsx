"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";
type Project = {
  title: string;
  tag: string;
  description: string;
  thumbnail?: string;
  images: string[];
  link?: string;
};
export default function Home() {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const isDarkMode = theme === "dark";
  const projects = [
  {
    title: "HRMS Enterprise",
    tag: "Management",
    description: "Sistem HR terintegrasi",
    thumbnail: "/projects/hrms/hrms-index-dashboard-chart.png",
    images: [
      "/projects/hrms/hrms-index-dashboard-chart.png"
    ]
  },
  {
    title: "Teknifix",
    tag: "Live Project",
    description: "Company profile website",
    link: "https://teknifix.vercel.app",
    thumbnail: "/projects/teknifix/teknifixvercel.png",
    images: [
      "/projects/teknifix/teknifixvercel.png"
    ]
  }
];

  const [lang, setLang] = useState<"en" | "id">("en");

  return (
    <main>

      <Navbar lang={lang} setLang={setLang} />

      <Hero lang={lang} />

      <About lang={lang} isDarkMode={isDarkMode} />

      <Services lang={lang} isDarkMode={isDarkMode} />

      <Projects projects={projects} setSelectedProject={setSelectedProject} isDarkMode={isDarkMode}
/>

      <Certificate lang={lang} />

      <Contact lang={lang} />

      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white dark:bg-gray-900 p-6 rounded-xl max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >

            <h3 className="text-xl font-bold mb-4">
              {selectedProject.title}
            </h3>

            {selectedProject.images.map((img, i) => (
              <img key={i} src={img} className="mb-3 rounded-lg" />
            ))}

            <button
              onClick={() => setSelectedProject(null)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </main>
  );
}