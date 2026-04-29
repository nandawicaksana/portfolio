"use client";

import { useState } from "react";
import { Sun, Moon, Layout, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "id">("en");

  const isDarkMode = theme === "dark";

  const menuItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--bg)] backdrop-blur border-b border-black/10 dark:border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        {/* LOGO */}
        <h1 className="font-black text-lg">
          NAW<span className="text-blue-500">.</span>
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-4">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-cartoon"
            >
              {item}
            </a>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {/* THEME */}
          <button
            onClick={() => setTheme(isDarkMode ? "light" : "dark")}
            className="nav-cartoon"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* LANG */}
          <button
            onClick={() => setLang(lang === "en" ? "id" : "en")}
            className="nav-cartoon text-xs font-bold"
          >
            {lang === "en" ? "ID" : "EN"}
          </button>

          {/* HAMBURGER */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="nav-cartoon md:hidden"
          >
            {isMenuOpen ? <X size={18} /> : <Layout size={18} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-[var(--bg)]"
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="nav-cartoon text-center"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}