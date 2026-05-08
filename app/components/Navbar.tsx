"use client";

import { useState } from "react";

import {
  Sun,
  Moon,
  Layout,
  X,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { useTheme } from "next-themes";

type Props = {
  lang: "en" | "id";
  setLang: (lang: "en" | "id") => void;
};

export default function Navbar({
  lang,
  setLang,
}: Props) {

  const { theme, setTheme } =
    useTheme();

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const isDarkMode =
    theme === "dark";

  /* TRANSLATE */
  const txt = (
    id: string,
    en: string
  ) => (lang === "id" ? id : en);

  /* MENU */
  const menu = [
    {
      label: txt(
        "Tentang",
        "About"
      ),
      href: "#about",
    },

    {
      label: txt(
        "Alat",
        "Tools"
      ),
      href: "#tools",
    },

    {
      label: txt(
        "Project",
        "Projects"
      ),
      href: "#projects",
    },

    {
      label: txt(
        "Kontak",
        "Contact"
      ),
      href: "#contact",
    },
  ];

  return (
    <nav
      className="
      fixed top-0 w-full z-50

      bg-[var(--bg)]/80

      backdrop-blur-xl

      border-b
      border-black/10
      dark:border-white/10

      transition-colors duration-300
      "
    >

      {/* WRAPPER */}
      <div className="
      max-w-7xl mx-auto

      flex items-center justify-between

      px-5 md:px-6
      py-4 md:py-5
      ">

        {/* LOGO */}
        <a
          href="#"
          className="
          text-lg md:text-xl

          font-black

          tracking-tight

          transition-transform

          hover:scale-105
          "
        >

          NAW
          <span className="
          text-cyan-500
          dark:text-cyan-400
          ">

            .

          </span>

        </a>

        {/* DESKTOP MENU */}
        <div className="
        hidden md:flex
        items-center gap-4
        ">

          {menu.map((item) => (

            <a
              key={item.href}
              href={item.href}
              className="
              nav-cartoon

              text-sm
              font-bold

              transition-all
              "
            >

              {item.label}

            </a>

          ))}

        </div>

        {/* RIGHT */}
        <div className="
        flex items-center gap-3
        ">

          {/* THEME */}
          <button
            onClick={() =>
              setTheme(
                isDarkMode
                  ? "light"
                  : "dark"
              )
            }
            className="
            nav-cartoon

            flex items-center justify-center
            "
          >

            {isDarkMode ? (
              <Sun size={16} />
            ) : (
              <Moon size={16} />
            )}

          </button>

          {/* LANG */}
          <button
            onClick={() =>
              setLang(
                lang === "en"
                  ? "id"
                  : "en"
              )
            }
            className="
            nav-cartoon

            text-xs
            font-black
            "
          >

            {lang === "en"
              ? "ID"
              : "EN"}

          </button>

          {/* MOBILE MENU */}
          <button
            onClick={() =>
              setIsMenuOpen(
                !isMenuOpen
              )
            }
            className="
            nav-cartoon

            md:hidden

            flex items-center justify-center
            "
          >

            {isMenuOpen ? (
              <X size={18} />
            ) : (
              <Layout size={18} />
            )}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {isMenuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
            md:hidden

            px-5 pb-6

            flex flex-col gap-4

            bg-[var(--bg)]/95

            backdrop-blur-xl

            border-t
            border-black/10
            dark:border-white/10
            "
          >

            {menu.map((item) => (

              <a
                key={item.href}
                href={item.href}
                onClick={() =>
                  setIsMenuOpen(false)
                }
                className="
                nav-cartoon

                text-center

                text-sm
                font-bold
                "
              >

                {item.label}

              </a>

            ))}

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
}