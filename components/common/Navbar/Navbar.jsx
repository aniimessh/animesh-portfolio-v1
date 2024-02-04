"use client";
import Link from "next/link";
import { useState } from "react";
import { GrCode } from "react-icons/gr";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full fixed top-0 nav_shadow z-20 bg-white">
      <div className="p-6 flex justify-between">
        <h1 className="nav_text flex items-center">
          Animesh Gupta &nbsp;
          <GrCode fontSize={28} />
        </h1>
        <ul className="nav_text space-x-8 hidden sm:flex">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#project">Project</Link>
          </li>
        </ul>
        {showMenu ? (
          <VscChromeClose
            className="sm:hidden text-3xl"
            onClick={() => setShowMenu((prev) => !prev)}
          />
        ) : (
          <HiMiniBars3BottomRight
            className="sm:hidden text-3xl"
            onClick={() => setShowMenu((prev) => !prev)}
          />
        )}
      </div>
      {showMenu && (
        <>
          <ul className={`p-2 text-right transition-shadow sm:hidden`}>
            <li className="p-3 border-b">
              <Link href="#" onClick={() => setShowMenu((prev) => !prev)}>
                Home
              </Link>
            </li>
            <li className="p-3 border-b">
              <Link href="#about" onClick={() => setShowMenu((prev) => !prev)}>
                About
              </Link>
            </li>
            <li className="p-3 border-b">
              <Link
                href="#project"
                onClick={() => setShowMenu((prev) => !prev)}
              >
                Project
              </Link>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Navbar;
