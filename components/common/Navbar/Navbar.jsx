import Link from "next/link";
import { GrCode } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 nav_shadow z-10 bg-white">
      <div className="p-6 flex justify-between">
        <h1 className="nav_text flex items-center">Animesh Gupta &nbsp;<GrCode fontSize={28}/></h1>
        <ul className="nav_text flex space-x-8">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#project">Project</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
