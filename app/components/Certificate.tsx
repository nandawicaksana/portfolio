"use client";

import { motion } from "framer-motion";

type Props = {
  lang: "en" | "id";
};

export default function Certificate({ lang }: Props) {
  const txt = (id: string, en: string) => (lang === "id" ? id : en);

  const certificates = [
    {
      title: "Fullstack Web Developer",
      issuer: "Dicoding",
      image: "/certificates/dicoding.png",
      color: "from-blue-400 to-cyan-400",
    },
    {
      title: "Cyber Security Fundamentals",
      issuer: "Cisco",
      image: "/certificates/cisco.png",
      color: "from-green-400 to-emerald-400",
    },
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      image: "/certificates/udemy.png",
      color: "from-purple-400 to-pink-400",
    },
  ];

  return (
    <section id="certificate" className="py-24 px-6 max-w-6xl mx-auto">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
        🎓 {txt("Sertifikat", "Certificates")}
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">

        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
            className="card-cartoon p-4"
          >

            {/* IMAGE */}
            <div className="relative mb-4 overflow-hidden rounded-lg border-2 border-[var(--border)] shadow-[3px_3px_0px_var(--shadow)]">

              <img
                src={cert.image}
                className="w-full h-[180px] object-cover"
              />

              {/* GRADIENT OVERLAY */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-20`} />
            </div>

            {/* TITLE */}
            <h3 className="font-black text-lg mb-1">
              {cert.title}
            </h3>

            {/* ISSUER */}
            <p className="text-sm opacity-70">
              {cert.issuer}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}