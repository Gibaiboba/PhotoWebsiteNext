import { Photo } from "@/components/photo/photo";
import { Slider } from "@/components/slider/slider";

export default function Home() {
  return (
    <>
      <Slider />
      <h1 className="flex justify-center mt-12">Portfolio</h1>
      <Photo />
    </>
  );
}
