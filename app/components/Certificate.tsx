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
  ) => (
    lang === "id"
      ? id
      : en
  );

  const scroll = (
    dir: "left" | "right"
  ) => {

    if (!sliderRef.current)
      return;

    sliderRef.current.scrollBy({
      left:
        dir === "left"
          ? -380
          : 380,

      behavior: "smooth",
    });

  };

  /* REUSABLE */
  const borderClass =
    "border-4 border-[var(--border)]";

  const shadowClass =
    "shadow-[6px_6px_0px_var(--shadow)]";

  const btnClass = `
  w-12 h-12

  flex items-center justify-center

  rounded-xl

  bg-[var(--bg)]
  text-[var(--text)]

  ${borderClass}

  shadow-[4px_4px_0px_var(--shadow)]

  hover:shadow-none

  transition-all
  `;

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
      id="certificates"
      className="
      relative overflow-hidden

      py-24 md:py-32
      px-6

      max-w-7xl mx-auto

      text-[var(--text)]
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
          duration: .5,
        }}

        viewport={{
          once: true,
        }}

        className="
        text-center

        mb-12 md:mb-16
        "
      >

        <h2 className="
        text-4xl md:text-5xl

        font-black

        mb-6
        ">

          {txt(
            "Sertifikat",
            "Certificates"
          )}{" "}

          <span className="
          text-blue-500
          dark:text-cyan-400
          ">

            🎓

          </span>

        </h2>

        <div className="
        w-16 h-[4px]

        bg-green-400

        mx-auto

        mb-6
        " />

        <p className="
        max-w-2xl mx-auto

        text-sm md:text-lg

        leading-relaxed

        text-black/700
        dark:text-white/700
        ">

          {txt(
            "Beberapa sertifikat pembelajaran dan pengembangan skill.",
            "Some certifications and learning journeys."
          )}

        </p>

      </motion.div>

      {/* CONTROL */}
      <div className="
      flex justify-end gap-3

      mb-6
      ">

        <button
          onClick={() =>
            scroll("left")
          }
          className={btnClass}
        >

          <ChevronLeft className="w-5 h-5" />

        </button>

        <button
          onClick={() =>
            scroll("right")
          }
          className={btnClass}
        >

          <ChevronRight className="w-5 h-5" />

        </button>

      </div>

      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="
        flex gap-6 md:gap-8

        overflow-x-auto
        scroll-smooth

        snap-x snap-mandatory

        no-scrollbar

        pb-6
        "
      >

        {certificates.map((
          cert,
          i
        ) => (

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
              delay: i * .08,
            }}

            viewport={{
              once: true,
            }}

            whileHover={{
              y: -8,
              rotate:
                i % 2 === 0
                  ? -1
                  : 1,
            }}

            className={`
            group relative

            min-w-[300px]
            md:min-w-[380px]

            max-w-[300px]
            md:max-w-[380px]

            overflow-hidden

            rounded-3xl

            bg-[var(--bg)]

            ${borderClass}
            ${shadowClass}

            transition-all duration-300
            `}
          >

            {/* TOP */}
            <div className={`
            p-5

            bg-gradient-to-r
            ${cert.color}

            text-white
            `}>

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

              <h3 className="
              text-xl md:text-2xl

              font-black

              leading-tight
              ">

                {cert.title}

              </h3>

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

              <div className="
              absolute inset-0

              bg-gradient-to-t
              from-black/60
              to-transparent
              " />

              <div className="
              absolute bottom-4 left-4

              px-3 py-2

              rounded-lg

              text-[10px] md:text-xs
              font-black

              rotate-[-2deg]

              bg-yellow-300

              text-black

              border-2 border-[var(--border)]

              shadow-[3px_3px_0px_var(--shadow)]
              ">

                ✨ Certified

              </div>

            </div>

            {/* CONTENT */}
            <div className="
            p-5 md:p-6
            ">

              <p className="
              text-sm

              leading-relaxed

              min-h-[70px]

              text-black/700
              dark:text-white/700
              ">

                {cert.description}

              </p>

              {/* SKILLS */}
              <div className="
              flex flex-wrap gap-2

              mt-5
              ">

                {cert.skills.map((
                  skill,
                  idx
                ) => (

                  <span
                    key={idx}

                    className="
                    px-3 py-1

                    rounded-full

                    text-xs
                    font-black

                    bg-cyan-400

                    text-black

                    border-2 border-[var(--border)]
                    "
                  >

                    {skill}

                  </span>

                ))}

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}