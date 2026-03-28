"use client";

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  Code2, Server, Smartphone, Globe, Mail, 
  Phone, ExternalLink, ChevronRight, X, Layout 
} from "lucide-react";

// Define TypeScript Interface untuk Project
interface Project {
  title: string;
  tag: string;
  color: string;
  description?: string;
  thumbnail?: string;
  images: string[];
}

export default function Portfolio() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // State untuk Modal Project dengan Type Safety
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Daftar Project
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
      title: "E-Commerce Flashsale", 
      tag: "High Traffic", 
      color: "from-orange-500/20", 
      images: [] 
    },
    { 
      title: "WA Automation Bot", 
      tag: "Internal Tool", 
      color: "from-emerald-500/20", 
      images: [] 
    },
    { 
      title: "Analytic Dashboard", 
      tag: "Data Visualization", 
      color: "from-purple-500/20", 
      images: [] 
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      
      {/* Dynamic Background Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-50"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(34, 211, 238, 0.07), transparent 80%)`
        }}
      />

      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-cyan-500 z-[60] origin-left" style={{ scaleX }} />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full backdrop-blur-xl bg-[#030712]/60 border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="group cursor-pointer">
            <h1 className="font-black text-2xl tracking-tighter group-hover:text-cyan-400 transition-colors">
              NW<span className="text-cyan-500 italic">.</span>
            </h1>
          </motion.div>
          <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em] font-bold">
            {["About", "Projects", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] animate-pulse" />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="z-10">
          <span className="inline-block px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-[10px] uppercase tracking-[0.3em] font-bold text-cyan-400 mb-8">
            Available for New Opportunities
          </span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Nanda Aulia Wicaksana
          </h1>
          <p className="text-xl md:text-3xl text-slate-400 font-light max-w-2xl mx-auto leading-tight">
            Architecting <span className="text-white font-medium">Internal Systems</span> & <span className="text-cyan-400 italic">Web Solutions</span>
          </p>
        </motion.div>

        <motion.div className="mt-12 flex flex-col sm:flex-row gap-6 z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <a href="https://wa.me/628129079905" className="group relative px-10 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all text-center">
            <span className="relative z-10 flex items-center justify-center gap-2">Get in Touch <ChevronRight size={18} /></span>
            <div className="absolute inset-0 bg-cyan-400 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a href="#projects" className="px-10 py-4 border border-white/10 rounded-full font-bold hover:bg-white/5 transition-all text-center">
            Browse Work
          </a>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm">
          {[
            { label: "Experience", val: "3+ Years", icon: <Server className="text-cyan-400" /> },
            { label: "Projects Completed", val: "20+", icon: <Code2 className="text-purple-400" /> },
            { label: "Availability", val: "Remote/Jakarta", icon: <Globe className="text-emerald-400" /> },
          ].map((stat, i) => (
            <div key={i} className="p-10 bg-[#030712] flex flex-col items-center text-center group hover:bg-white/[0.02] transition-colors">
              <div className="mb-4 transform group-hover:scale-110 transition-transform">{stat.icon}</div>
              <span className="text-3xl font-bold text-white mb-1">{stat.val}</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <motion.div whileInView="visible" initial="hidden" viewport={{ once: true }} variants={containerVariants}>
          <h2 className="text-sm uppercase tracking-[0.4em] text-cyan-500 font-bold mb-6">Introduction</h2>
          <h3 className="text-4xl font-bold mb-8 leading-tight">Focusing on Performance and Scalable Architectures.</h3>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            Sebagai IT Support & Developer, saya menjembatani infrastruktur teknis dengan kebutuhan bisnis. Spesialisasi saya adalah membangun sistem internal (ERP/HRIS) menggunakan Laravel yang teroptimasi secara performa dan keamanan.
          </p>
          <div className="flex flex-wrap gap-3">
            {["PHP", "Laravel", "Next.js", "MySQL", "PostgreSQL", "Tailwind"].map((t) => (
              <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-mono">{t}</span>
            ))}
          </div>
        </motion.div>
        
        <div className="relative group">
           <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
           <div className="relative aspect-video bg-slate-900 rounded-3xl border border-white/10 p-2 overflow-hidden">
              <div className="w-full h-full bg-[#030712] rounded-2xl flex items-center justify-center p-8 text-center">
                <code className="text-cyan-400 text-xs sm:text-sm md:text-base leading-relaxed">
                  <span className="text-purple-400 italic">class</span> <span className="text-white font-bold">NandaWicaksana</span> {"{"} <br/>
                  &nbsp;&nbsp;<span className="text-slate-500">// Problem solving at scale</span><br/>
                  &nbsp;&nbsp;<span className="text-white">skills()</span> {"{"} <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;return ["<span className="text-emerald-400">Reliability</span>", "<span className="text-emerald-400">Security</span>"];<br/>
                  &nbsp;&nbsp;{"}"}<br/>
                  {"}"}
                </code>
              </div>
           </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section id="projects" className="py-32 px-6 bg-white/[0.01]">
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
                className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/10 cursor-pointer bg-slate-900"
              >
                {/* Background Image / Gradient */}
                {proj.thumbnail ? (
                  <div className="absolute inset-0 w-full h-full">
                    <img 
                      src={proj.thumbnail} 
                      alt={proj.title}
                      className="w-full h-full object-cover opacity-30 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} to-transparent opacity-40 group-hover:opacity-100 transition-opacity`} />
                )}

                {/* Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent z-10" />

                {/* Content */}
                <div className="absolute inset-0 p-12 flex flex-col justify-end z-20">
                  <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold mb-4 drop-shadow-lg">{proj.tag}</span>
                  <h4 className="text-4xl font-black mb-4 text-white group-hover:text-cyan-400 transition-colors drop-shadow-xl">{proj.title}</h4>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-300 group-hover:text-white transition-colors">
                    Explore Project <ExternalLink size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL / LIGHTBOX GALLERY */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-[#0d1117] w-full max-w-6xl max-h-[90vh] rounded-3xl border border-white/10 overflow-hidden flex flex-col shadow-2xl z-[110]"
            >
              <div className="sticky top-0 z-20 p-6 border-b border-white/5 bg-[#0d1117]/80 backdrop-blur-md flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-cyan-500/10 rounded-xl">
                    <Layout className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                    <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Screenshot Gallery</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-3 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="overflow-y-auto p-6 md:p-12 space-y-12">
                {selectedProject.images.map((img, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group space-y-4"
                  >
                    <div className="flex items-center justify-between text-slate-500 text-xs font-mono">
                      <span>{img.split('/').pop()}</span>
                      <span className="px-2 py-1 bg-white/5 rounded">0{idx + 1}</span>
                    </div>
                    <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
                      <img 
                        src={img} 
                        alt={`${selectedProject.title} screenshot ${idx}`}
                        className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-700"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div whileInView={{ scale: [0.9, 1], opacity: [0, 1] }} className="inline-flex p-4 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <Mail className="text-cyan-400" size={32} />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Ready to build <br/> something epic?</h2>
          <p className="text-xl text-slate-400 mb-12">Konsultasikan kebutuhan sistem atau website Anda sekarang.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
            <a href="mailto:nannsky9@gmail.com" className="flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all w-full md:w-auto">
              <Mail className="text-cyan-400" size={20} />
              <span className="font-bold">nannsky9@gmail.com</span>
            </a>
            <a href="https://wa.me/628129079905" className="flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all w-full md:w-auto">
              <Phone className="text-emerald-400" size={20} />
              <span className="font-bold">0812-9097-9905</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-white/5 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 font-medium text-center">© 2026 Nanda Aulia. Built with precision.</p>
          <div className="flex gap-10 text-[10px] uppercase tracking-widest font-bold text-slate-400">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}