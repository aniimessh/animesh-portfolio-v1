import Link from "next/link";
import XButton from "../common/Button/XButton";

const AboutMe = () => {
  return (
    <div>
      <h1 className="text-3xl font-Nunito font-bold">Get to know me!</h1>
      <div className="sm:w-5/6 w-full">
        <p className="mt-8 aboutme_text">
          I'm a <strong> Frontend Web Developer</strong> building the Front-end
          of Websites and Web Applications that leads to the success of the
          overall product. Check out some of my work in the{" "}
          <strong>Projects</strong> section.{" "}
        </p>
        <p className="mt-5 aboutme_text">
          I also like sharing content related to the stuff that I have learned
          over the years in <strong> Web Development</strong> so it can help
          other people of the Dev Community. Feel free to Connect or Follow me
          on my{" "}
          <strong>
            <Link href="" className="underline text-[#faa307]">
              Linkedin
            </Link>
          </strong>{" "}
          where I post useful content related to Web Development and
          Programming.
        </p>
        <p className="mt-5 aboutme_text">
          I'm open to <strong>Job</strong> opportunities where I can contribute,
          learn and grow. If you have a good opportunity that matches my skills
          and experience then don't hesitate to <strong>contact</strong> me.
        </p>

        <div className="mt-5">
          <XButton path="#contact">Contact </XButton>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
