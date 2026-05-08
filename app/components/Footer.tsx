"use client";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { Mail } from "lucide-react";

type Props = {
  lang: "en" | "id";
};

export default function Footer({
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

  const year =
    new Date().getFullYear();

  const socials = [

    {
      icon:
        <FaGithub size={18} />,

      link:
        "https://github.com/nandawicaksana",
    },

    {
      icon:
        <FaLinkedin size={18} />,

      link:
        "https://www.linkedin.com/in/nandaaw/",
    },

    {
      icon:
        <Mail size={18} />,

      link:
        "mailto:nannsky9@gmail.com",
    },

  ];

  return (
    <footer
      className="
      relative overflow-hidden

      py-20 md:py-24
      px-6

      border-t-4 border-[var(--border)]

      bg-[var(--bg)]

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
        absolute top-0 left-0

        w-72 h-72

        rounded-full
        blur-3xl

        bg-cyan-400/10
        dark:bg-cyan-400/20
        " />

        <div className="
        absolute bottom-0 right-0

        w-96 h-96

        rounded-full
        blur-3xl

        bg-pink-500/10
        dark:bg-pink-500/20
        " />

      </div>

      {/* CONTENT */}
      <div className="
      relative z-10

      max-w-7xl mx-auto

      grid grid-cols-1
      md:grid-cols-3

      gap-10

      items-center
      ">

        {/* LEFT */}
        <div className="
        text-center
        md:text-left
        ">

          <h3 className="
          text-2xl

          font-black
          ">

            Nanda Aulia
            <span className="
            text-blue-500
            dark:text-cyan-400
            ">

              Wicaksana.

            </span>

          </h3>

          <p className="
          mt-3

          text-sm

          text-black/700
          dark:text-white/700
          ">

            Full Stack Developer

          </p>

        </div>

        {/* CENTER */}
        <div className="
        flex flex-col

        items-center

        gap-6
        ">

          {/* SOCIAL */}
          <div className="
          flex gap-4
          ">

            {socials.map((
              item,
              i
            ) => (

              <a
                key={i}

                href={item.link}

                target="_blank"

                className="
                w-12 h-12

                flex items-center justify-center

                rounded-xl

                bg-cyan-400

                text-black

                border-4 border-[var(--border)]

                shadow-[4px_4px_0px_var(--shadow)]

                hover:shadow-none

                transition-all
                "
              >

                {item.icon}

              </a>

            ))}

          </div>

          {/* QUOTE */}
          <p className="
          text-sm

          font-black

          text-center

          text-pink-500
          dark:text-pink-400
          ">

            {txt(
              '"hidup kadang butuh sedikit kejutan ✨"',
              '"life sometimes needs a little surprise ✨"'
            )}

          </p>

        </div>

        {/* RIGHT */}
        <div className="
        text-center
        md:text-right
        ">

          <p className="
          text-sm

          text-black/700
          dark:text-white/700
          ">

            {txt(
              `© 2025–${year} Hak cipta dilindungi.`,
              `© 2025–${year} All rights reserved.`
            )}

          </p>

          <p className="
          text-xs

          mt-3

          opacity-70
          ">

            📍 Bekasi, Indonesia

          </p>

        </div>

      </div>

      {/* ROCKET */}
      <motion.button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }

        animate={{
          y: [0, -10, 0],
          rotate: [0, 4, -4, 0],
        }}

        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        whileTap={{
          scale: .9,
        }}

        className="
        fixed bottom-6 right-6
        z-50

        w-14 h-14

        flex items-center justify-center

        rounded-2xl

        text-2xl

        bg-pink-400

        border-4 border-[var(--border)]

        shadow-[6px_6px_0px_var(--shadow)]

        hover:shadow-none

        transition-all
        "
      >

        🚀

      </motion.button>

    </footer>
  );
}