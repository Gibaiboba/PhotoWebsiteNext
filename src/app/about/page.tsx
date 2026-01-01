import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="mb-10 shadow-sm overflow-hidden">
        <Image
          src="/image5.jpg"
          alt="photo"
          width={305}
          height={540}
          priority
          sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
          className="w-full h-auto object-cover"
        />
      </div>
      <h1>Обо мне</h1>
      <p className="max-w-xl text-sm mt-4 font-light leading-relaxed text-gray-700 mx-auto normal-case">
        Привет! Меня зовут Яна, я фотограф из Минска. Я создаю для съемки
        комфортную атмосферу, чтобы вы могли показать естественные эмоции и не
        стеснялись своих чувств и шуток. Я люблю снимать людей и то, что их
        связывает: влюбленность, любовь, дружба.
      </p>
    </div>
  );
};

export default About;
