"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type Props = {
  lang: "en" | "id";
};

type Cert = {
  file: string;
  title: string;
  desc: string;
  skills: string[];
  color: string;
};

export default function Certificate({ lang }: Props) {
  const txt = (id: string, en: string) => (lang === "id" ? id : en);

  const certificates: Cert[] = [
    {
      file: "ccna-cisco.png",
      title: "CCNA Routing & Switching",
      desc: txt(
        "Memahami dasar jaringan komputer, routing, switching, dan konfigurasi perangkat Cisco.",
        "Learned networking fundamentals, routing, switching, and Cisco device configuration."
      ),
      skills: ["Networking", "Routing", "Switching"],
      color: "from-cyan-400 to-blue-500",
    },
    {
      file: "docker-udemy.jpg",
      title: "Docker & Kubernetes",
      desc: txt(
        "Mempelajari containerization menggunakan Docker dan dasar orkestrasi dengan Kubernetes.",
        "Learned containerization with Docker and orchestration basics with Kubernetes."
      ),
      skills: ["Docker", "Kubernetes", "DevOps"],
      color: "from-indigo-400 to-violet-500",
    },
    {
      file: "phpunit-udemy.jpg",
      title: "PHPUnit Testing",
      desc: txt(
        "Mempelajari unit testing menggunakan PHPUnit untuk memastikan kualitas kode.",
        "Learned unit testing using PHPUnit to ensure code quality."
      ),
      skills: ["PHPUnit", "Testing"],
      color: "from-pink-400 to-rose-500",
    },
    {
      file: "html-sololearn.com.jpg",
      title: "HTML Course",
      desc: txt(
        "Memahami struktur dasar HTML, semantic tags, dan pembuatan halaman web.",
        "Learned HTML fundamentals, semantic tags, and building web pages."
      ),
      skills: ["HTML", "Web Structure"],
      color: "from-orange-400 to-yellow-400",
    },
    {
      file: "js-sololearn.com.png",
      title: "JavaScript Course",
      desc: txt(
        "Belajar dasar JavaScript termasuk logic, DOM manipulation, dan event handling.",
        "Learned JavaScript fundamentals including logic, DOM manipulation, and events."
      ),
      skills: ["JavaScript", "DOM"],
      color: "from-yellow-300 to-amber-500",
    },
    {
      file: "php-sololearn.com.jpg",
      title: "PHP Course",
      desc: txt(
        "Memahami backend dasar menggunakan PHP dan pengolahan data server-side.",
        "Learned backend basics using PHP and server-side processing."
      ),
      skills: ["PHP", "Backend"],
      color: "from-purple-400 to-fuchsia-500",
    },
    {
      file: "reactredux-sololearn.com.jpg",
      title: "React Redux",
      desc: txt(
        "Mempelajari state management menggunakan Redux dalam aplikasi React.",
        "Learned state management using Redux in React applications."
      ),
      skills: ["React", "Redux"],
      color: "from-cyan-400 to-teal-500",
    },
  ];

  const [index, setIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);

  const open = (i: number) => {
    setIndex(i);
    setZoom(1);
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    setIndex(null);
    document.body.style.overflow = "auto";
  };

  const getIssuer = (file: string) => {
    if (file.includes("udemy")) return "Udemy";
    if (file.includes("cisco")) return "Cisco";
    if (file.includes("sololearn")) return "Sololearn";
    return "";
  };

  return (
    <section
      className="
      relative overflow-hidden
      py-28 px-6
      max-w-7xl mx-auto
      text-black dark:text-white
    "
    >

      {/* BG */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="
        absolute top-10 left-10
        w-72 h-72
        bg-cyan-400/20
        rounded-full blur-3xl
        " />

        <div className="
        absolute bottom-10 right-10
        w-96 h-96
        bg-pink-500/20
        rounded-full blur-3xl
        " />

        <div className="
        absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[500px] h-[500px]
        bg-yellow-300/10
        rounded-full blur-3xl
        " />

      </div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-20"
      >

        <div className="
        inline-flex items-center gap-2
        bg-yellow-300
        text-black
        border-4 border-black
        px-6 py-3
        font-black
        shadow-[6px_6px_0px_black]
        rotate-[-2deg]
        mb-8
        ">

          🎓 CERTIFICATION JOURNEY

        </div>

        <h2 className="
        text-5xl md:text-7xl
        font-black
        leading-none
        tracking-tight
        ">

          <span className="
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-pink-500
          bg-clip-text
          text-transparent
          ">

            {txt("Sertifikat", "Certificates")}

          </span>

        </h2>

        <p className="
        mt-6
        text-lg
        max-w-2xl
        mx-auto
        leading-relaxed
        text-gray-700 dark:text-gray-300
        ">

          {txt(
            "Perjalanan pembelajaran dan sertifikasi yang membentuk skill saya dalam pengembangan web, networking, dan modern technologies.",
            "A collection of certifications that shaped my expertise in web development, networking, and modern technologies."
          )}

        </p>

      </motion.div>

      {/* GRID */}
      <div className="
      relative z-10
      grid md:grid-cols-2 xl:grid-cols-3
      gap-10
      ">

        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              rotate: i % 2 === 0 ? -1 : 1,
            }}
            className="
            group
            relative
            rounded-3xl
            overflow-hidden
            border-4 border-black dark:border-white
            bg-white dark:bg-[#111827]
            shadow-[10px_10px_0px_#000]
            dark:shadow-[10px_10px_0px_#fff]
            transition-all
            "
          >

            {/* HEADER */}
            <div className={`
            relative p-6
            bg-gradient-to-r ${cert.color}
            overflow-hidden
            `}>

              <div className="
              absolute inset-0 opacity-20
              bg-[radial-gradient(circle_at_top_right,white,transparent_40%)]
              " />

              <div className="
              absolute top-4 right-4
              w-10 h-10
              bg-black
              border-2 border-white
              rotate-12
              flex items-center justify-center
              text-white
              shadow-[3px_3px_0px_white]
              group-hover:rotate-0
              transition
              ">
                🎖️
              </div>

              <h3 className="
              relative
              text-2xl
              font-black
              text-white
              pr-12
              leading-tight
              ">
                {cert.title}
              </h3>

              <p className="
              relative
              mt-2
              text-sm
              font-semibold
              text-white/80
              ">
                {getIssuer(cert.file)}
              </p>

            </div>

            {/* IMAGE */}
            <div className="p-5">

              <div className="
              relative
              overflow-hidden
              rounded-2xl
              border-4 border-black dark:border-white
              shadow-[5px_5px_0px_#000]
              dark:shadow-[5px_5px_0px_#fff]
              ">

                <img
                  src={`/certificates/${cert.file}`}
                  alt={cert.title}
                  className="
                  w-full
                  h-[220px]
                  object-cover
                  transition duration-300
                  group-hover:scale-105
                  "
                />

                {/* BADGE */}
                <div className="
                absolute top-3 right-3
                bg-green-400
                text-black
                text-xs
                font-black
                px-3 py-2
                border-2 border-black
                shadow-[3px_3px_0px_black]
                ">
                  CERTIFIED
                </div>

                {/* OVERLAY */}
                <div className="
                absolute inset-0
                bg-black/70
                opacity-0
                group-hover:opacity-100
                transition
                flex items-center justify-center
                ">

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      open(i);
                    }}
                    className="
                    bg-white dark:bg-black
                    text-black dark:text-white
                    border-4 border-black dark:border-white
                    px-6 py-3
                    font-black
                    rounded-xl
                    shadow-[5px_5px_0px_black]
                    dark:shadow-[5px_5px_0px_white]
                    hover:translate-x-1
                    hover:translate-y-1
                    hover:shadow-none
                    transition-all
                    "
                  >
                    🔍 Preview
                  </button>

                </div>

              </div>

            </div>

            {/* CONTENT */}
            <div className="px-5 pb-5">

              <p className="
              text-sm
              leading-relaxed
              text-gray-700 dark:text-gray-300
              min-h-[90px]
              ">
                {cert.desc}
              </p>

              {/* SKILLS */}
              <div className="mt-6">

                <div className="
                inline-block
                mb-3
                bg-black dark:bg-white
                text-white dark:text-black
                text-xs
                font-black
                px-3 py-1
                rounded-full
                ">
                  SKILLS COVERED
                </div>

                <div className="flex flex-wrap gap-2">

                  {cert.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="
                      border-2 border-black dark:border-white
                      bg-yellow-300 dark:bg-cyan-400
                      text-black
                      px-3 py-1
                      text-xs
                      font-black
                      rounded-full
                      hover:scale-105
                      transition
                      "
                    >
                      {s}
                    </span>
                  ))}

                </div>

              </div>

              {/* BUTTON */}
              <button
                type="button"
                onClick={() => open(i)}
                className="
                mt-8
                w-full
                bg-gradient-to-r
                from-pink-500
                to-orange-400
                hover:from-cyan-400
                hover:to-blue-500
                text-white
                font-black
                py-4
                border-4 border-black
                rounded-xl
                shadow-[6px_6px_0px_black]
                hover:translate-x-1
                hover:translate-y-1
                hover:shadow-none
                transition-all
                "
              >

                ↗ View Certificate

              </button>

            </div>

          </motion.div>
        ))}

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {index !== null && (
          <ModalGallery
            certificates={certificates}
            index={index}
            setIndex={setIndex}
            zoom={zoom}
            setZoom={setZoom}
            close={close}
          />
        )}
      </AnimatePresence>

    </section>
  );
}

/* ========================= */
/* MODAL */
/* ========================= */

function ModalGallery({
  certificates,
  index,
  setIndex,
  zoom,
  setZoom,
  close,
}: any) {

  const current = certificates[index];

  const next = () => {
    setIndex((prev: number) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );
    setZoom(1);
  };

  const prev = () => {
    setIndex((prev: number) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
    setZoom(1);
  };

  useEffect(() => {

    const handle = (e: KeyboardEvent) => {

      if (e.key === "Escape") close();

      if (e.key === "ArrowRight") next();

      if (e.key === "ArrowLeft") prev();

    };

    window.addEventListener("keydown", handle);

    return () => window.removeEventListener("keydown", handle);

  }, []);

  return (
    <motion.div
      className="
      fixed inset-0
      z-[9999]
      bg-black/80
      backdrop-blur-md
      flex items-center justify-center
      p-4
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={close}
    >

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="
        relative
        max-w-5xl
        w-full
        "
        onClick={(e) => e.stopPropagation()}
      >

        {/* IMAGE */}
        <div className="
        relative
        overflow-hidden
        rounded-3xl
        border-4 border-white
        shadow-[10px_10px_0px_#fff]
        ">

          <motion.img
            key={current.file}
            src={`/certificates/${current.file}`}
            alt={current.title}
            animate={{ scale: zoom }}
            transition={{ type: "spring", stiffness: 120 }}
            onClick={() => setZoom(zoom === 1 ? 1.8 : 1)}
            className="
            w-full
            max-h-[80vh]
            object-contain
            bg-black
            cursor-zoom-in
            "
          />

        </div>

        {/* TITLE */}
        <div className="
        mt-6
        text-center
        ">

          <h3 className="
          text-3xl
          font-black
          text-white
          ">
            {current.title}
          </h3>

        </div>

        {/* NAV */}
        <button
          type="button"
          onClick={prev}
          className="
          absolute
          left-0 md:-left-16
          top-1/2
          -translate-y-1/2
          w-14 h-14
          rounded-full
          bg-white
          text-black
          border-4 border-black
          font-black text-xl
          shadow-[5px_5px_0px_black]
          hover:translate-x-1
          hover:translate-y-[-50%]
          hover:shadow-none
          transition-all
          "
        >
          ←
        </button>

        <button
          type="button"
          onClick={next}
          className="
          absolute
          right-0 md:-right-16
          top-1/2
          -translate-y-1/2
          w-14 h-14
          rounded-full
          bg-white
          text-black
          border-4 border-black
          font-black text-xl
          shadow-[5px_5px_0px_black]
          hover:translate-x-1
          hover:translate-y-[-50%]
          hover:shadow-none
          transition-all
          "
        >
          →
        </button>

        {/* CLOSE */}
        <button
          type="button"
          onClick={close}
          className="
          absolute
          -top-5 -right-2
          w-14 h-14
          rounded-full
          bg-red-500
          text-white
          border-4 border-black
          font-black text-xl
          shadow-[5px_5px_0px_black]
          hover:translate-x-1
          hover:translate-y-1
          hover:shadow-none
          transition-all
          "
        >
          ✕
        </button>

        {/* ZOOM */}
        <button
          type="button"
          onClick={() => setZoom(zoom === 1 ? 1.8 : 1)}
          className="
          absolute
          top-4 left-4
          bg-yellow-300
          text-black
          border-4 border-black
          px-4 py-2
          font-black
          rounded-xl
          shadow-[5px_5px_0px_black]
          hover:translate-x-1
          hover:translate-y-1
          hover:shadow-none
          transition-all
          "
        >
          {zoom === 1 ? "🔍 Zoom" : "🔎 Reset"}
        </button>

      </motion.div>

    </motion.div>
  );
}