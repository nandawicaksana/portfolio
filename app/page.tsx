"use client";

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { 
  Code2, Server, Globe, Mail, Phone, ExternalLink, 
  ChevronRight, X, Layout, Zap, Lightbulb, Rocket, 
 CheckCircle2, Sun, Moon, Users, Camera,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


// Interface untuk Project
interface Project {
  title: string;
  tag: string;
  color: string;
  description?: string;
  thumbnail?: string;
  images: string[];
}

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Deteksi tema aktif
  const isDarkMode = theme === "dark";

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  const projects: Project[] = [
    { 
      title: "HRMS Enterprise", 
      tag: "Management", 
      color: "from-blue-600/40",
      thumbnail: "/projects/hrms/hrms-index-dashboard-chart.png",
      description: "Sistem Manajemen Sumber Daya Manusia terintegrasi.",
      images: [
        "/projects/hrms/hrms-halaman-auth-login.png",
        "/projects/hrms/hrms-index-dashboard-chart.png",
        "/projects/hrms/hrms-index-data-pekerja.png",
        "/projects/hrms/hrms-index-cabang.png",
        "/projects/hrms/hrms-posisi-jabatan.png",
        "/projects/hrms/hrms-absensi-input.png",
        "/projects/hrms/hrms-absensi-periode.png",
        "/projects/hrms/hrms-index-dashboard.png",
        "/projects/hrms/hrms-rekap-gaji.png",
      ]
    },
    { 
      title: "Reservasi Ruang Rapat", 
      tag: "Scheduling System", 
      color: "from-orange-500/20",
      thumbnail: "/projects/agenda/index.png",
      description: "Sistem Reservasi Ruang Rapat dengan fitur manajemen jadwal dan notifikasi.",
      images: [
        "/projects/agenda/index.png",
        "/projects/agenda/login.png",
        "/projects/agenda/dashboard.png",
      ]
    },
    // { 
    //   title: "WA Automation Bot", 
    //   tag: "Coming Soon", 
    //   color: "from-emerald-500/20",
    //   description: "Internal tool in progress",
    //   images: []
    // },
    // { 
    //   title: "Analytic Dashboard", 
    //   tag: "Coming Soon", 
    //   color: "from-purple-500/20",
    //   description: "Data platform under development",
    //   images: []
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden 
${isDarkMode ? "bg-[#0f172a] text-white" : "bg-[#f4f4f5] text-black"}`}>
      <div
        className="fixed w-40 h-40 rounded-full pointer-events-none z-50 blur-3xl opacity-20 bg-cyan-500"
        style={{
          left: mousePos.x - 80,
          top: mousePos.y - 80,
        }}
      />
      {/* Background Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-50"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, ${isDarkMode ? "rgba(34, 211, 238, 0.07)" : "rgba(14, 165, 233, 0.15)"}, transparent 80%)`
        }}
      />

<motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-cyan-500 z-[60] origin-left" style={{ scaleX }} />
{/* NAVBAR */}
     <nav className={`fixed top-0 w-full z-50 
${isDarkMode ? "bg-[#0f172a]" : "bg-[#f4f4f5]"}`}>
  <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6">

    {/* LOGO */}
    <h1 className="font-black text-lg">
      NAW<span className="text-blue-500">.</span>
    </h1>

    {/* DESKTOP */}
    <div className="hidden md:flex gap-4">
      {["About","Skills","Projects","Contact"].map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`} className="nav-cartoon">
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
        {isDarkMode ? <Sun size={16}/> : <Moon size={16}/>}
      </button>

      {/* HAMBURGER */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="nav-cartoon md:hidden"
      >
        {isMenuOpen ? <X size={18}/> : <Layout size={18}/>}
      </button>
    </div>
  </div>

  {/* MOBILE MENU */}
  <AnimatePresence>
    {isMenuOpen && (
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        className="md:hidden px-6 pb-6 flex flex-col gap-4"
      >
        {["About","Skills","Projects","Contact"].map((item) => (
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

      {/* HERO SECTION */}
    <section className="min-h-screen flex items-center justify-center px-6 pt-32">

  <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* LEFT */}
    <div>

      {/* BADGE */}
      <div className="badge-cartoon mb-6">
        FULL STACK DEVELOPER
      </div>

      {/* TITLE */}
      <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6">
        Hello I'm <br />
        <span className="text-blue">Nanda</span>{" "}
        <span className="text-green">Aulia</span>
      </h1>

      {/* DESC */}
      <p className="text-gray-600 max-w-md mb-6">
        Saya membangun sistem bisnis berperforma tinggi
        yang mampu menangani traffic nyata dan operasional real.
      </p>

      {/* INFO */}
      <div className="flex items-center gap-4 text-sm mb-8">
        <span>📧 nannsky9@gmail.com</span>
        <span>📍 Jakarta</span>
      </div>

      {/* CTA */}
      <div className="flex gap-4 flex-wrap">
        <a href="#" className="btn-cartoon btn-pink">
          View My Work
        </a>
        <a href="#" className="btn-cartoon bg-white">
          Download CV
        </a>
      </div>

      {/* SOCIAL */}
      <div className="flex gap-3 mt-8">
        <div className="nav-cartoon">G</div>
        <div className="nav-cartoon">in</div>
        <div className="nav-cartoon">@</div>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative flex justify-center">

      <div className="border-cartoon shadow-cartoon-lg bg-white p-2 rotate-2">
        <img
          src="/your-image.jpg"
          className="w-[300px] h-[300px] object-cover"
        />
      </div>

      {/* STICKER */}
      <div className="absolute -top-4 right-10 badge-cartoon rotate-6">
        ⚡
      </div>

      <div className="absolute bottom-0 left-10 badge-cartoon bg-pink rotate-[-6deg]">
        🚀
      </div>

    </div>

  </div>
</section>

    {/* ABOUT */}
    <motion.section
      id="tentang"
      className="py-32 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >

      {/* LEFT */}
      <div>

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div className="w-16 h-[4px] bg-green-400 mb-6"></div>

        {/* TEXT */}
        <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-4`}>
          Saya adalah Full Stack Developer dengan pengalaman membangun sistem bisnis
          yang stabil dan scalable di production.
        </p>

        <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-4`}>
          Fokus pada Laravel, Next.js, dan performance optimization untuk memastikan
          sistem berjalan cepat, aman, dan efisien.
        </p>

        <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-6`}>
          Berpengalaman meningkatkan performa hingga 70% dan membangun sistem
          yang digunakan langsung dalam operasional bisnis.
        </p>

        {/* BADGE INFO */}
        <div className="flex flex-wrap gap-4 mt-6">

          <div className="border-2 border-black px-4 py-2 shadow-[3px_3px_0px_black] bg-purple-200 text-sm font-bold">
            🎓 Bachelor’s Degree in Computer Science at Nusa Mandiri University
          </div>

          <div className="border-2 border-black px-4 py-2 shadow-[3px_3px_0px_black] bg-blue-200 text-sm font-bold">
            📍 Bekasi, Indonesia
          </div>

          <div className="border-2 border-black px-4 py-2 shadow-[3px_3px_0px_black] bg-green-200 text-sm font-bold">
            💼 Available for Work
          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {[
          {
            title: "Clean Code",
            desc: "Menulis kode yang scalable dan mudah dirawat.",
            icon: "💻",
            color: "bg-pink-300"
          },
          {
            title: "Problem Solving",
            desc: "Menyelesaikan masalah kompleks dengan efisien.",
            icon: "🧠",
            color: "bg-blue-300"
          },
          {
            title: "Collaboration",
            desc: "Bekerja efektif dalam tim dan komunikasi.",
            icon: "👥",
            color: "bg-green-300"
          },
          {
            title: "Performance",
            desc: "Optimasi sistem untuk kecepatan & stabilitas.",
            icon: "⚡",
            color: "bg-purple-300"
          }
        ].map((item, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
            className="card-cartoon p-6"
          >

            {/* ICON */}
            <div className={`w-12 h-12 flex items-center justify-center text-xl mb-4 
            border-2 border-black shadow-[3px_3px_0px_black] ${item.color}`}>
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="font-black text-lg mb-2">
              {item.title}
            </h3>

            {/* DESC */}
            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm`}>
              {item.desc}
            </p>

          </motion.div>

        ))}

      </div>

    </motion.section>
      
      {/* VALUE PROPOSITION */}
      <motion.section
        id="nilai"
        className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        {/* TITLE */}
        <h2 className="text-center text-sm uppercase tracking-[0.4em] font-bold mb-16">
          VALUE PROPOSITION
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            {
              title: "Cepat Menyelesaikan Masalah",
              desc: "Cepat mengidentifikasi bottleneck pada sistem dan kode.",
              icon: "⚡",
              color: "bg-yellow-300"
            },
            {
              title: "Pengalaman Nyata",
              desc: "5+ tahun membangun sistem yang benar-benar digunakan dalam bisnis.",
              icon: "💡",
              color: "bg-blue-300"
            },
            {
              title: "Fokus Performa",
              desc: "Arsitektur scalable dengan fokus pada kecepatan dan stabilitas.",
              icon: "🚀",
              color: "bg-pink-300"
            }
          ].map((item, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, rotate: -1 }}
              className={`card-cartoon p-6 relative`}
            >

              {/* ICON BOX */}
              <div className={`w-12 h-12 flex items-center justify-center text-xl font-bold mb-4 
              border-2 border-black shadow-[3px_3px_0px_black] ${item.color}`}>
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-black mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm leading-relaxed`}>
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </motion.section>

      {/* STATS SECTION */}
      <motion.section
        className="py-20 px-6 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            {
              label: "Pengalaman",
              val: "5+ Tahun",
              icon: "🧠",
              color: "bg-yellow-300"
            },
            {
              label: "Proyek",
              val: "8+",
              icon: "💻",
              color: "bg-blue-300"
            },
            {
              label: "Ketersediaan",
              val: "Di tempat / Jarak Jauh",
              icon: "🌍",
              color: "bg-green-300"
            }
          ].map((item, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
              className="card-cartoon p-8 text-center"
            >

              {/* ICON */}
              <div className={`w-14 h-14 mx-auto flex items-center justify-center text-2xl mb-4 
              border-2 border-black shadow-[3px_3px_0px_black] ${item.color}`}>
                {item.icon}
              </div>

              {/* VALUE */}
              <div className="text-3xl font-black mb-2">
                {item.val}
              </div>

              {/* LABEL */}
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                {item.label}
              </div>

            </motion.div>

          ))}

        </div>

      </motion.section>



{/* TECH STACK */}
<motion.section
  className="py-24 px-6 max-w-7xl mx-auto"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

  {/* HEADER */}
  <div className="text-center mb-16">
    <h2 className="text-sm uppercase tracking-[0.4em] font-bold mb-4">
      SKILLS
    </h2>
    <h3 className="text-3xl md:text-4xl font-black text-blue-500">
      Tools yang Saya Gunakan
    </h3>
    <div className="w-16 h-[4px] bg-green-400 mx-auto mt-3"></div>
  </div>

  {/* GRID */}
  <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">

    {[
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "Vue", icon: "https://cdn.simpleicons.org/vue.js" },
      { name: "Node", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express" },
      { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel" },
      { name: "PHP", icon: "https://cdn.simpleicons.org/php" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
      { name: "GitLab", icon: "https://cdn.simpleicons.org/gitlab" },
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
      { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss" },
    ].map((skill, i) => {

      const colors = [
        "bg-yellow-300",
        "bg-blue-300",
        "bg-green-300",
        "bg-pink-300",
        "bg-purple-300",
        "bg-orange-300"
      ];

      return (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.03 }}
          viewport={{ once: true }}
          whileHover={{ y: -6, rotate: i % 2 === 0 ? -3 : 3 }}
          className="relative group"
        >

          {/* BOX */}
          <div
            className={`w-16 h-16 flex items-center justify-center 
            border-2 border-black shadow-[4px_4px_0px_black] 
            ${colors[i % colors.length]}`}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-8 h-8 object-contain"
            />
          </div>

          {/* TOOLTIP */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 
          text-[10px] font-bold bg-black text-white px-2 py-1 opacity-0 
          group-hover:opacity-100 transition">
            {skill.name}
          </div>

        </motion.div>
      );
    })}

  </div>

</motion.section>

     {/* PROJECTS */}
<motion.section
  id="proyek"
  className="py-32 px-6 max-w-7xl mx-auto"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

  {/* HEADER */}
  <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">

    <div>
      <h2 className="text-sm uppercase tracking-[0.4em] font-bold mb-4">
        PORTFOLIO
      </h2>

      <h3 className="text-4xl md:text-5xl font-black ">
        Beberapa Proyek Saya
      </h3>
    </div>

    <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} max-w-sm`}>
      Sistem nyata yang digunakan dalam operasional bisnis.
    </p>

  </div>

  {/* GRID */}
  <div className="grid md:grid-cols-2 gap-8">

    {projects.map((proj, i) => (

      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
        onClick={() => {
          if (proj.images.length > 0) setSelectedProject(proj);
        }}
        className={`card-cartoon p-4 cursor-pointer`}
      >

        {/* IMAGE */}
        <div className="border-2 border-black shadow-[3px_3px_0px_black] overflow-hidden mb-4 bg-white">
          {proj.thumbnail ? (
            <img
              src={proj.thumbnail}
              className="w-full h-[220px] object-cover hover:scale-105 transition"
            />
          ) : (
            <div className="h-[220px] flex items-center justify-center text-sm">
              No Preview
            </div>
          )}
        </div>

        {/* TAG */}
        <div className="text-xs font-bold mb-2 uppercase tracking-widest">
          {proj.tag}
        </div>

        {/* TITLE */}
        <h4 className="text-2xl font-black mb-2">
          {proj.title}
        </h4>

        {/* ACTION */}
        <div className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm font-bold`}>
          {proj.images.length > 0 ? "View Detail →" : "Coming Soon"}
        </div>

      </motion.div>

    ))}

  </div>

</motion.section>

      {/* GALLERY MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 overflow-hidden">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/95 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.8, opacity: 0, y: 40 }} transition={{ type: "spring", damping: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className={`relative w-full max-w-6xl max-h-[90vh] rounded-3xl border overflow-hidden flex flex-col shadow-2xl z-[110] ${isDarkMode ? "bg-[#0d1117] border-white/10" : "bg-white border-black/10"}`}>
              <div className={`sticky top-0 z-20 p-6 border-b backdrop-blur-md flex justify-between items-center ${isDarkMode ? "border-white/5 bg-[#0d1117]/80" : "border-black/5 bg-white/80"}`}>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-cyan-500/10 rounded-xl"><Layout className="text-cyan-500" size={24} /></div>
                  <div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>{selectedProject.title}</h3>
                    <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Galeri Screenshot</p>
                  </div>
                </div>
                <button onClick={() => setSelectedProject(null)} className="p-3 hover:bg-red-500/10 rounded-full transition-colors text-slate-400 hover:text-red-500"><X size={24} /></button>
              </div>
              <div className="overflow-y-auto p-6 md:p-12 space-y-12">
                {selectedProject.images.map((img, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group space-y-4">
                    <div className="flex items-center justify-between text-slate-500 text-xs font-mono">
                      <span>{img.split('/').pop()}</span>
                      <span className="px-2 py-1 bg-white/5 border border-white/5 rounded">0{idx + 1}</span>
                    </div>
                    <div className={`relative w-full rounded-2xl overflow-hidden border shadow-2xl ${isDarkMode ? "border-white/10 bg-slate-900" : "border-black/10 bg-slate-50"}`}>
                      <img src={img} alt="screenshot" className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-700" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

{/* WEBSITE OPTIMIZATION */}
<motion.section
  id="optimization"
  className={`py-32 px-6 max-w-7xl mx-auto 
  ${isDarkMode 
    ? "bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]" 
    : ""
  }`}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

  {/* HEADER */}
  <div className="text-center mb-16">
    <h2 className="text-sm uppercase tracking-[0.4em] font-bold mb-4">
      OPTIMASI WEBSITE
    </h2>

    <h3 className="text-4xl md:text-5xl font-black">
      Revamp & Peningkatan Website
    </h3>

    <p className={`${isDarkMode ? "text-slate-300" : "text-gray-600"} mt-6 max-w-xl mx-auto`}>
      Website nyata yang telah saya optimasi untuk performa & stabilitas.
    </p>
  </div>

  {/* GRID */}
  <div className="grid md:grid-cols-3 gap-8">

    {[
      {
        img: "/projects/optimization/allfour.avif",
        title: "Allfour Strings",
        desc: "Redesigned and developed the overall UI, improved layout consistency, and optimized SEO structure.",
        color: "bg-yellow-300"
      },
      {
        img: "/projects/optimization/cgoin.png",
        title: "Cargo.in",
        desc: "Redesigned and developed the overall UI, improved layout consistency, and optimized SEO structure.",
        color: "bg-blue-300"
      },
      {
        img: "/projects/optimization/everlogi.png",
        title: "Everlogi",
        desc: "Built AI chatbot with API integration, structured data, and optimized conversation flow.",
        color: "bg-green-300"
      },
    ].map((item, i) => (

      <motion.div
        key={i}
        whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
        className={`relative p-4 border-2 
        ${isDarkMode 
          ? "bg-[#1e293b] border-white shadow-[6px_6px_0px_white]" 
          : "bg-white border-black shadow-[6px_6px_0px_black]"
        }`}
      >

        {/* TOP COLOR BAR (BIAR LUCU) */}
        <div className={`w-12 h-2 mb-3 ${item.color}`} />

        {/* IMAGE */}
        <div className={`border-2 mb-4 overflow-hidden 
        ${isDarkMode 
          ? "border-white shadow-[3px_3px_0px_white]" 
          : "border-black shadow-[3px_3px_0px_black]"
        } bg-white`}>
          <img
            src={item.img}
            className="w-full h-[160px] object-contain"
          />
        </div>

        {/* TITLE */}
        <h4 className="font-black text-lg mb-2 text-white">
          {item.title}
        </h4>

        {/* DESC */}
        <p className={`${isDarkMode ? "text-slate-300" : "text-gray-600"} text-sm`}>
          {item.desc}
        </p>

        {/* STICKER */}
        <div className="absolute -top-3 -right-3 rotate-12 text-xl">
          🚀
        </div>

      </motion.div>

    ))}

  </div>

  {/* IMPACT */}
  <div className="mt-20 text-center max-w-2xl mx-auto">
    <p className={`${isDarkMode ? "text-slate-300" : "text-gray-600"} text-sm md:text-base`}>
      Meningkatkan kecepatan loading, memperbaiki bug kritis,
      dan meningkatkan performa sistem pada berbagai website production.
    </p>
  </div>

</motion.section>

{/* CONTACT */}
<motion.section
  id="kontak"
  className={`py-32 px-6 max-w-4xl mx-auto text-center 
  ${isDarkMode 
    ? "bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]" 
    : ""
  }`}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

  {/* TITLE */}
  <h2 className="text-4xl md:text-6xl font-black mb-6">
    Ayo <span className="text-blue-500">Bekerja</span> Sama 🚀
  </h2>

  {/* DESC */}
  <p className={`${isDarkMode ? "text-slate-300" : "text-gray-600"} mb-12 max-w-xl mx-auto`}>
    Terbuka untuk project baru, kolaborasi, atau sekadar ngobrol santai.
  </p>

  {/* CONTACT BUTTON */}
  <div className="flex flex-col md:flex-row justify-center gap-6">

    {/* EMAIL */}
    <a
      href="mailto:nannsky9@gmail.com"
      className={`flex items-center justify-center gap-3 px-8 py-4 font-bold border-2 
      ${isDarkMode 
        ? "bg-[#1e293b] border-white text-white shadow-[5px_5px_0px_white]" 
        : "bg-white border-black shadow-[5px_5px_0px_black]"
      }
      hover:-translate-y-1 transition`}
    >
      📧 Email Me
    </a>

    {/* WHATSAPP */}
    <a
      href="https://wa.me/628129079905"
      className={`flex items-center justify-center gap-3 px-8 py-4 font-bold border-2 
      ${isDarkMode 
        ? "bg-[#1e293b] border-white text-white shadow-[5px_5px_0px_white]" 
        : "bg-white border-black shadow-[5px_5px_0px_black]"
      }
      hover:-translate-y-1 transition`}
    >
      💬 WhatsApp
    </a>

  </div>

  {/* STICKER (PLAYFUL TOUCH) */}
  <div className="mt-12 text-2xl rotate-6">
    ✨
  </div>

</motion.section>

{/* FOOTER */}
<footer className={`py-20 px-6 
${isDarkMode 
  ? "bg-[#020617] border-t border-white/10" 
  : "bg-white border-t border-black/10"
}`}>

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

    {/* LEFT */}
    <div className="text-center md:text-left">
      <h3 className="text-xl font-black">
        NAW<span className="text-blue-500">.</span>
      </h3>
      <p className={`${isDarkMode ? "text-slate-400" : "text-gray-600"} text-sm mt-2`}>
        Full Stack Developer
      </p>
    </div>

    {/* SOCIAL */}
    <div className="flex gap-4">

    {[
      { icon: <FaGithub size={18} />, link: "https://github.com/nandawicaksana" },
      { icon: <FaLinkedin size={18} />, link: "https://www.linkedin.com/in/nandaaw/" },
      { icon: <Mail size={18} />, link: "mailto:nannsky9@gmail.com" }
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

    {/* RIGHT */}
    <div className="text-center md:text-right">
      <p className={`${isDarkMode ? "text-slate-400" : "text-gray-600"} text-sm`}>
        Made with ❤️ © 2026
      </p>
      <p className="text-xs text-slate-500 mt-1">
        React • TypeScript • Framer Motion
      </p>
    </div>

  </div>

  {/* QUOTE */}
  <div className="mt-12 text-center">
    <p className="text-sm font-bold text-pink-400">
      "life sometimes needs a little surprise ✨"
    </p>
  </div>

  {/* FLOATING STICKER */}
  <motion.div
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-6 right-6 text-2xl cursor-pointer drop-shadow-[0_0_8px_rgba(255,0,200,0.6)]"
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
    </div>
  );
}