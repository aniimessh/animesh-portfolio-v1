import BlurIn from "@/components/magicui/blur-in";
import { FadeText } from "@/components/magicui/fade-text";
import WordPullUp from "@/components/magicui/word-pull-up";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-[90vh] relative">
      <div className="bottom-0 absolute left-1/2 -translate-x-1/2">
        Down
      </div>
      <div className="flex flex-col items-center text-center  justify-center gap-5 h-full ">
        <div className="flex flex-col items-center justify-center p-2">
          <BlurIn className="text-4xl font-bold text-black dark:text-white" />
          <WordPullUp
            className="md:text-6xl text-4xl font-black tracking-[-0.02em] text-white dark:text-white md:leading-[5rem]"
            words="passionate about user interfaces"
          />
        </div>
        <FadeText
          className=" text-center text-white"
          direction="up"
          framerProps={{
            show: { transition: { delay: 0.9 } },
          }}
          text="A dedicated frontend developer crafting intuitive, visually appealing,
        and high-performing web experiences. With a keen eye for detail and a
        passion for user-centric design, I transform digital concepts into
        engaging realities."
        />
      </div>
    </div>
  );
};

export default Home;
