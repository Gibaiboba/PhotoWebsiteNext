"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobilePortfolioOpen, setIsMobilePortfolioOpen] = useState(false);
  const [isMobileInfoOpen, setIsMobileInfoOpen] = useState(false);

  const eventDropdownPortfolio = [
    { name: "Свадьбы", href: "/weddings" },
    { name: "Love story", href: "/story" },
    { name: "Мероприятия", href: "/meetings" },
    { name: "Портретные", href: "/portrait" },
    { name: "Семейные", href: "/family" },
  ];

  const eventDropdownInfo = [
    { name: "O фотографе", href: "/about" },
    { name: "Стоимость", href: "/price" },
  ];

  return (
    <header className="relative text-sm tracking-widest flex items-center justify-around h-28 px-4 md:px-10 shadow-md">
      <div className="hidden md:flex items-center gap-12 ">
        <Link href="/" className="hover:text-gray-600 transition">
          Главная
        </Link>

        <div
          className="relative"
          onMouseEnter={() => setIsPortfolioOpen(true)}
          onMouseLeave={() => setIsPortfolioOpen(false)}
        >
          <button className="flex items-center gap-1 uppercase hover:text-gray-600 transition">
            Портфолио
            <svg
              className={`w-4 h-4 transition-transform ${
                isPortfolioOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isPortfolioOpen && (
            <div className="absolute top-full left-0 flex flex-col bg-white shadow-lg p-4 z-50 min-w-[150px]">
              {eventDropdownPortfolio.map((event) => (
                <Link
                  key={event.name}
                  href={event.href}
                  className="py-1 hover:text-gray-500"
                >
                  {event.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <Link href="/" className="z-50">
        <h1 className="text-xl md:text-2xl hover:text-gray-600 transition uppercase tracking-widest text-center leading-tight">
          Yana <br /> Kastsiukevich
        </h1>
      </Link>

      <div className="hidden md:flex items-center gap-12">
        <div
          className="relative"
          onMouseEnter={() => setIsInfoOpen(true)}
          onMouseLeave={() => setIsInfoOpen(false)}
        >
          <button className="flex items-center gap-1 uppercase hover:text-gray-600 transition">
            Инфо
            <svg
              className={`w-4 h-4 transition-transform ${
                isInfoOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isInfoOpen && (
            <div className="absolute top-full left-0 flex flex-col bg-white shadow-lg p-4 z-50 min-w-[150px]">
              {eventDropdownInfo.map((event) => (
                <Link
                  key={event.name}
                  href={event.href}
                  className="py-1 hover:text-gray-500"
                >
                  {event.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link href="/contact" className="hover:text-gray-600 transition">
          Контакты
        </Link>
      </div>

      <button
        className="md:hidden z-50 p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div
          className={`w-6 h-0.5 bg-gray-800 transition-all ${
            isMobileMenuOpen ? "rotate-45 translate-y-1.5" : "mb-1.5"
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-gray-800 mb-1.5 ${
            isMobileMenuOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-gray-800 transition-all ${
            isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
          }`}
        ></div>
      </button>

      <div
        className={`fixed inset-0 bg-white dark:bg-dark z-40 flex flex-col items-start justify-start pt-32 px-10 gap-8 transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <Link
          href="/"
          className="uppercase tracking-widest text-lg font-medium"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Главная
        </Link>

        <div className="w-full">
          <button
            onClick={() => setIsMobilePortfolioOpen(!isMobilePortfolioOpen)}
            className="flex items-center gap-3 w-full uppercase tracking-widest text-lg font-medium"
          >
            Портфолио
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                isMobilePortfolioOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              isMobilePortfolioOpen
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden flex flex-col gap-4 pl-4 border-l border-gray-100">
              {eventDropdownPortfolio.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-black transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full">
          <button
            onClick={() => setIsMobileInfoOpen(!isMobileInfoOpen)}
            className="flex items-center gap-3 w-full uppercase tracking-widest text-lg font-medium"
          >
            Инфо
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                isMobileInfoOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              isMobileInfoOpen
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden flex flex-col gap-4 pl-4 border-l border-gray-100">
              {eventDropdownInfo.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-black transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Link
          href="/contact"
          className="uppercase tracking-widest text-lg font-medium"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Контакты
        </Link>
      </div>
    </header>
  );
}
