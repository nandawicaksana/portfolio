"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

type Props = {
  lang: "en" | "id";
  isDarkMode: boolean;
};

export default function Footer({ lang, isDarkMode }: Props) {
  const txt = (id: string, en: string) => (lang === "id" ? id : en);
  const year = new Date().getFullYear();

  const whatsappLink =
    "https://wa.me/6281290979905?text=Halo%20Nanda,%20saya%20tertarik%20dengan%20jasa%20Anda.";
  const emailLink = "mailto:nannsky9@gmail.com";

  return (
    <footer
      className={`py-24 px-6 
      ${isDarkMode 
        ? "bg-[#020617] border-t border-white/10" 
        : "bg-white border-t border-black/10"
      }`}
    >

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-black">
            Nanda Aulia Wicaksana<span className="text-blue-500">.</span>
          </h3>

          <p className={`${isDarkMode ? "text-slate-400" : "text-gray-600"} text-sm mt-2`}>
            Full Stack Developer
          </p>
        </div>

        {/* CENTER */}
        <div className="flex flex-col items-center gap-6">

          <div className="flex gap-4">
            {[
              { icon: <FaGithub size={18} />, link: "https://github.com/nandawicaksana" },
              { icon: <FaLinkedin size={18} />, link: "https://www.linkedin.com/in/nandaaw/" },
              { icon: <Mail size={18} />, link: emailLink }
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                className={`w-12 h-12 flex items-center justify-center 
                border-2 
                ${isDarkMode 
                  ? "bg-[#1e293b] border-white text-white shadow-[4px_4px_0px_white]" 
                  : "bg-white border-black text-black shadow-[4px_4px_0px_black]"
                }
                transition-all duration-200
                hover:bg-pink-400 hover:text-black hover:-translate-y-1 hover:rotate-3`}
              >
                {item.icon}
              </a>
            ))}
          </div>

          <p className="text-sm font-bold text-pink-400 text-center">
            {txt(
              '"hidup kadang butuh sedikit kejutan ✨"',
              '"life sometimes needs a little surprise ✨"'
            )}
          </p>

        </div>

        {/* RIGHT */}
        <div className="text-center md:text-right">

          <p className={`${isDarkMode ? "text-slate-400" : "text-gray-600"} text-sm`}>
            {txt(
                `© 2025–${year} Hak cipta dilindungi.`,
                `© 2025–${year} All rights reserved.`
            )}
            </p>

          <p className="text-xs mt-3 opacity-70">
            📍 Bekasi, Jawa Barat, Indonesia
          </p>

        </div>

      </div>

      {/* FLOAT ROCKET */}
      <motion.div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 text-2xl cursor-pointer 
        drop-shadow-[0_0_8px_rgba(255,0,200,0.6)]"
        animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        🚀
      </motion.div>

    </footer>
  );
}