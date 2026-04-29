"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32">

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>

          {/* BADGE */}
          <div className="badge-cartoon mb-6">
            🚀 FULL STACK DEVELOPER
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6">
            Hello, I'm <br />

            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Nanda
            </span>{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Aulia
            </span>
          </h1>

          {/* DESC */}
          <p className="font-medium text-gray-700 dark:text-gray-300 max-w-md mb-6">
            I build modern web applications, optimize performance, and secure systems for real-world business needs.
          </p>

          {/* INFO */}
          <div className="flex flex-wrap items-center gap-4 text-sm mb-8 opacity-80">
            <span>📧 nannsky9@gmail.com</span>
            <span>📍 Jakarta</span>
          </div>

          {/* CTA */}
          <div className="flex gap-4 flex-wrap">
            <a href="#projects" className="btn-cartoon btn-pink hover:scale-105 transition">
              View My Work
            </a>
            <a href="/cv.pdf" className="btn-cartoon bg-white text-black hover:scale-105 transition">
              Download CV
            </a>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-3 mt-8">
            <a href="#" className="nav-cartoon bg-[#38bdf8] hover:-translate-y-1 transition">
              <FaGithub />
            </a>
            <a href="#" className="nav-cartoon bg-[#38bdf8] hover:-translate-y-1 transition">
              <FaLinkedin />
            </a>
            <a href="#" className="nav-cartoon bg-[#38bdf8] hover:-translate-y-1 transition">
              <Mail size={16} />
            </a>
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end">

          <motion.div
            className="relative inline-block"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >

            {/* IMAGE */}
            <div className="border-cartoon shadow-cartoon-lg bg-[var(--surface)] p-2 rotate-[3deg]">
              <img
                src="/naw.jpeg"
                className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] object-cover rounded-2xl border-2 border-[var(--border)]"
              />
            </div>

            {/* ⚡ */}
            <motion.div
              className="absolute -top-4 -right-4"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <div className="badge-cartoon">⚡</div>
            </motion.div>

            {/* 🚀 */}
            <motion.div
              className="absolute -bottom-3 -left-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="badge-cartoon bg-pink">🚀</div>
            </motion.div>

            {/* GLOW */}
            <div className="absolute inset-0 -z-10 blur-2xl opacity-40 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}