"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className=" py-5">
      <div className="container mx-auto">
        <div className="flex items-center md:justify-between justify-center">
          <Image
            src={require("../../public/logo.png")}
            alt="logo"
            width={150}
            className=""
          />
          <ul className="md:flex gap-10 hidden">
            <li>
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "text-purple-500" : ""
                } font-medium uppercase text-sm relative`}
              >
                Home
                {pathname === "/" && (
                  <div className="h-0.5 w-5 bg-white absolute left-1/2 -translate-x-1/2" />
                )}
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className={`${
                  pathname === "#about" ? "text-purple-500" : ""
                } font-medium uppercase text-sm relative`}
              >
                About
                {pathname === "#about" && (
                  <div className="h-0.5 w-5 bg-white absolute left-1/2 -translate-x-1/2" />
                )}
              </Link>
            </li>
            <li>
              <Link
                href="#work"
                className={`${
                  pathname === "#work" ? "text-purple-500" : ""
                } font-medium uppercase text-sm relative`}
              >
                Work
                {pathname === "#work" && (
                  <div className="h-0.5 w-5 bg-white absolute left-1/2 -translate-x-1/2" />
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
