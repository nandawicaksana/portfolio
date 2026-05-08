"use client";

import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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
  setSelectedProject: (
    project: Project
  ) => void;

  lang: "en" | "id";
};

export default function Projects({
  projects,
  setSelectedProject,
  lang,
}: Props) {

  const sliderRef =
    useRef<HTMLDivElement>(null);

  const txt = (
    id: string,
    en: string
  ) => (
    lang === "id"
      ? id
      : en
  );

  /* SLIDER */
  const scroll = (
    dir: "left" | "right"
  ) => {

    if (!sliderRef.current)
      return;

    const amount =
      window.innerWidth < 768
        ? 320
        : 420;

    sliderRef.current.scrollBy({
      left:
        dir === "left"
          ? -amount
          : amount,

      behavior: "smooth",
    });

  };

  /* REUSABLE */
  const borderClass =
    "border-4 border-[var(--border)]";

  const shadowClass =
    "shadow-[6px_6px_0px_var(--shadow)]";

  const btnClass = `
  w-12 h-12

  flex items-center justify-center

  rounded-xl

  bg-[var(--bg)]
  text-[var(--text)]

  ${borderClass}

  shadow-[4px_4px_0px_var(--shadow)]

  hover:shadow-none

  transition-all
  `;

  return (
    <section
      id="projects"
      className="
      relative overflow-hidden

      py-24 md:py-32
      px-6

      max-w-7xl mx-auto

      text-[var(--text)]
      "
    >

      {/* BG */}
      <div className="
      absolute inset-0
      overflow-hidden
      pointer-events-none
      ">

        <div className="
        absolute top-10 left-10

        w-72 h-72

        rounded-full
        blur-3xl

        bg-cyan-400/10
        dark:bg-cyan-400/20
        " />

        <div className="
        absolute bottom-0 right-0

        w-96 h-96

        rounded-full
        blur-3xl

        bg-pink-500/10
        dark:bg-pink-500/20
        " />

      </div>

      {/* HEADER */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: .6,
        }}

        viewport={{
          once: true,
        }}

        className="
        relative z-10

        text-center

        mb-12 md:mb-16
        "
      >

        {/* TITLE */}
        <h2 className="
        text-4xl md:text-5xl

        font-black

        mb-6
        ">

          {txt(
            "Project",
            "My"
          )}{" "}

          <span className="
          text-blue-500
          dark:text-cyan-400
          ">

            {txt(
              "Saya",
              "Projects"
            )}

          </span>

        </h2>

        {/* LINE */}
        <div className="
        w-16 h-[4px]

        bg-green-400

        mx-auto

        mb-6
        " />

        {/* DESC */}
        <p className="
        max-w-2xl
        mx-auto

        text-sm md:text-lg

        leading-relaxed

        text-black/700
        dark:text-white/700
        ">

          {txt(
            "Beberapa project yang saya bangun mulai dari website company profile, event bazaar, landing page promosi, hingga modern web applications.",
            "A collection of projects I built ranging from company profile websites, promotional landing pages, bazaar events, and modern web applications."
          )}

        </p>

      </motion.div>

      {/* CONTROL */}
      <div className="
      relative z-10

      flex items-center justify-end

      gap-3

      mb-6
      ">

        <button
          onClick={() =>
            scroll("left")
          }

          className={btnClass}
        >

          <ChevronLeft className="w-5 h-5" />

        </button>

        <button
          onClick={() =>
            scroll("right")
          }

          className={btnClass}
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

        {projects.map((
          proj,
          i
        ) => {

          const hasLink =
            !!proj.link;

          const hasImages =
            proj.images?.length > 0;

          return (
            <motion.div
              key={i}

              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: i * .08,
              }}

              viewport={{
                once: true,
              }}

              whileHover={{
                y: -8,
                rotate:
                  i % 2 === 0
                    ? -1
                    : 1,
              }}

              onClick={() => {

                if (hasLink) {

                  window.open(
                    proj.link,
                    "_blank"
                  );

                } else if (
                  hasImages
                ) {

                  setSelectedProject(
                    proj
                  );

                }

              }}

              className={`
              group relative

              min-w-[300px]
              md:min-w-[380px]

              max-w-[300px]
              md:max-w-[380px]

              snap-start

              overflow-hidden

              rounded-3xl

              bg-[var(--bg)]

              ${borderClass}
              ${shadowClass}

              transition-all duration-300

              cursor-pointer
              `}
            >

              {/* TOP */}
              <div className="
              flex items-center justify-between

              px-5 py-4

              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-500

              text-white

              border-b-4 border-[var(--border)]
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

                flex items-center justify-center

                rounded-xl

                rotate-12

                bg-[var(--text)]
                text-[var(--bg)]

                border-2 border-[var(--bg)]

                shadow-[3px_3px_0px_var(--bg)]

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

                    px-3 py-2

                    rounded-lg

                    text-[10px] md:text-xs
                    font-black

                    rotate-[-2deg]

                    bg-yellow-300
                    dark:bg-yellow-400

                    text-black

                    border-2 border-[var(--border)]

                    shadow-[3px_3px_0px_var(--shadow)]
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

                    {txt(
                      "Tidak ada preview",
                      "No Preview"
                    )}

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

                leading-tight

                mb-3
                ">

                  {proj.title}

                </h3>

                {/* DESC */}
                <p className="
                text-sm

                leading-relaxed

                min-h-[90px]

                text-black/700
                dark:text-white/700
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

                  rounded-xl

                  text-xs md:text-sm
                  font-black

                  transition-all

                  ${borderClass}

                  shadow-[4px_4px_0px_var(--shadow)]

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
                      ? txt(
                          "🌐 Live Demo",
                          "🌐 Live Demo"
                        )
                      : hasImages
                      ? txt(
                          "🔍 View Detail",
                          "🔍 View Detail"
                        )
                      : txt(
                          "⏳ Coming Soon",
                          "⏳ Coming Soon"
                        )}

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

              rotate-12

              bg-yellow-300

              border-4 border-[var(--border)]
              " />

              <div className="
              absolute
              -bottom-3 -right-3

              w-7 h-7 md:w-8 md:h-8

              rotate-12

              bg-pink-500

              border-4 border-[var(--border)]
              " />

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}