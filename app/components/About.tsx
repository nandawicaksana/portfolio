"use client";

import { motion } from "framer-motion";
type Props = {
  lang: "en" | "id";
  isDarkMode: boolean;
};

export default function About({ lang, isDarkMode }: Props) {
  const txt = (id: string, en: string) => (lang === "id" ? id : en);

  // TEXT
  const paragraphs = [
    txt(
      "Saya adalah Full Stack Developer dengan pengalaman membangun sistem bisnis yang stabil dan scalable di production.",
      "I am a Full Stack Developer experienced in building stable and scalable business systems in production."
    ),
    txt(
      "Fokus pada Laravel, Next.js, dan performance optimization untuk memastikan sistem berjalan cepat, aman, dan efisien.",
      "Focused on Laravel, Next.js, and performance optimization to ensure systems run fast, secure, and efficient."
    ),
    txt(
      "Berpengalaman meningkatkan performa hingga 70% dan membangun sistem yang digunakan langsung dalam operasional bisnis.",
      "Experienced in improving performance by up to 70% and building systems used directly in business operations."
    ),
  ];

  // BADGES (hindari class dinamis)
  const badges = [
    {
      text: txt(
        "🎓 Sarjana Sistem Informasi - Universitas Nusa Mandiri",
        "🎓 Bachelor’s Degree in Information Systems - Nusa Mandiri University"
      ),
      className:
        "border-purple-400 bg-purple-200 dark:bg-gradient-to-br dark:from-purple-500/30 dark:to-fuchsia-600/20 font-bold text-gray-900 dark:text-purple-200",
    },
    {
      text: "📍 Bekasi, Indonesia",
      className:
        "border-blue-400 bg-blue-200 dark:bg-gradient-to-br dark:from-blue-500/30 dark:to-cyan-500/20 text-gray-900 dark:text-blue-200",
    },
    {
      text: txt("💼 Tersedia untuk bekerja ditempat / jarak jauh", "💼 Available for work on-site / remote"),
      className:
        "border-green-400 bg-green-200 dark:bg-gradient-to-br dark:from-green-500/30 dark:to-emerald-500/20 text-gray-900 dark:text-green-200",
    },
  ];

  // SKILLS
  const skills = [
    {
      title: "Clean Code",
      desc: txt(
        "Menulis kode yang scalable dan mudah dirawat.",
        "Writing scalable and maintainable code."
      ),
      icon: "💻",
      color: "bg-pink-300",
    },
    {
      title: "Problem Solving",
      desc: txt(
        "Menyelesaikan masalah kompleks dengan efisien.",
        "Solving complex problems efficiently."
      ),
      icon: "🧠",
      color: "bg-blue-300",
    },
    {
      title: txt("Kolaborasi", "Collaboration"),
      desc: txt(
        "Bekerja efektif dalam tim dan komunikasi.",
        "Working effectively in teams and communication."
      ),
      icon: "👥",
      color: "bg-green-300",
    },
    {
      title: txt("Performa", "Performance"),
      desc: txt(
        "Optimasi sistem untuk kecepatan & stabilitas.",
        "Optimizing systems for speed and stability."
      ),
      icon: "⚡",
      color: "bg-purple-300",
    },
  ];

  return (
    <motion.section
      id="about"
      className="py-32 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* LEFT */}
      <div>
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          {txt("Tentang", "About")}{" "}
          <span className="text-blue-500">Me</span>
        </h2>

        <div className="w-16 h-[4px] bg-green-400 mb-6"></div>

        {/* PARAGRAPHS */}
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className={`${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } mb-4`}
          >
            {p}
          </p>
        ))}

        {/* BADGES */}
        <div className="flex flex-wrap gap-4 mt-6">
          {badges.map((b, i) => (
            <div
              key={i}
              className={`
                border-2 border-black dark:border-white
                px-4 py-2 rounded-lg
                shadow-[3px_3px_0px_black] dark:shadow-[0_0_12px_rgba(0,0,0,0.3)]
                ${b.className}
                text-sm font-bold tracking-wide
                text-black dark:text-white
              `}
            >
              {b.text}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="grid grid-cols-2 gap-8">

  {skills.map((s, i) => (
    <div key={i} className="relative">

      {/* SHADOW */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black rounded-xl" />

      {/* CARD */}
      <motion.div
        whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
        className="relative 
        card-cartoon p-6 
        bg-white dark:bg-gray-900 
        border-4 border-black font dark:border-white"
      >

        {/* ICON FLOAT */}
        <motion.div
          className={`absolute -top-4 -left-4 ${s.color} 
          border-2 border-black p-3 shadow-[4px_4px_0px_black]`}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {s.icon}
        </motion.div>

        {/* TITLE */}
        <h3 className="font-black text-lg mt-4 mb-2">
          {s.title}
        </h3>

        {/* DESC */}
        <p className="text-sm opacity-70">
          {s.desc}
        </p>

      </motion.div>

    </div>
  ))}

</div>
    </motion.section>
  );
}