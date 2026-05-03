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
      color: "bg-blue-400",
    },
    {
      file: "docker-udemy.jpg",
      title: "Docker & Kubernetes",
      desc: txt(
        "Mempelajari containerization menggunakan Docker dan dasar orkestrasi dengan Kubernetes.",
        "Learned containerization with Docker and orchestration basics with Kubernetes."
      ),
      skills: ["Docker", "Kubernetes", "DevOps"],
      color: "bg-indigo-400",
    },
      {
      file: "phpunit-udemy.jpg",
      title: "PHPUnit Testing",
      desc: txt(
        "Mempelajari unit testing menggunakan PHPUnit untuk memastikan kualitas kode.",
        "Learned unit testing using PHPUnit to ensure code quality."
      ),
      skills: ["PHPUnit", "Testing"],
      color: "bg-pink-400",
    },
    {
      file: "html-sololearn.com.jpg",
      title: "HTML Course",
      desc: txt(
        "Memahami struktur dasar HTML, semantic tags, dan pembuatan halaman web.",
        "Learned HTML fundamentals, semantic tags, and building web pages."
      ),
      skills: ["HTML", "Web Structure"],
      color: "bg-orange-400",
    },
    {
      file: "js-sololearn.com.png",
      title: "JavaScript Course",
      desc: txt(
        "Belajar dasar JavaScript termasuk logic, DOM manipulation, dan event handling.",
        "Learned JavaScript fundamentals including logic, DOM manipulation, and events."
      ),
      skills: ["JavaScript", "DOM"],
      color: "bg-yellow-400",
    },
    {
      file: "php-sololearn.com.jpg",
      title: "PHP Course",
      desc: txt(
        "Memahami backend dasar menggunakan PHP dan pengolahan data server-side.",
        "Learned backend basics using PHP and server-side processing."
      ),
      skills: ["PHP", "Backend"],
      color: "bg-purple-400",
    },
    {
      file: "reactredux-sololearn.com.jpg",
      title: "React Redux",
      desc: txt(
        "Mempelajari state management menggunakan Redux dalam aplikasi React.",
        "Learned state management using Redux in React applications."
      ),
      skills: ["React", "Redux"],
      color: "bg-cyan-400",
    },
  ];

  const [index, setIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);

  const open = (i: number) => {
    setIndex(i);
    setZoom(1);
  };

  const close = () => setIndex(null);

  const getIssuer = (file: string) => {
    if (file.includes("udemy")) return "Udemy";
    if (file.includes("cisco")) return "Cisco";
    if (file.includes("sololearn")) return "Sololearn";
    return "";
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">

      <h2 className="text-4xl font-black text-center mb-16">
        🎓 {txt("Sertifikat", "Certificates")}
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-10">
        {certificates.map((cert, i) => (
          <motion.div
  key={i}
  whileHover={{ y: -8 }}
  className="border-4 border-black dark:border-white 
  bg-white dark:bg-gray-900 
  rounded-xl overflow-hidden 
  shadow-[8px_8px_0px_black] dark:shadow-[8px_8px_0px_white]"
>

  {/* HEADER */}
  <div className={`${cert.color} p-5 relative`}>
    <h3 className="font-black text-lg leading-tight">
      {cert.title}
    </h3>

    <p className="text-xs mt-1 opacity-80">
      {getIssuer(cert.file)}
    </p>

    {/* ICON CORNER */}
    <div className="absolute top-3 right-3 
      w-8 h-8 bg-black border-2 border-white rotate-6 flex items-center justify-center text-white text-xs">
      🎖️
    </div>
  </div>

  {/* IMAGE */}
  <div className="p-4">

    <div className="relative border-4 border-black dark:border-white shadow-[4px_4px_0px_black] overflow-hidden">

      <img
        src={`/certificates/${cert.file}`}
        className="w-full h-[160px] object-cover"
      />

      {/* CERTIFIED BADGE */}
      <div className="absolute top-2 right-2 
        bg-green-400 text-black text-xs font-bold px-2 py-1 
        border-2 border-black shadow-[2px_2px_0px_black]">
        CERTIFIED
      </div>

      {/* PREVIEW */}
      <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition flex items-center justify-center">
        <button
          onClick={() => open(i)}
          className="bg-white px-4 py-2 border-2 border-black font-bold shadow-[3px_3px_0px_black]"
        >
          🔍 Preview
        </button>
      </div>

    </div>

  </div>

  {/* DESC */}
  <div className="px-4 text-sm mb-3 leading-relaxed">
    {cert.desc}
  </div>

  {/* SKILLS */}
  <div className="px-4 mb-4">
    <p className="text-xs font-bold mb-2">SKILLS COVERED:</p>

    <div className="flex flex-wrap gap-2">
      {cert.skills.map((s, idx) => (
        <span
          key={idx}
          className="border-2 border-black dark:border-white px-2 py-1 text-xs font-bold"
        >
          {s}
        </span>
      ))}
    </div>
  </div>

  {/* CTA */}
  <div className="px-4 pb-4">
    <button
      onClick={() => open(i)}
      className="w-full bg-black text-white font-bold py-3 
      border-2 border-black 
      shadow-[4px_4px_0px_black] 
      hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_black] transition"
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
/* 🔥 MODAL (SMOOTH PREVIEW) */
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
  const nextIndex = (index + 1) % certificates.length;
  const prevIndex =
    index === 0 ? certificates.length - 1 : index - 1;

  const next = () => setIndex(nextIndex);
  const prev = () => setIndex(prevIndex);

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [index]);

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={close}
    >
      <motion.div
        className="relative max-w-4xl w-full p-4"
        onClick={(e) => e.stopPropagation()}
      >

        {/* IMAGE + SWIPE */}
        <motion.div
          className="overflow-hidden rounded-xl"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -80 || info.velocity.x < -300) next();
            if (info.offset.x > 80 || info.velocity.x > 300) prev();
          }}
        >
          <motion.img
            key={current.file}
            src={`/certificates/${current.file}`}
            animate={{ scale: zoom }}
            onClick={() => setZoom(zoom === 1 ? 2 : 1)}
            transition={{ type: "spring", stiffness: 120 }}
            className="w-full cursor-zoom-in select-none"
          />
        </motion.div>

        {/* PRELOAD */}
        <img src={`/certificates/${certificates[nextIndex].file}`} className="hidden" />
        <img src={`/certificates/${certificates[prevIndex].file}`} className="hidden" />

        {/* INFO */}
        <div className="text-white mt-4 text-center">
          <h3 className="font-black text-xl">{current.title}</h3>
        </div>

        {/* NAV */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white px-3 py-2 rounded shadow"
        >
          ←
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white px-3 py-2 rounded shadow"
        >
          →
        </button>

        {/* CLOSE */}
        <button
          onClick={close}
          className="absolute top-4 right-4 bg-white px-3 py-1 rounded shadow"
        >
          ✕
        </button>

        {/* DOT */}
        <div className="flex justify-center gap-2 mt-4">
          {certificates.map((_: any, i: number) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>

      </motion.div>
    </motion.div>
  );
}