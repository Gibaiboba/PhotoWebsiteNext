"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Price() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/contact");
  };
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl uppercase tracking-[0.2em] text-center mb-16 font-light">
        Пакеты услуг
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl uppercase tracking-wider font-medium">
            Индивидуальная
          </h2>
          <p className="text-2xl font-light text-stone-600">100 BYN</p>
          <Image
            src="/photoPrice/price1.jpg"
            alt="foto1"
            width={853}
            height={1280}
            className="w-full h-auto object-cover"
            priority
          />

          <div className="pt-4 space-y-2 text-sm leading-relaxed text-gray-500 normal-case">
            <p className="font-medium text-black mb-2">Что вы получите?</p>
            <p>· 1 час съемки</p>
            <p>· Помощь в подборе образа</p>
            <p>
              · Подбор локации (студия оплачивается отдельно; съёмочный час в
              студии равен 55 минутам)
            </p>
            <p>· Помощь в позировании</p>
            <p>· 30 фото в авторской обработке</p>
            <p>· Срок отдачи 10-14 дней</p>
            <p>· Облачное хранилище</p>
          </div>
          <button
            className="group flex items-center mx-auto mt-12 text-white text-lg md:text-xl font-light mb-12 tracking-wide max-w-2xl cursor-pointer outline-none"
            onClick={handleClick}
          >
            <span className="leading-none text-sm uppercase text-black">
              Связаться
            </span>
            <svg
              className="w-5 h-5 ml-3 transition-all duration-300 group-hover:translate-x-2"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          <h2 className="text-xl uppercase tracking-wider font-medium">
            Love story/семейная
          </h2>
          <p className="text-2xl font-light text-stone-600">130 BYN</p>
          <Image
            src="/photoPrice/price2.jpg"
            alt="foto2"
            width={853}
            height={1280}
            className="w-full h-auto object-cover"
          />
          <div className="pt-4 space-y-2 text-sm leading-relaxed text-gray-500 normal-case">
            <p className="font-medium text-black mb-2">Что вы получите?</p>
            <p>· 1 час съемки</p>
            <p>· Помощь в подборе образа</p>
            <p>· Подбор локации</p>
            <p>· Помощь в позировании</p>
            <p>· 50 фото в авторской обработке</p>
            <p>· Срок отдачи 10-14 дней</p>
            <p>· Облачное хранилище</p>
          </div>
          <button
            className="group flex items-center mt-17 mx-auto mt-12 text-white text-lg md:text-xl font-light mb-12 tracking-wide max-w-2xl cursor-pointer outline-none"
            onClick={handleClick}
          >
            <span className="leading-none text-sm uppercase text-black">
              Связаться
            </span>
            <svg
              className="w-5 h-5 ml-3 transition-all duration-300 group-hover:translate-x-2"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          <h2 className="text-xl uppercase tracking-wider font-medium">
            Мероприятия/торжество
          </h2>
          <p className="text-2xl font-light text-stone-600">от 150 BYN</p>
          <Image
            src="/photoPrice/price3.jpg"
            alt="foto3"
            width={853}
            height={1280}
            className="w-full h-auto object-cover"
          />
          <div className="pt-4 space-y-2 text-sm leading-relaxed text-gray-500 normal-case">
            <p className="font-medium text-black mb-2">Что вы получите?</p>
            <p>· Съемка от 1 до 3 часов</p>
            <p>· От 10 человек</p>
            <p>· Помощь в подборе локации</p>
            <p>· Количество фото от 100 шт.</p>
            <p>· Полная цветокоррекция всех фото</p>
            <p>· Срок отдачи 14 дней</p>
            <p>· Облачное хранилище</p>
          </div>
          <button
            className="group flex items-center mx-auto mt-16 text-white text-lg md:text-xl font-light mb-12 tracking-wide max-w-2xl cursor-pointer outline-none"
            onClick={handleClick}
          >
            <span className="leading-none text-sm uppercase text-black">
              Связаться
            </span>
            <svg
              className="w-5 h-5 ml-3 transition-all duration-300 group-hover:translate-x-2"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-24 max-w-4xl mx-auto">
        <h1 className="text-2xl uppercase tracking-wider font-medium mb-12 text-center">
          Условия
        </h1>

        <div className="space-y-10">
          <div className="border-b border-gray-100 pb-8">
            <p className="text-lg font-medium mb-2 uppercase tracking-wide">
              дата съемки и отмена фотосессии
            </p>
            <p className="text-gray-500 leading-relaxed normal-case">
              Дата считается забронированной после внесения задатка. Отменяя
              фотосессию, задаток удерживается.
            </p>
          </div>

          <div className="border-b border-gray-100 pb-8">
            <p className="text-lg font-medium mb-2 uppercase tracking-wide">
              перенос фотосессии
            </p>
            <p className="text-gray-500 leading-relaxed normal-case">
              Перенести фотосессию без потери предоплаты можно 1 раз, не позднее
              чем за 72 часа.
            </p>
          </div>

          <div className="border-b border-gray-100 pb-8">
            <p className="text-lg font-medium mb-2 uppercase tracking-wide">
              условия конфиденциальности
            </p>
            <p className="text-gray-500 leading-relaxed normal-case">
              По умолчанию я имею право использовать фото для портфолио. Условия
              конфиденциальности обсуждаются отдельно.
            </p>
          </div>

          <div className="pt-4 px-6 bg-stone-50 border border-stone-100">
            <p className="text-lg font-bold mb-3 uppercase tracking-wide text-600">
              ВАЖНО!
            </p>
            <p className="text-gray-600 leading-relaxed normal-case pb-4">
              Фотограф выбирает и обрабатывает договоренное число фотографий
              (или более, на свое усмотрение). Клиенту не передаются все
              исходные материалы, передаются только результаты обработки.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
