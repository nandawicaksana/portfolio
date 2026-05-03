"use client";

import { motion } from "framer-motion";

type Props = {
  projects: any[];
  setSelectedProject: (project: any) => void;
  isDarkMode: boolean;
};

export default function Projects({ projects, setSelectedProject, isDarkMode }: Props) {

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
        My <span className="text-blue-500">Projects</span>
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
              className="card-cartoon p-4 cursor-pointer hover:shadow-xl transition duration-300"
            >

              {/* IMAGE */}
              <div className="border-2 border-[var(--border)] shadow-[3px_3px_0px_var(--shadow)] overflow-hidden mb-4 bg-white dark:bg-gray-900">
                {proj.thumbnail ? (
                  <img
                    src={proj.thumbnail}
                    className="w-full h-[220px] object-cover hover:scale-105 transition"
                  />
                ) : (
                  <div className="h-[220px] flex items-center justify-center text-sm opacity-60">
                    No Preview
                  </div>
                )}
              </div>

              {/* TAG */}
              <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">
                {proj.tag}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-black mb-2">
                {proj.title}
              </h3>

              {/* DESCRIPTION */}
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
                  ? "Live Demo →"
                  : hasImages
                  ? "View Detail →"
                  : "Coming Soon"}
              </div>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}