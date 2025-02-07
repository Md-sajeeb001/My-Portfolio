import { Link } from "react-scroll";
import codingLogo from "../assets/logos/coding.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#0a66c2] text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
          {/* Logo */}
          <Link to="/">
            <button className="flex items-center gap-3">
              <img src={codingLogo} alt="Logo" className="w-14 h-10" />
              <span className="text-lg font-semibold">Mohammad Sajeeb</span>
            </button>
          </Link>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center sm:justify-start gap-6 text-sm font-medium mt-4 sm:mt-0">
            <li>
              <Link to="/" className="hover:text-gray-300 transition">
                <button>Home</button>
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300 transition">
                <button>About</button>
              </Link>
            </li>
            <li>
              <Link to="/skills" className="hover:text-gray-300 transition">
                <button>Skills</button>
              </Link>
            </li>
            <li>
              <Link to="/work" className="hover:text-gray-300 transition">
                <button>Work</button>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300 transition">
                <button>Contact</button>
              </Link>
            </li>
          </ul>

          {/* Copyright */}
          <p className="text-sm mt-4 sm:mt-0">
            © {new Date().getFullYear()} Mohammad Sajeeb | All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
