"use client";

import { motion } from "framer-motion";

export default function Loader({ progress }: { progress: number }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-pink-400 to-purple-400">

      <div className="text-center w-[240px]">

        {/* STACKED BOX */}
        <div className="relative w-20 h-20 mx-auto mb-6">

          {/* BACK BOX */}
          <motion.div
            className="absolute inset-0 bg-black border-4 border-white"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* FRONT BOX */}
          <motion.div
            className="absolute inset-2 bg-black border-4 border-white"
            animate={{ rotate: -360 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />

          {/* CENTER DOT */}
          <div className="absolute inset-6 bg-gray-400 border border-white" />

        </div>

        {/* TEXT */}
        <h2 className="text-black font-black text-lg mb-4">
          Loading Portfolio...
        </h2>

        {/* 🔥 INI PROGRESS BAR */}
        <div className="w-full h-3 bg-black/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-black rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* 🔢 PERSEN */}
        <p className="text-black font-bold mt-2 text-sm">
          {progress}%
        </p>

      </div>
    </div>
  );
}