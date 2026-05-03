"use client";

import { motion } from "framer-motion";

type Props = {
  lang: "en" | "id";
};

export default function Tools({ lang }: Props) {
  const txt = (id: string, en: string) => (lang === "id" ? id : en);

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
    <section id="tools" className="py-24 px-6 max-w-6xl mx-auto text-center">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-black mb-12">
        {txt("Tools & Teknologi", "Tools & Technologies")}
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">

        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.03 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, rotate: i % 2 === 0 ? -4 : 4 }}
            className="relative group"
          >

            {/* FLOAT EFFECT */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              {/* BOX */}
              <div
                className={`w-16 h-16 flex items-center justify-center 
                border-2 border-[var(--border)] 
                shadow-[4px_4px_0px_var(--shadow)] 
                ${colors[i % colors.length]}`}
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-8 h-8 object-contain"
                />
              </div>

            </motion.div>

            {/* LABEL */}
            <div className="mt-2 text-[11px] font-black text-center">
              {tool.name}
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}