"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  tag: string;
  description: string;
  thumbnail?: string;
  images: string[];
  link?: string;
  color?: string;
};

type Props = {
  projects: Project[];
  setSelectedProject: (project: Project) => void;
  isDarkMode: boolean;
  lang: "en" | "id";
};

export default function Projects({
  projects,
  setSelectedProject,
  isDarkMode,
  lang,
}: Props) {

  const txt = (id: string, en: string) => (lang === "id" ? id : en);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
        {txt("Project Saya", "My Projects")}
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((proj, i) => {

          const hasLink = !!proj.link;
          const hasImages = proj.images?.length > 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
              onClick={() => {
                if (hasLink) {
                  window.open(proj.link, "_blank");
                } else if (hasImages) {
                  setSelectedProject(proj);
                }
              }}
              className="card-cartoon p-4 cursor-pointer"
            >

              {/* IMAGE */}
              <div className="relative mb-4 overflow-hidden border-2 border-[var(--border)] shadow-[3px_3px_0px_var(--shadow)]">

                {proj.thumbnail ? (
                  <>
                    <img
                      src={proj.thumbnail}
                      className="w-full h-[220px] object-cover hover:scale-105 transition"
                    />

                    {/* GRADIENT */}
                    {proj.color && (
                      <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} opacity-40`} />
                    )}
                  </>
                ) : (
                  <div className="h-[220px] flex items-center justify-center text-sm opacity-60">
                    {txt("Tidak ada preview", "No Preview")}
                  </div>
                )}
              </div>

              {/* TAG */}
              <div className="text-xs font-bold uppercase opacity-60 mb-1">
                {proj.tag}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-black mb-2">
                {proj.title}
              </h3>

              {/* DESC */}
              <p className="text-sm opacity-70 mb-3">
                {proj.description}
              </p>

              {/* ACTION */}
              <div
                className={`text-sm font-bold ${
                  hasLink
                    ? "text-blue-500"
                    : isDarkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                {hasLink
                  ? txt("Lihat Demo →", "Live Demo →")
                  : hasImages
                  ? txt("Lihat Detail →", "View Detail →")
                  : txt("Segera Hadir", "Coming Soon")}
              </div>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}