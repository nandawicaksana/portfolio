"use client";

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { 
  Code2, Server, Globe, Mail, Phone, ExternalLink, 
  ChevronRight, X, Layout, Zap, Lightbulb, Rocket, 
 CheckCircle2, Sun, Moon, Users, Camera
} from "lucide-react";

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
    { title: "E-Commerce Flashsale", tag: "High Traffic", color: "from-orange-500/20", images: [] },
    { title: "WA Automation Bot", tag: "Internal Tool", color: "from-emerald-500/20", images: [] },
    { title: "Analytic Dashboard", tag: "Data Visualization", color: "from-purple-500/20", images: [] },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans overflow-x-hidden selection:bg-cyan-500/30 ${isDarkMode ? "bg-[#030712] text-slate-200" : "bg-slate-50 text-slate-900"}`}>
      
      {/* Background Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-50"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, ${isDarkMode ? "rgba(34, 211, 238, 0.07)" : "rgba(14, 165, 233, 0.15)"}, transparent 80%)`
        }}
      />

<motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-cyan-500 z-[60] origin-left" style={{ scaleX }} />
{/* NAVBAR */}
      <nav className={`fixed top-0 w-full backdrop-blur-xl border-b z-[100] transition-colors ${isDarkMode ? "bg-[#030712]/60 border-white/5" : "bg-white/60 border-black/5"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-5 relative z-[120]">
          {/* Logo */}
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="group cursor-pointer">
            <h1 className={`font-black text-xl md:text-2xl tracking-tighter group-hover:text-cyan-500 transition-colors ${isDarkMode ? "text-white" : "text-slate-900"}`}>
              NAW<span className="text-cyan-500 italic">.</span>
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8 text-xs uppercase tracking-widest font-bold items-center">
              {[ "Value", "About", "Projects", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className={`hover:text-cyan-500 transition-colors relative group ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
            <button 
              onClick={() => setTheme(isDarkMode ? "light" : "dark")}
              className={`p-2 rounded-xl border transition-all ${isDarkMode ? "border-white/10 hover:bg-white/5" : "border-black/10 hover:bg-black/5"}`}
            >
              {isDarkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-blue-600" />}
            </button>
          </div>

          {/* Mobile Menu Trigger & Toggle Theme */}
          <div className="flex md:hidden items-center gap-4 relative z-[130]">
            <button 
              onClick={() => setTheme(isDarkMode ? "light" : "dark")}
              className={`p-2 rounded-lg border transition-all ${isDarkMode ? "border-white/10" : "border-black/10"}`}
            >
              {isDarkMode ? <Sun size={16} className="text-yellow-400" /> : <Moon size={16} className="text-blue-600" />}
            </button>
            
            {/* Hamburger Button (Kamu butuh state untuk mobile menu ini) */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`p-2 relative ${isDarkMode ? "text-white" : "text-black"}`}
            >
              {isMenuOpen ? <X size={24} /> : <Layout size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE OVERLAY MENU (FINAL FIX FOR OVERLAPPING) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className={`absolute top-0 right-0 w-full h-[100vh] z-[110] flex flex-col items-center justify-center gap-10 backdrop-blur-3xl ${isDarkMode ? "bg-[#030712]/95" : "bg-white/95"}`}
            >
              {/* Decorative Label */}
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-cyan-500 mb-2 opacity-70">Navigation</span>

              {["Value", "About", "Projects", "Contact"].map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-5xl font-black tracking-tighter ${isDarkMode ? "text-white hover:text-cyan-500" : "text-slate-900 hover:text-cyan-500"} transition-colors`}
                >
                  {item}<span className="text-cyan-500">.</span>
                </motion.a>
              ))}

              {/* Mobile Footer Info */}
              <div className="flex gap-6 mt-16 pb-12">
                 <a href="#" className="text-slate-500 text-xs font-bold uppercase tracking-widest transition-colors hover:text-cyan-500">LinkedIn</a>
                 <a href="#" className="text-slate-500 text-xs font-bold uppercase tracking-widest transition-colors hover:text-cyan-500">GitHub</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 md:pt-0 overflow-hidden">
        {/* Decorative Circles (Glow Background) */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none ${isDarkMode ? "bg-cyan-500" : "bg-cyan-300"}`} />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full"
        >
          {/* Badge */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-cyan-500 mb-6 md:mb-10 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            IT Support & Developer
          </motion.div>

          {/* Main Title */}
          <h1 className={`text-5xl md:text-[120px] font-black tracking-tighter leading-[1.1] md:leading-none mb-6 md:mb-8 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
            Nanda Aulia <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Wicaksana
            </span>
          </h1>

          {/* Subtitle with Glassmorphism Effect */}
          <div className="max-w-4xl mx-auto relative px-4">
             <p className="text-base md:text-2xl text-slate-500 font-light leading-relaxed mb-10 md:mb-12">
              Architecting <span className={`font-medium ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>Internal Systems</span> & 
              <span className={`font-medium ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}> Web Solutions</span> 
              <span className="block text-[12px] md:text-base mt-2 opacity-70 italic">
                Focusing on Laravel Enterprise & High-Performance Next.js Architecture
              </span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-5 justify-center items-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/628129079905" 
              className="w-full md:w-auto px-10 py-4 bg-cyan-500 text-white font-bold rounded-2xl hover:bg-cyan-600 transition-all shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-3"
            >
              Start Project <ChevronRight size={18} />
            </motion.a>

            {/* TOMBOL RESUME BARU DI HERO */}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume-nanda-aulia.pdf" // Ganti dengan path file resume kamu
              target="_blank"
              className={`w-full md:w-auto px-10 py-4 border rounded-2xl font-bold transition-all backdrop-blur-md flex items-center justify-center gap-3 ${isDarkMode ? "border-white/10 bg-white/5 hover:bg-white/10" : "border-black/10 bg-black/5 hover:bg-black/10"}`}
            >
              <ExternalLink size={18} className="text-cyan-500" /> Download Resume
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className={`w-full md:w-auto px-10 py-4 border rounded-2xl font-bold transition-all backdrop-blur-md ${isDarkMode ? "border-white/10 bg-white/5 hover:bg-white/10" : "border-black/10 bg-black/5 hover:bg-black/10"}`}
            >
              Read Case Studies
            </motion.a>
          </div>
        </motion.div>

        {/* Floating Background Icons */}
        <div className="absolute inset-0 pointer-events-none opacity-10 md:opacity-20">
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-[15%] left-[10%] text-cyan-500"><Code2 size={30} className="md:w-[40px]" /></motion.div>
          <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-[20%] right-[5%] text-blue-500"><Server size={25} className="md:w-[35px]" /></motion.div>
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-[25%] right-[15%] text-purple-500"><Zap size={20} className="md:w-[30px]" /></motion.div>
        </div>
      </section>
      
      {/* VALUE PROPOSITION SECTION */}
      <section id="value" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.4em] text-cyan-500 font-bold mb-12 text-center"
        >
          Value Proposition
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Fast Problem Solver", desc: "Quickly identifying bottlenecks in infrastructure and code.", icon: <Zap className="text-yellow-500" /> },
            { title: "Real-world Experience", desc: "3+ years of building tools that actually get used in business.", icon: <Lightbulb className="text-cyan-500" /> },
            { title: "Performance First", desc: "Scalable architecture focused on speed and reliability.", icon: <Rocket className="text-purple-500" /> }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl border transition-all group ${isDarkMode ? "bg-white/[0.02] border-white/5 hover:border-cyan-500/30" : "bg-white border-black/5 shadow-lg shadow-black/5 hover:border-cyan-500/30"}`}
            >
              <div className="mb-4 p-3 bg-cyan-500/5 w-fit rounded-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-[1px] border rounded-3xl overflow-hidden backdrop-blur-sm ${isDarkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"}`}>
          {[
            { label: "Experience", val: "3+ Years", icon: <Server className="text-cyan-500" /> },
            { label: "Projects Completed", val: "20+", icon: <Code2 className="text-purple-500" /> },
            { label: "Availability", val: "Remote/Jakarta", icon: <Globe className="text-emerald-500" /> },
          ].map((stat, i) => (
            <div key={i} className={`p-10 flex flex-col items-center text-center group transition-colors ${isDarkMode ? "bg-[#030712] hover:bg-white/[0.02]" : "bg-white hover:bg-slate-50"}`}>
              <div className="mb-4 transform group-hover:scale-110 transition-transform">{stat.icon}</div>
              <span className={`text-3xl font-bold mb-1 ${isDarkMode ? "text-white" : "text-black"}`}>{stat.val}</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

{/* ABOUT */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div whileInView="visible" initial="hidden" viewport={{ once: true }} variants={containerVariants}>
          <h2 className="text-sm uppercase tracking-[0.4em] text-cyan-500 font-bold mb-6">Introduction</h2>
          <h3 className="text-4xl font-bold mb-8 leading-tight">Focusing on Performance and Scalable Architectures.</h3>
          <p className="text-slate-500 text-lg leading-relaxed mb-6">
            Sebagai IT Support & Developer, saya menjembatani infrastruktur teknis dengan kebutuhan bisnis. Spesialisasi saya adalah membangun sistem internal (ERP/HRIS) menggunakan Laravel yang teroptimasi secara performa dan keamanan.
          </p>

          {/* CTA DOWNLOAD RESUME - POSITIONED HERE */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-10"
          >
            <a 
              href="/resume-nanda-aulia.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-cyan-500 font-bold hover:gap-5 transition-all group"
            >
              <span className="border-b-2 border-cyan-500/30 group-hover:border-cyan-500 pb-1">
                Grab my full professional resume
              </span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {["PHP", "Laravel", "Next.js", "MySQL", "PostgreSQL", "Tailwind"].map((t) => (
              <span key={t} className={`px-4 py-2 border rounded-lg text-xs font-mono font-bold ${isDarkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"}`}>{t}</span>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className={`relative aspect-video rounded-3xl border p-2 overflow-hidden ${isDarkMode ? "bg-slate-900 border-white/10" : "bg-white border-black/10"}`}>
               <div className={`w-full h-full rounded-2xl flex items-center justify-center p-8 text-center ${isDarkMode ? "bg-[#030712]" : "bg-slate-50"}`}>
                 <code className="text-cyan-500 text-xs sm:text-sm md:text-base leading-relaxed">
                   <span className="text-purple-500 italic">class</span> <span className={`font-bold ${isDarkMode ? "text-white" : "text-black"}`}>NandaWicaksana</span> {"{"} <br/>
                   &nbsp;&nbsp;<span className="text-slate-500">// Problem solving at scale</span><br/>
                   &nbsp;&nbsp;<span className={isDarkMode ? "text-white" : "text-black"}>skills()</span> {"{"} <br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;return ["<span className="text-emerald-500">Reliability</span>", "<span className="text-emerald-500">Security</span>"];<br/>
                   &nbsp;&nbsp;{"}"}<br/>
                   {"}"}
                 </code>
               </div>
            </div>
        </motion.div>
      </section>

      {/* TECH STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-cyan-500 font-bold mb-4">Tech Stack</h2>
          <h3 className="text-3xl font-bold">Tools I Use Daily</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {["HTML5", "CSS3", "JavaScript", "PHP", "Laravel", "MySQL", "Next.js", "QA Testing", "ERD Design", "SEO"].map((skill, i) => (
            <motion.div 
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5, backgroundColor: isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.02)" }}
              className={`p-6 rounded-2xl border flex items-center gap-3 transition-colors ${isDarkMode ? "bg-white/[0.02] border-white/5" : "bg-white border-black/5 shadow-sm"}`}
            >
              <CheckCircle2 size={16} className="text-cyan-500 flex-shrink-0" />
              <span className="text-sm font-bold tracking-wide">{skill}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className={`py-32 px-6 ${isDarkMode ? "bg-white/[0.01]" : "bg-slate-100"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div>
              <h2 className="text-sm uppercase tracking-[0.4em] text-cyan-500 font-bold mb-4">Portfolio</h2>
              <h3 className="text-5xl font-black">Featured Work</h3>
            </div>
            <p className="text-slate-500 max-w-sm md:text-right font-medium">A selection of tools and platforms built to solve business complexities.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => proj.images.length > 0 && setSelectedProject(proj)}
                className={`group relative h-[450px] rounded-3xl overflow-hidden border cursor-pointer ${isDarkMode ? "border-white/10 bg-slate-900" : "border-black/5 bg-white shadow-2xl"}`}
              >
                {proj.thumbnail ? (
                  <div className="absolute inset-0 w-full h-full">
                    <img src={proj.thumbnail} alt={proj.title} className="w-full h-full object-cover opacity-30 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" />
                  </div>
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} to-transparent opacity-40 group-hover:opacity-100 transition-opacity`} />
                )}
                <div className={`absolute inset-0 z-10 ${isDarkMode ? "bg-gradient-to-t from-[#030712] via-[#030712]/40" : "bg-gradient-to-t from-white via-white/40"} to-transparent`} />
                <div className="absolute inset-0 p-12 flex flex-col justify-end z-20">
                  <span className="text-[10px] uppercase tracking-widest text-cyan-500 font-bold mb-4 drop-shadow-lg">{proj.tag}</span>
                  <h4 className={`text-4xl font-black mb-4 group-hover:text-cyan-500 transition-colors drop-shadow-xl ${isDarkMode ? "text-white" : "text-black"}`}>{proj.title}</h4>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-500 group-hover:text-cyan-500 transition-colors">
                    Explore Project <ExternalLink size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 overflow-hidden">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/95 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className={`relative w-full max-w-6xl max-h-[90vh] rounded-3xl border overflow-hidden flex flex-col shadow-2xl z-[110] ${isDarkMode ? "bg-[#0d1117] border-white/10" : "bg-white border-black/10"}`}>
              <div className={`sticky top-0 z-20 p-6 border-b backdrop-blur-md flex justify-between items-center ${isDarkMode ? "border-white/5 bg-[#0d1117]/80" : "border-black/5 bg-white/80"}`}>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-cyan-500/10 rounded-xl"><Layout className="text-cyan-500" size={24} /></div>
                  <div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>{selectedProject.title}</h3>
                    <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Screenshot Gallery</p>
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

{/* CONTACT - PERSONAL VERSION */}
      <section id="contact" className="py-40 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Let's work together.</h2>
        <p className="text-xl text-slate-500 mb-12">I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.</p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a href="mailto:nannsky9@gmail.com" className={`flex items-center justify-center gap-4 px-8 py-4 border rounded-2xl font-bold transition-all ${isDarkMode ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-black/5 border-black/10 hover:bg-black/10"}`}>
            <Mail size={20} className="text-cyan-500" /> nannsky9@gmail.com
          </a>
          <a href="https://wa.me/628129079905" className={`flex items-center justify-center gap-4 px-8 py-4 border rounded-2xl font-bold transition-all ${isDarkMode ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-black/5 border-black/10 hover:bg-black/10"}`}>
            <Phone size={20} className="text-emerald-500" /> WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`py-20 border-t px-8 ${isDarkMode ? "border-white/5" : "border-black/5"}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-sm">© 2026 Nanda Aulia Wicaksana. Built with Next.js.</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-cyan-500 transition-colors flex items-center gap-2"><Globe size={14}/> LinkedIn</a>
            <a href="#" className="hover:text-cyan-500 transition-colors flex items-center gap-2"><Users size={14}/> GitHub</a>
            <a href="#" className="hover:text-cyan-500 transition-colors flex items-center gap-2"><Camera size={14}/> Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}