type Props = {
  lang: "en" | "id";
};

export default function Contact({ lang }: Props) {
  const txt = (id: string, en: string) => (lang === "id" ? id : en);

  return (
    <section id="contact" className="py-24 text-center px-6">

      <h2 className="text-3xl md:text-4xl font-black mb-4">
        {txt("Mari Bekerja Sama", "Let's Work Together")}
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mb-8">
        {txt(
          "Saya siap membantu project Anda 🚀",
          "I'm ready to help your project 🚀"
        )}
      </p>

      <div className="flex justify-center gap-4 flex-wrap">

        <a
          href="https://wa.me/62xxxx"
          className="btn-cartoon bg-green-500 text-white hover:scale-105 transition"
        >
          WhatsApp
        </a>

        <a
          href="mailto:nannsky9@gmail.com"
          className="btn-cartoon bg-white text-black hover:scale-105 transition"
        >
          Email Me
        </a>

      </div>

    </section>
  );
}