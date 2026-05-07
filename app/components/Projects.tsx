"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

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

  const sliderRef = useRef<HTMLDivElement>(null);

  const txt = (id: string, en: string) =>
    lang === "id" ? id : en;

  /* SLIDER */
  const scroll = (dir: "left" | "right") => {

    if (!sliderRef.current) return;

    const amount = window.innerWidth < 768 ? 320 : 420;

    sliderRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });

  };

  return (
    <section
      id="projects"
      className="
      relative overflow-hidden

      py-20 md:py-28
      px-5 md:px-6

      max-w-7xl mx-auto

      text-black dark:text-white

      transition-colors duration-300
    "
    >

      {/* BG GLOW */}
      <div className="
      absolute inset-0
      pointer-events-none
      overflow-hidden
      ">

        <div className="
        absolute top-20 left-10
        w-60 md:w-72
        h-60 md:h-72
        bg-cyan-400/10 dark:bg-cyan-400/20
        rounded-full blur-3xl
        " />

        <div className="
        absolute bottom-0 right-0
        w-72 md:w-96
        h-72 md:h-96
        bg-pink-500/10 dark:bg-pink-500/20
        rounded-full blur-3xl
        " />

      </div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="
        relative z-10

        text-center

        mb-12 md:mb-16
        "
      >

        {/* BADGE */}
        <div className="
        inline-flex items-center gap-2

        bg-cyan-400
        dark:bg-cyan-300

        text-black

        border-4
        border-black
        dark:border-white/70

        px-4 py-2
        md:px-6 md:py-3

        text-xs sm:text-sm
        font-black

        rounded-xl

        shadow-[5px_5px_0px_#000]
        dark:shadow-[5px_5px_0px_rgba(255,255,255,0.2)]

        rotate-[-2deg]

        mb-6 md:mb-8
        ">

          🚀 FEATURED WORKS

        </div>

        {/* TITLE */}
        <h2 className="
        text-3xl sm:text-5xl md:text-7xl

        font-black

        leading-[0.95]
        tracking-tight
        ">

          <span className="
          bg-gradient-to-r

          from-pink-500
          via-orange-400
          to-yellow-300

          dark:from-pink-400
          dark:via-orange-300
          dark:to-yellow-200

          bg-clip-text
          text-transparent
          ">

            {txt("Project Saya", "My Projects")}

          </span>

        </h2>

        {/* DESC */}
        <p className="
        mt-5 md:mt-6

        max-w-2xl
        mx-auto

        text-sm md:text-lg

        leading-relaxed

        text-gray-700
        dark:text-gray-300
        ">

          {txt(
            "Beberapa project yang saya bangun mulai dari website company profile, event bazaar, landing page promosi, hingga modern web applications.",
            "A collection of projects I built ranging from company profile websites, promotional landing pages, bazaar events, and modern web applications."
          )}

        </p>

      </motion.div>

      {/* CONTROLS */}
      <div className="
      relative z-10

      flex items-center justify-end

      gap-3

      mb-6
      ">

        <button
          onClick={() => scroll("left")}
          className="
          w-12 h-12

          flex items-center justify-center

          rounded-xl

          bg-white
          dark:bg-[#111827]

          border-4
          border-black
          dark:border-white/70

          shadow-[4px_4px_0px_#000]
          dark:shadow-[4px_4px_0px_rgba(255,255,255,0.2)]

          hover:translate-x-1
          hover:translate-y-1
          hover:shadow-none

          transition-all
          "
        >

          <ChevronLeft className="w-5 h-5" />

        </button>

        <button
          onClick={() => scroll("right")}
          className="
          w-12 h-12

          flex items-center justify-center

          rounded-xl

          bg-white
          dark:bg-[#111827]

          border-4
          border-black
          dark:border-white/70

          shadow-[4px_4px_0px_#000]
          dark:shadow-[4px_4px_0px_rgba(255,255,255,0.2)]

          hover:translate-x-1
          hover:translate-y-1
          hover:shadow-none

          transition-all
          "
        >

          <ChevronRight className="w-5 h-5" />

        </button>

      </div>

      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="
        relative z-10

        flex gap-6 md:gap-8

        overflow-x-auto
        scroll-smooth

        pb-6

        snap-x snap-mandatory

        no-scrollbar
        "
      >

        {projects.map((proj, i) => {

          const hasLink = !!proj.link;
          const hasImages = proj.images?.length > 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={
                typeof window !== "undefined" &&
                window.innerWidth > 768
                  ? {
                      y: -10,
                      rotate: i % 2 === 0 ? -1 : 1,
                    }
                  : {
                      y: -3,
                    }
              }
              onClick={() => {
                if (hasLink) {
                  window.open(proj.link, "_blank");
                } else if (hasImages) {
                  setSelectedProject(proj);
                }
              }}
              className="
              group
              relative

              min-w-[300px]
              md:min-w-[380px]

              max-w-[300px]
              md:max-w-[380px]

              snap-start

              overflow-hidden

              rounded-3xl

              border-4
              border-black
              dark:border-white/70

              bg-white
              dark:bg-[#111827]

              shadow-[8px_8px_0px_#000]
              dark:shadow-[8px_8px_0px_rgba(255,255,255,0.2)]

              transition-all duration-300

              cursor-pointer
              "
            >

              {/* TOP BAR */}
              <div className="
              flex items-center justify-between

              px-5 py-4

              border-b-4
              border-black
              dark:border-white/70

              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-500

              text-white
              ">

                {/* TAG */}
                <div className="
                text-[10px] md:text-xs

                font-black

                uppercase

                tracking-widest
                ">

                  {proj.tag}

                </div>

                {/* ICON */}
                <div className="
                w-9 h-9 md:w-10 md:h-10

                bg-black

                border-2 border-white

                rotate-12

                flex items-center justify-center

                shadow-[3px_3px_0px_white]

                group-hover:rotate-0

                transition
                ">

                  💻

                </div>

              </div>

              {/* THUMB */}
              <div className="
              relative overflow-hidden
              ">

                {proj.thumbnail ? (
                  <>
                    <img
                      src={proj.thumbnail}
                      alt={proj.title}
                      className="
                      w-full

                      h-[200px] md:h-[240px]

                      object-cover

                      transition duration-500

                      group-hover:scale-105
                      "
                    />

                    {/* OVERLAY */}
                    <div className="
                    absolute inset-0

                    bg-gradient-to-t
                    from-black/70
                    via-black/20
                    to-transparent
                    " />

                    {/* FX */}
                    {proj.color && (
                      <div
                        className={`
                        absolute inset-0

                        bg-gradient-to-br

                        ${proj.color}

                        opacity-30
                        mix-blend-overlay
                      `}
                      />
                    )}

                    {/* LABEL */}
                    <div className="
                    absolute bottom-4 left-4

                    bg-yellow-300
                    dark:bg-yellow-400

                    text-black

                    border-2 border-black

                    px-3 py-2

                    text-[10px] md:text-xs
                    font-black

                    rounded-lg

                    shadow-[3px_3px_0px_#000]

                    rotate-[-2deg]
                    ">

                      ✨ Featured Project

                    </div>
                  </>
                ) : (
                  <div className="
                  h-[200px] md:h-[240px]

                  flex items-center justify-center

                  bg-gray-200
                  dark:bg-gray-800

                  text-sm font-bold
                  ">

                    {txt("Tidak ada preview", "No Preview")}

                  </div>
                )}

              </div>

              {/* CONTENT */}
              <div className="
              p-5 md:p-6
              ">

                {/* TITLE */}
                <h3 className="
                text-xl md:text-2xl

                font-black

                mb-3

                leading-tight
                ">

                  {proj.title}

                </h3>

                {/* DESC */}
                <p className="
                text-sm

                leading-relaxed

                text-gray-700
                dark:text-gray-300

                min-h-[90px]
                ">

                  {proj.description}

                </p>

                {/* ACTION */}
                <div className="
                mt-6 md:mt-8
                ">

                  <div className={`
                  inline-flex items-center gap-2

                  px-4 py-3 md:px-5

                  border-4
                  border-black
                  dark:border-white/70

                  rounded-xl

                  text-xs md:text-sm
                  font-black

                  shadow-[4px_4px_0px_#000]
                  dark:shadow-[4px_4px_0px_rgba(255,255,255,0.2)]

                  transition-all

                  group-hover:translate-x-1
                  group-hover:translate-y-1
                  group-hover:shadow-none

                  ${
                    hasLink
                      ? "bg-pink-500 text-white"
                      : hasImages
                      ? "bg-cyan-400 text-black"
                      : "bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
                  }
                  `}>

                    {hasLink
                      ? txt("🌐 Live Demo", "🌐 Live Demo")
                      : hasImages
                      ? txt("🔍 View Detail", "🔍 View Detail")
                      : txt("⏳ Coming Soon", "⏳ Coming Soon")}

                    <span className="text-lg">
                      →
                    </span>

                  </div>

                </div>

              </div>

              {/* DECOR */}
              <div className="
              absolute
              -top-3 -left-3

              w-7 h-7 md:w-8 md:h-8

              bg-yellow-300

              border-4 border-black

              rotate-12
              " />

              <div className="
              absolute
              -bottom-3 -right-3

              w-7 h-7 md:w-8 md:h-8

              bg-pink-500

              border-4 border-black

              rotate-12
              " />

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}