"use client";

import { motion } from "framer-motion";

export default function CertificateSection({ isDarkMode }) {

  const certificates = [
    {
      title: "Cyber Security Fundamentals",
      issuer: "Cisco Networking Academy",
      color: "from-purple-400 to-pink-400",
      darkColor: "from-purple-500/30 to-pink-500/20",
    },
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      color: "from-blue-400 to-cyan-400",
      darkColor: "from-blue-500/30 to-cyan-500/20",
    },
    {
      title: "SEO Optimization Mastery",
      issuer: "Google Digital Garage",
      color: "from-green-400 to-emerald-400",
      darkColor: "from-green-500/30 to-emerald-500/20",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-black text-center mb-16">
        Certifications 🚀
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">

        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? -1 : 1 }}
            className={`
              p-6 rounded-2xl border-2 
              ${isDarkMode ? "border-white/20" : "border-black"}
              
              bg-gradient-to-br 
              ${isDarkMode ? cert.darkColor : cert.color}
              
              shadow-[4px_4px_0px_black] 
              dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]
              
              backdrop-blur
              cursor-pointer
              transition duration-300
            `}
          >

            {/* ICON */}
            <div className="text-3xl mb-4">🏆</div>

            {/* TITLE */}
            <h3 className="text-lg font-bold mb-2">
              {cert.title}
            </h3>

            {/* ISSUER */}
            <p className="text-sm opacity-80">
              {cert.issuer}
            </p>

            {/* BADGE */}
            <div className="mt-4 text-xs font-bold tracking-widest opacity-70">
              CERTIFIED
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}