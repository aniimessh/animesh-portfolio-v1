import AboutMe from "./AboutMe";
import MySkills from "./MySkills";

const About = () => {
  return (
    <>
      <div className="w-10/12 h-screen mx-auto flex justify-center items-center flex-col" id="about">
        <h1 className="hero_text text-center">About Me</h1>
        <div className="h-1 w-12 bg-[#faa307] rounded-full mx-auto mt-5"></div>
        <p className="text-lg w-1/2 mt-5 text-center font-Nunito font-semibold mx-auto">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
        <div className="flex justify-between p-10 gap-x-8">
          <div className="w-1/2">
            <AboutMe />
          </div>
          <div className="w-1/2">
            <MySkills />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
