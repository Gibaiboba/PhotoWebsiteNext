"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const eventDropdownPortfolio = [
    { name: "Свадьбы", href: "/weddings" },
    { name: "Love story", href: "/story" },
    { name: "Мероприятия", href: "/meetings" },
    { name: "Портретные", href: "/portrait" },
    { name: "Групповые", href: "/group" },
  ];

  const eventDropdownInfo = [
    { name: "O фотографе", href: "/about" },
    { name: "Стоимость", href: "/price" },
  ];

  return (
    <div className="flex items-center justify-between">
      <Link href="/" className="hover:text-gray-600 transition">
        Главная
      </Link>

      <div
        onMouseEnter={() => {
          setIsPortfolioOpen(true);
        }}
        onMouseLeave={() => {
          setIsPortfolioOpen(false);
        }}
      >
        <button className="flex whitespace-nowrap gap-1">
          Портфолио
          <svg
            className={`ml-1 w-4 h-4 transition-transform ${
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
          <div className="absolute flex flex-col">
            {eventDropdownPortfolio.map((event) => (
              <Link
                key={event.name}
                href={event.href}
                onClick={() => {
                  setIsPortfolioOpen(false);
                }}
              >
                {event.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link href="/">
        <h1 className="hover:text-gray-600 transition">Yana Kastsuikevich</h1>
      </Link>

      <div
        className="relative"
        onMouseEnter={() => {
          setIsInfoOpen(true);
        }}
        onMouseLeave={() => {
          setIsInfoOpen(false);
        }}
      >
        <button className="flex whitespace-nowrap gap-1">
          Инфо
          <svg
            className={`ml-1 w-4 h-4 transition-transform ${
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
          <div className="absolute left-0 top-full flex flex-col whitespace-nowrap mt-0">
            {eventDropdownInfo.map((event) => (
              <Link
                key={event.name}
                href={event.href}
                onClick={() => {
                  setIsInfoOpen(false);
                }}
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
  );
}
