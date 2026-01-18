"use client";

import { useState, useRef } from "react";
import { sendEmail } from "@/app/actions";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        alert("Сообщение успешно отправлено!");
        formRef.current?.reset();
      } else {
        alert("Произошла ошибка при отправке.");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Не удалось связаться с сервером.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.2em] mb-4">
          Связаться со мной
        </h2>
        <p className="text-gray-400 font-light tracking-wide">
          Заполните форму, и я отвечу вам в течение 24 часов
        </p>
      </div>

      <form
        action={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
      >
        <div className="relative group">
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            required
            className="w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-black transition-colors peer placeholder-transparent"
            id="name"
          />
          <label
            htmlFor="name"
            className="absolute left-0 -top-5 text-xs uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-black dark:peer-focus:text-white"
          >
            Ваше имя
          </label>
        </div>

        <div className="relative group">
          <input
            type="text"
            name="city"
            placeholder="Город проведения"
            className="w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-black transition-colors peer placeholder-transparent"
            id="city"
          />
          <label
            htmlFor="city"
            className="absolute left-0 -top-5 text-xs uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-black dark:peer-focus:text-white"
          >
            Город проведения
          </label>
        </div>

        <div className="relative group">
          <input
            type="tel"
            name="phone"
            placeholder="Номер телефона"
            required
            className="w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-black transition-colors peer placeholder-transparent"
            id="phone"
          />
          <label
            htmlFor="phone"
            className="absolute left-0 -top-5 text-xs uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-black dark:peer-focus:text-white"
          >
            Номер телефона
          </label>
        </div>

        <div className="relative group">
          <input
            type="date"
            name="date"
            className="w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-black transition-colors text-gray-500"
            id="date"
          />
          <label
            htmlFor="date"
            className="absolute left-0 -top-5 text-xs uppercase tracking-widest text-gray-400"
          >
            Дата события
          </label>
        </div>

        <div className="relative group md:col-span-2">
          <textarea
            name="message"
            placeholder="Ваше сообщение"
            rows={4}
            className="w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-black transition-colors peer placeholder-transparent resize-none"
            id="message"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-0 -top-5 text-xs uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-black dark:peer-focus:text-white"
          >
            Ваше сообщение
          </label>
        </div>

        <div className="md:col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            disabled={loading}
            className="group relative px-12 py-4 bg-black text-white uppercase tracking-[0.3em] text-sm overflow-hidden transition-all hover:bg-orange-900 disabled:bg-gray-400 dark:border dark:border-white"
          >
            <span className={loading ? "opacity-0" : "opacity-100"}>
              Отправить запрос
            </span>
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
