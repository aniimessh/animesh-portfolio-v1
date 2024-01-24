import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const MyLinks = () => {
  return (
    <div className="absolute right-0">
      <div className="flex flex-col space-y-1 bg-white shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-tl-lg  rounded-bl-lg p-2">
        <Link
          href="https://www.linkedin.com/in/aniimessh-gupta/"
          target="_blank"
          className="hover:bg-[#bdbbbb5d] p-4 duration-200 rounded-md"
        >
          <FaLinkedin fontSize={35} />
        </Link>
        <Link
          href="https://leetcode.com/Animesh_Gupta/"
          target="_blank"
          className="hover:bg-[#bdbbbb5d] p-4 duration-200 rounded-md"
        >
          <SiLeetcode fontSize={35} />
        </Link>
        <Link
          href="https://github.com/aniimessh"
          target="_blank"
          className="hover:bg-[#bdbbbb5d] p-4 duration-200 rounded-md"
        >
          <FaGithub fontSize={35} />
        </Link>
      </div>
    </div>
  );
};

export default MyLinks;
