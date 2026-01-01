import { Photo } from "@/components/photo/photo";
import { portrait } from "@/data/data";

const Portrait = () => {
  return (
    <>
      <h1 className="flex items-center text-2xl justify-center mt-12">
        Портретные
      </h1>
      <Photo images={portrait} />
    </>
  );
};

export default Portrait;
