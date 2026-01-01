import Image from "next/image";
import Link from "next/link";

const Family = () => {
  const categories = [
    {
      title: "Семейные",
      href: "/family/fam",
      image: "/collection/family/fam6.jpg",
    },
    {
      title: "Беременность",
      href: "/family/pregnant",
      image: "/collection/pregnant/olyaber6.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-2xl md:text-3xl uppercase tracking-[0.3em] text-center mb-16 font-light">
        Семейные
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
        {categories.map((cat) => (
          <Link
            href={cat.href}
            key={cat.title}
            className="group block relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-50 shadow-sm">
              <Image
                src={cat.image}
                alt={cat.title}
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                fill
                sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
              />
            </div>

            <div className="mt-4 text-center">
              <h2 className="text-sm md:text-base uppercase tracking-[0.2em] font-light group-hover:text-gray-400 transition-colors">
                {cat.title}
              </h2>

              <div className="mt-2 w-8 h-[1px] bg-gray-200 mx-auto group-hover:w-16 group-hover:bg-black transition-all duration-500" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Family;
