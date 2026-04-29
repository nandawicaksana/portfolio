export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [lang, setLang] = useState<"en" | "id">("en");
  const t = {
  en: {
    hello: "Hello I'm",
    desc: "I build high-performance business systems that handle real-world traffic and operations.",
    work: "View My Work",
    cv: "Download CV"
  },
  id: {
    hello: "Halo Saya",
    desc: "Saya membangun sistem bisnis berperforma tinggi yang mampu menangani traffic nyata.",
    work: "Lihat Karya",
    cv: "Download CV"
  }
};