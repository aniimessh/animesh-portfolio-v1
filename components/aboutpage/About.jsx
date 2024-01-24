import AboutMe from "./AboutMe";
import MySkills from "./MySkills";

const About = () => {
  return (
    <>
      <div
        className="sm:w-3/4 pt-20 sm:pt-0 p-5 sm:p-0 w-full md:h-screen  mx-auto flex justify-center items-center flex-col"
        id="about"
      >
        <>
          <h1 className="hero_text text-center">About Me</h1>
          <div className="h-1 w-12 bg-[#faa307] rounded-full mx-auto mt-5"></div>
          <p className="text-lg w-full mt-5 font-Nunito font-semibold text-center">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </>
        <div className="flex sm:flex-row flex-col justify-between mt-5 gap-x-8">
          <div className="sm:w-1/2 w-full">
            <AboutMe />
          </div>
          <div className="sm:w-1/2 w-full sm:mt-0 mt-20">
            <MySkills />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
