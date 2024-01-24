import XButton from "../common/Button/XButton";
import MyLinks from "../links/MyLinks";
const Hero = () => {
  return (
    <div className="relative">
      <img
        src="/assets/images/grid-bg.jpg"
        className="border h-full w-full absolute object-cover opacity-30"
      />
      <div className="h-screen flex flex-col gap-y-6 items-center justify-center relative">
        <h1 className="hero_text text-center">HEY, I'M ANIMESH GUPTA</h1>
        <p className="text-base w-full p-2 text-center font-Nunito font-semibold">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
        <XButton path="#projects">Projects</XButton>
      </div>
      <MyLinks />
    </div>
  );
};

export default Hero;
