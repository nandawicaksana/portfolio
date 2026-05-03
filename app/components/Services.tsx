"use client";

import { motion } from "framer-motion";
type Props = {
  lang: "en" | "id";
  isDarkMode: boolean;
};



export default function Services({ lang, isDarkMode }: Props) {
  const txt = (id: string, en: string) => (lang === "id" ? id : en);

  const services = [
    {
      title: "Web Development",
      desc: txt(
        "Membangun website modern, cepat, dan scalable.",
        "Building modern, fast, and scalable websites."
      ),
      icon: "🌐",
      color: "bg-blue-300",
    },
    {
      title: "SEO Optimization",
      desc: txt(
        "Optimasi website agar ranking di Google.",
        "Optimizing websites to rank on Google."
      ),
      icon: "📈",
      color: "bg-green-300",
    },
    {
      title: "System Security",
      desc: txt(
        "Menjaga sistem tetap aman dari ancaman.",
        "Keeping systems secure from threats."
      ),
      icon: "🔒",
      color: "bg-purple-300",
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto text-center">

      <h2 className="text-3xl md:text-4xl font-black mb-12">
        {txt("Layanan", "Services")}
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="card-cartoon p-6"
          >

            {/* ICON */}
            <div className={`w-14 h-14 flex items-center justify-center text-2xl mb-4 mx-auto 
            border-2 border-[var(--border)] shadow-[3px_3px_0px_var(--shadow)] ${s.color}`}>
              {s.icon}
            </div>

            <h3 className="font-black text-lg mb-2">
              {s.title}
            </h3>

            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm`}>
              {s.desc}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}