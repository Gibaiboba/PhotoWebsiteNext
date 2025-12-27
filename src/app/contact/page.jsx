import Link from "next/link";
import ContactForm from "../../components/contactForm/contactForm";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-b border-gray-200 pb-16">
          <div className="flex flex-col space-y-2 md:items-center md:text-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-semibold">
              Телефон
            </span>
            <p className="text-xl md:text-2xl font-light tracking-tight hover:text-stone-500 transition-colors">
              <a href="tel:+375255320749">+375 25 532 0749</a>
            </p>
          </div>

          <div className="flex flex-col space-y-2 md:items-center md:text-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-semibold">
              Почта
            </span>
            <p className="text-xl md:text-2xl font-light tracking-tight break-words hover:text-stone-500 transition-colors">
              <a href="mailto:yankastsuikevich@gmail.com">
                yankastsuikevich@gmail.com
              </a>
            </p>
          </div>

          <div className="flex flex-col space-y-2 md:items-center md:text-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-semibold">
              Telegram
            </span>
            <Link
              href="https://t.me"
              target="_blank"
              className="text-xl md:text-2xl font-light tracking-tight inline-flex items-center group"
            >
              Написать
              <svg
                className="w-4 h-4 ml-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <ContactForm />
    </main>
  );
};

export default Contact;
