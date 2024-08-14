"use client";

import { Work_Sans } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const work = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "900", "800", "500", "600"],
});

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className=" w-full py-5">
      <div className=" flex justify-between">
        <p className={`${work.className} font-bold tracking-wider text-2xl`}>
          animesh
        </p>
        <nav>
          <ul className="flex gap-10">
            <Link href={"/"}>
              <li
                className={`${
                  work.className
                } uppercase text-lg relative font-medium ${
                  pathname === "/"
                    ? "text-purple-500 group:block"
                    : "group:hidden text-white"
                }`}
              >
                Home
                <div className="small-underline" />
              </li>
            </Link>
            <Link href={"/work"}>
              <li
                className={`${
                  work.className
                } uppercase text-lg relative font-medium ${
                  pathname === "/work"
                    ? "text-purple-500 group:block"
                    : ""
                }`}
              >
                Work
                <div className="small-underline" />
              </li>
            </Link>
            <Link href={"/about"}>
              <li
                className={`${
                  work.className
                } uppercase text-lg relative font-medium ${
                  pathname === "/about"
                    ? "text-purple-500 group:block"
                    : ""
                }`}
              >
                About
                <div className="small-underline" />
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
