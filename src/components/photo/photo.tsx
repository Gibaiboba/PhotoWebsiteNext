import Image from "next/image";

const images = [
  {
    src: "/mainPortfolio/olya1.jpg",
    alt: "olya image",
    width: 853,
    height: 1280,
  },
  {
    src: "/mainPortfolio/olya2.jpg",
    alt: "olya image",
    width: 853,
    height: 1280,
  },
  {
    src: "/mainPortfolio/olya3.jpg",
    alt: "olya image",
    width: 859,
    height: 1280,
  },
  {
    src: "/mainPortfolio/snezhka1.jpg",
    alt: "snezhka image",
    width: 859,
    height: 1280,
  },
  {
    src: "/mainPortfolio/snezhka2.jpg",
    alt: "snezhka image",
    width: 859,
    height: 1280,
  },
  {
    src: "/mainPortfolio/znezhka3.jpg",
    alt: "snezhka image",
    width: 859,
    height: 1280,
  },
  {
    src: "/mainPortfolio/katya1.jpg",
    alt: "katya image",
    width: 859,
    height: 1280,
  },
  {
    src: "/mainPortfolio/katya2.jpg",
    alt: "katya image",
    width: 859,
    height: 1280,
  },
  {
    src: "/mainPortfolio/katya3.jpg",
    alt: "katya image",
    width: 859,
    height: 1280,
  },
  {
    src: "/mainPortfolio/sveta1.jpg",
    alt: "sveta image",
    width: 859,
    height: 1280,
  },
  {
    src: "/mainPortfolio/sveta2.jpg",
    alt: "sveta image",
    width: 859,
    height: 1280,
  },
  {
    src: "/mainPortfolio/sveta3.jpg",
    alt: "sveta image",
    width: 859,
    height: 1280,
  },
];

export const Photo = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mx-auto max-w-6xl mt-12 px-4">
      {images.map((img, index) => (
        <div key={index} className="w-full">
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
};
