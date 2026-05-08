"use client";

import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useRef } from "react";

type Props = {
  lang: "en" | "id";
};

type Cert = {
  title: string;
  issuer: string;
  description: string;
  thumbnail: string;
  skills: string[];
  color?: string;
};

export default function Certificates({
  lang,
}: Props) {

  const sliderRef =
    useRef<HTMLDivElement>(null);

  const txt = (
    id: string,
    en: string
  ) => (lang === "id" ? id : en);

  /* SLIDER */
  const scroll = (
    dir: "left" | "right"
  ) => {

    if (!sliderRef.current) return;

    const amount =
      window.innerWidth < 768
        ? 320
        : 420;

    sliderRef.current.scrollBy({
      left:
        dir === "left"
          ? -amount
          : amount,
      behavior: "smooth",
    });

  };

  /* DATA */
  const certificates: Cert[] = [
    {
      title:
        "CCNA Routing & Switching",

      issuer: "Cisco",

      description: txt(
        "Belajar routing, switching, dan networking dasar.",
        "Learned routing, switching, and networking fundamentals."
      ),

      thumbnail:
        "/certificates/ccna-cisco.png",

      skills: [
        "Networking",
        "Cisco",
        "Routing",
      ],

      color:
        "from-cyan-400 via-blue-500 to-indigo-500",
    },

    {
      title:
        "Docker & Kubernetes",

      issuer: "Udemy",

      description: txt(
        "Belajar containerization dan orchestration modern.",
        "Learned modern containerization and orchestration."
      ),

      thumbnail:
        "/certificates/docker-udemy.jpg",

      skills: [
        "Docker",
        "Kubernetes",
      ],

      color:
        "from-violet-400 via-purple-500 to-fuchsia-500",
    },

    {
      title:
        "PHPUnit Testing",

      issuer: "Udemy",

      description: txt(
        "Belajar unit testing menggunakan PHPUnit.",
        "Learned unit testing using PHPUnit."
      ),

      thumbnail:
        "/certificates/phpunit-udemy.jpg",

      skills: [
        "PHPUnit",
        "Testing",
      ],

      color:
        "from-pink-400 via-rose-500 to-red-500",
    },

    {
      title:
        "HTML Course",

      issuer: "Sololearn",

      description: txt(
        "Belajar semantic HTML dan struktur web.",
        "Learned semantic HTML and web structure."
      ),

      thumbnail:
        "/certificates/html-sololearn.com.jpg",

      skills: [
        "HTML",
        "Semantic",
      ],

      color:
        "from-yellow-300 via-orange-400 to-red-400",
    },

    {
      title:
        "JavaScript Course",

      issuer: "Sololearn",

      description: txt(
        "Belajar JavaScript dan DOM manipulation.",
        "Learned JavaScript and DOM manipulation."
      ),

      thumbnail:
        "/certificates/js-sololearn.com.png",

      skills: [
        "JavaScript",
        "DOM",
      ],

      color:
        "from-yellow-300 via-amber-400 to-orange-500",
    },

    {
      title:
        "PHP Course",

      issuer: "Sololearn",

      description: txt(
        "Belajar backend dasar menggunakan PHP.",
        "Learned backend basics using PHP."
      ),

      thumbnail:
        "/certificates/php-sololearn.com.jpg",

      skills: [
        "PHP",
        "Backend",
      ],

      color:
        "from-purple-400 via-fuchsia-500 to-pink-500",
    },

    {
      title:
        "React Redux",

      issuer: "Sololearn",

      description: txt(
        "Belajar Redux state management.",
        "Learned Redux state management."
      ),

      thumbnail:
        "/certificates/reactredux-sololearn.com.jpg",

      skills: [
        "React",
        "Redux",
      ],

      color:
        "from-cyan-400 via-sky-500 to-blue-500",
    },
  ];

  return (
    <section
      className="
      relative overflow-hidden

      py-20 md:py-28
      px-5 md:px-6

      max-w-7xl mx-auto

      text-black dark:text-white
      "
    >

      {/* HEADER */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{
          once: true,
        }}
        className="
        relative z-10

        text-center

        mb-12 md:mb-16
        "
      >

        {/* BADGE */}
        <div className="
        inline-flex items-center gap-2

        bg-yellow-300
        dark:bg-yellow-400

        text-black

        border-4 border-black
        dark:border-white/70

        px-4 py-2
        md:px-6 md:py-3

        rounded-xl

        text-xs sm:text-sm
        font-black

        shadow-[5px_5px_0px_#000]
        dark:shadow-[5px_5px_0px_rgba(255,255,255,0.15)]

        rotate-[-2deg]

        mb-6
        ">

          🎓 CERTIFICATIONS

        </div>

        {/* TITLE */}
        <h2 className="
        text-3xl sm:text-5xl md:text-7xl

        font-black

        leading-[0.95]
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

            {txt(
              "Sertifikat",
              "Certificates"
            )}

          </span>

        </h2>

        {/* DESC */}
        <p className="
        mt-5 md:mt-6

        max-w-2xl
        mx-auto

        text-sm md:text-lg

        leading-relaxed

        text-gray-700
        dark:text-gray-300
        ">

          {txt(
            "Beberapa sertifikat pembelajaran dan pengembangan skill.",
            "Some certifications and learning journeys."
          )}

        </p>

      </motion.div>

      {/* CONTROLS */}
      <div className="
      relative z-10

      flex items-center justify-end

      gap-3

      mb-6
      ">

        <button
          onClick={() =>
            scroll("left")
          }
          className="
          w-12 h-12

          flex items-center justify-center

          rounded-xl

          bg-white
          dark:bg-[#111827]

          border-4
          border-black
          dark:border-white/70

          shadow-[4px_4px_0px_#000]
          dark:shadow-[0_0_12px_rgba(255,255,255,0.08)]

          hover:translate-x-1
          hover:translate-y-1
          hover:shadow-none

          transition-all
          "
        >

          <ChevronLeft className="w-5 h-5" />

        </button>

        <button
          onClick={() =>
            scroll("right")
          }
          className="
          w-12 h-12

          flex items-center justify-center

          rounded-xl

          bg-white
          dark:bg-[#111827]

          border-4
          border-black
          dark:border-white/70

          shadow-[4px_4px_0px_#000]
          dark:shadow-[0_0_12px_rgba(255,255,255,0.08)]

          hover:translate-x-1
          hover:translate-y-1
          hover:shadow-none

          transition-all
          "
        >

          <ChevronRight className="w-5 h-5" />

        </button>

      </div>

      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="
        relative z-10

        flex gap-6 md:gap-8

        overflow-x-auto
        scroll-smooth

        snap-x snap-mandatory

        no-scrollbar

        pb-6
        "
      >

        {certificates.map(
          (cert, i) => (

            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: i * 0.08,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -8,
              }}
              className="
              group
              relative

              min-w-[300px]
              md:min-w-[380px]

              max-w-[300px]
              md:max-w-[380px]

              snap-start

              overflow-hidden

              rounded-3xl

              border-4
              border-black
              dark:border-white/70

              bg-white
              dark:bg-[#111827]

              shadow-[8px_8px_0px_#000]
              dark:shadow-[0_0_20px_rgba(255,255,255,0.08)]

              transition-all duration-300
              "
            >

              {/* TOP */}
              <div className={`
              relative

              p-5

              bg-gradient-to-r
              ${cert.color}

              text-white
              `}>

                {/* ISSUER */}
                <div className="
                text-[10px] md:text-xs

                font-black

                uppercase

                tracking-widest

                opacity-80

                mb-2
                ">

                  {cert.issuer}

                </div>

                {/* TITLE */}
                <h3 className="
                text-xl md:text-2xl

                font-black

                leading-tight

                pr-12
                ">

                  {cert.title}

                </h3>

                {/* ICON */}
                <div className="
                absolute top-5 right-5

                w-10 h-10

                flex items-center justify-center

                bg-black

                border-2 border-white

                rotate-12

                shadow-[3px_3px_0px_white]

                group-hover:rotate-0

                transition
                ">

                  🎖️

                </div>

              </div>

              {/* IMAGE */}
              <div className="
              relative overflow-hidden
              ">

                <img
                  src={cert.thumbnail}
                  alt={cert.title}
                  className="
                  w-full

                  h-[220px] md:h-[240px]

                  object-cover

                  transition duration-500

                  group-hover:scale-105
                  "
                />

                {/* OVERLAY */}
                <div className="
                absolute inset-0

                bg-gradient-to-t
                from-black/70
                via-black/10
                to-transparent
                " />

                {/* LABEL */}
                <div className="
                absolute bottom-4 left-4

                bg-white
                dark:bg-black

                text-black
                dark:text-white

                border-2 border-black
                dark:border-white/70

                px-3 py-2

                rounded-lg

                text-[10px] md:text-xs
                font-black

                shadow-[3px_3px_0px_#000]
                dark:shadow-[3px_3px_0px_rgba(255,255,255,0.15)]

                rotate-[-2deg]
                ">

                  ✨ Certified

                </div>

              </div>

              {/* CONTENT */}
              <div className="
              p-5 md:p-6
              ">

                {/* DESC */}
                <p className="
                text-sm

                leading-relaxed

                text-gray-700
                dark:text-gray-300

                min-h-[70px]
                ">

                  {cert.description}

                </p>

                {/* SKILLS */}
                <div className="
                flex flex-wrap gap-2

                mt-5
                ">

                  {cert.skills.map(
                    (skill, idx) => (

                      <span
                        key={idx}
                        className="
                        px-3 py-1

                        rounded-full

                        text-xs
                        font-black

                        bg-yellow-300
                        dark:bg-cyan-400

                        text-black

                        border-2 border-black
                        dark:border-white/70
                        "
                      >

                        {skill}

                      </span>

                    )
                  )}

                </div>

              </div>

            </motion.div>

          )
        )}

      </div>

    </section>
  );
}