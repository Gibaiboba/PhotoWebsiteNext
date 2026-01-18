import { Photo } from "@/components/photo/photo";
import { loveStory } from "@/data/data";

export default function LoveStory() {
  return (
    <>
      <h3 className="flex items-center text-2xl justify-center mt-12">
        Love Story
      </h3>
      <Photo images={loveStory} />
    </>
  );
}
