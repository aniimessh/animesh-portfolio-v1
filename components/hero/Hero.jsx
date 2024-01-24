import Image from "next/image";
import XButton from "../common/Button/XButton";
import MyLinks from "../links/MyLinks";
const Hero = () => {
  return (
    <div className="h-screen flex flex-col gap-y-6 items-center justify-center relative">
      <Image
        src="/assets/images/grid-bg.jpg"
        width={1024}
        height={720}
        className="border h-screen w-screen absolute object-cover opacity-30"
      />
      <h1 className="text-6xl font-Nunito z-0 font-bold">
        HEY, I'M ANIMESH GUPTA
      </h1>
      <p className="text-lg w-1/3 text-center font-Nunito font-semibold">
        A Frontend focused Web Developer building the Frontend of Websites and
        Web Applications that leads to the success of the overall product
      </p>
      <MyLinks />
      <XButton path="#projects">Projects</XButton>
    </div>
  );
};

export default Hero;
