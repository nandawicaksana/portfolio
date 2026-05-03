"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ProjectModal({ project, onClose }: any) {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(1);

  const next = () =>
    setIndex((prev) => (prev + 1) % project.images.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );

  /* KEYBOARD NAV */
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
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
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-5xl w-full px-4"
        onClick={(e) => e.stopPropagation()}
      >

        {/* IMAGE */}
        <motion.div
          className="overflow-hidden rounded-xl"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -80) next();
            if (info.offset.x > 80) prev();
          }}
        >
          <motion.img
            key={project.images[index]}
            src={project.images[index]}
            onClick={() => setZoom(zoom === 1 ? 2 : 1)}
            animate={{ scale: zoom }}
            transition={{ type: "spring", stiffness: 120 }}
            className="w-full max-h-[80vh] object-contain cursor-zoom-in"
          />
        </motion.div>

        {/* INFO */}
        <div className="text-white text-center mt-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="opacity-60 text-sm">
            {index + 1} / {project.images.length}
          </p>
        </div>

        {/* NAV */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white px-3 py-2 rounded"
        >
          ←
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white px-3 py-2 rounded"
        >
          →
        </button>

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white px-3 py-1 rounded"
        >
          ✕
        </button>

      </motion.div>
    </motion.div>
  );
}