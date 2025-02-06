import logo from "../assets/coding.png";
import { Element, Link } from "react-scroll";
import resume from "../../public/Resume.pdf";
import Button from "./Button/Button";
// import { Link } from "react-router-dom";

const Navber = () => {
  const links = (
    <>
      <li>
        <Link to="/" smooth={true} duration={1000}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" smooth={true} duration={1000}>
          About
        </Link>
      </li>
      <li>
        <Link to="/skills" smooth={true} duration={1000}>
          skills
        </Link>
      </li>
      <li>
        <Link to="/work" smooth={true} duration={1000}>
          Work
        </Link>
      </li>

      <li>
        <Link to="/contact" smooth={true} duration={1000}>
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <Element name="/">
      <div
        className="navbar 
     text-black fixed top-0 z-50 pr-6 shadow-md bg-white"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link duration={1000} smooth={true} to="/">
            <button>
              <img className="w-16" src={logo} alt="logo" />
            </button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <button className="text-sm font-medium text-black">
            <a href={resume} download="resume">
              <Button text={"Download Resume"}></Button>
            </a>
          </button>
        </div>
      </div>
    </Element>
  );
};

export default Navber;
