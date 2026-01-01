import Image from "next/image";

interface PhotoItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface PhotoProps {
  images: PhotoItem[];
}

export const Photo = ({ images }: PhotoProps) => {
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
