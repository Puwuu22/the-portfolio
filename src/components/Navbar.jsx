import {
  Home,
  User,
  BriefcaseBusiness,
  FileChartColumnIncreasing,
  Mails,
} from "lucide-react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full mx-auto bg-gray-600/20 backdrop-blur-xl rounded-full px-6 py-2 flex items-center justify-evenly gap-6 max-w-100 text-white/50">
          {/* Navbar inner */}
          <Link
            to="hero"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="hover:text-indigo-400 size-10 center transition-all duration-1000 cursor-pointer"
          >
            <Home size={20} className="" />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="hover:text-indigo-400 size-10 center transition-all duration-1000 cursor-pointer"
          >
            <User size={20} className="" />
          </Link>
          <Link
            to="skills"
            activeClass="active"
            smooth={true}
            spy={true}
            className="hover:text-indigo-400 size-10 center transition-all duration-1000 cursor-pointer"
          >
            <FileChartColumnIncreasing size={20} className="" />
          </Link>
          <Link
            to="projects"
            activeClass="active"
            smooth={true}
            spy={true}
            className="hover:text-indigo-400 size-10 center transition-all duration-1000 cursor-pointer"
          >
            <BriefcaseBusiness size={20} className="" />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="hover:text-indigo-400 size-10 center transition-all duration-1000 cursor-pointer"
          >
            <Mails size={20} className="" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
