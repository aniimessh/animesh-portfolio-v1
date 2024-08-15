import About from "@/components/core/About";
import BlurIn from "@/components/magicui/blur-in";
import { FadeText } from "@/components/magicui/fade-text";
import WordPullUp from "@/components/magicui/word-pull-up";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-screen relative">
      <Link
        href={"#about"}
        className="bottom-20 absolute left-1/2 -translate-x-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-chevron-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
          />
        </svg>
      </Link>
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
