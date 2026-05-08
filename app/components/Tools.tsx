"use client";

import { motion } from "framer-motion";

type Props = {
  lang: "en" | "id";
};

export default function Tools({
  lang,
}: Props) {

  const txt = (
    id: string,
    en: string
  ) => (
    lang === "id"
      ? id
      : en
  );

  const tools = [
    { name: "React", icon: "https://cdn.simpleicons.org/react" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
    { name: "Vue", icon: "https://cdn.simpleicons.org/vue.js" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "Express", icon: "https://cdn.simpleicons.org/express" },
    { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel" },
    { name: "PHP", icon: "https://cdn.simpleicons.org/php" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
    { name: "GitLab", icon: "https://cdn.simpleicons.org/gitlab" },
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss" },
  ];

  const colors = [
    "bg-yellow-300",
    "bg-blue-300",
    "bg-green-300",
    "bg-pink-300",
    "bg-purple-300",
    "bg-orange-300",
  ];

  return (
    <section
      id="tools"
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
        absolute top-10 right-10

        w-72 h-72

        rounded-full
        blur-3xl

        bg-cyan-400/10
        dark:bg-cyan-400/20
        " />

        <div className="
        absolute bottom-0 left-0

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
          y: 40,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: .5,
        }}

        viewport={{
          once: true,
        }}

        className="
        relative z-10

        text-center

        mb-14
        "
      >

        <h2 className="
        text-4xl md:text-5xl

        font-black

        mb-6
        ">

          {txt(
            "Tools",
            "Tools"
          )}{" "}

          <span className="
          text-blue-500
          dark:text-cyan-400
          ">

            & Technologies

          </span>

        </h2>

        <div className="
        w-16 h-[4px]

        bg-green-400

        mx-auto

        mb-6
        " />

        <p className="
        max-w-2xl mx-auto

        text-sm md:text-lg

        leading-relaxed

        text-black/700
        dark:text-white/700
        ">

          {txt(
            "Teknologi dan tools yang sering saya gunakan dalam pengembangan web modern.",
            "Technologies and tools I frequently use in modern web development."
          )}

        </p>

      </motion.div>

      {/* GRID */}
      <div className="
      relative z-10

      grid

      grid-cols-3
      sm:grid-cols-4
      md:grid-cols-5
      lg:grid-cols-8

      gap-6 md:gap-8

      justify-items-center
      ">

        {tools.map((
          tool,
          i
        ) => (

          <motion.div
            key={tool.name}

            initial={{
              opacity: 0,
              scale: .8,
            }}

            whileInView={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              delay: i * .03,
            }}

            viewport={{
              once: true,
            }}

            whileHover={{
              y: -8,
              rotate:
                i % 2 === 0
                  ? -4
                  : 4,
            }}

            className="
            relative group
            "
          >

            {/* FLOAT */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}

              transition={{
                duration: 2,
                delay: i * .08,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              {/* BOX */}
              <div className={`
              w-20 h-20

              md:w-24 md:h-24

              flex items-center justify-center

              rounded-2xl

              border-4 border-[var(--border)]

              shadow-[6px_6px_0px_var(--shadow)]

              transition-all duration-300

              group-hover:shadow-none

              ${colors[i % colors.length]}
              `}>

                <img
                  src={tool.icon}
                  alt={tool.name}

                  className="
                  w-10 h-10
                  md:w-12 md:h-12

                  object-contain
                  "
                />

              </div>

            </motion.div>

            {/* LABEL */}
            <div className="
            mt-3

            text-xs md:text-sm

            font-black

            text-center
            ">

              {tool.name}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}