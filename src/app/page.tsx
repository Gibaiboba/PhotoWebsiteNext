"use client";

import { Photo } from "@/components/photo/photo";
import { Slider } from "@/components/slider/slider";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <>
      <Slider />
      <h1 className="flex justify-center mt-12">Portfolio</h1>
      <Photo />

      <section className="relative h-[40vh] w-full overflow-hidden mt-20">
        <Image
          src="/image4.jpg"
          alt="bgpicture"
          fill
          priority
          className="object-cover z-0"
        />
        <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-6">
          <p className="text-white text-4xl md:text-6xl font-dark uppercase tracking-[0.3em] mb-8">
            Get in touch
          </p>
          <button
            className="group flex items-center text-white text-lg md:text-xl font-light mb-12 tracking-wide max-w-2xl cursor-pointer outline-none"
            onClick={handleClick}
          >
            <span className="leading-none uppercase">Связаться</span>
            <svg
              className="w-5 h-5 ml-3 transition-all duration-300 group-hover:translate-x-2"
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
          </button>
        </div>
      </section>
    </>
  );
}
