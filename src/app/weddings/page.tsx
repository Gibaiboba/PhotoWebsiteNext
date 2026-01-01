import { Photo } from "@/components/photo/photo";
import { weddingPhoto } from "@/data/data";

const Weddings = () => {
  return (
    <>
      <h1 className="flex items-center text-2xl justify-center mt-12">
        Свадьба
      </h1>
      <Photo images={weddingPhoto} />
    </>
  );
};

export default Weddings;
