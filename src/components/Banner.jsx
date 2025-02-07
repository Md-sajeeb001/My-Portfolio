import { Link } from "react-router-dom";
import developer from "../assets/Resume/profile3.png";
import Button from "../shared/Button/Button";
import resume from "../../public/Resume.pdf";
import github from "../assets/skills/github.png";
import facebook from "../assets/skills/facebook.png";
import linkedin from "../assets/skills/linkedin.png";
import twitter from "../assets/skills/twitter.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className=" w-full flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-14 sm:py-12 sm:pt-32 pt-28">
      {/* Left Section */}
      <div className=" sm:w-1/2 w-full space-y-4 md:space-y-6 lg:space-y-5 sm:pb-0 pb-6 sm:text-start text-center flex flex-col justify-center">
        <h2
          data-aos="fade-right"
          data-aos-duration="600"
          className="lg:text-7xl md:text-5xl text-4xl text-[#363636] font-bold"
        >
          {/* Frontend Developer. */}
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "Javascript Developer",
                "ReactJS Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-slate-600 leading-8"
        >
          Hi, I'm Mohammad Sajeeb, a Frontend Developer, crafting beautiful and
          user-friendly websites with creativity and precision.
        </p>

        {/* Download Resume Button */}
        <button
          data-aos="fade-right"
          data-aos-duration="1500"
          className="text-sm font-medium text-white sm:w-full mx-auto"
        >
          <a href={resume} download="resume">
            <Button text="Download Resume" />
          </a>
        </button>

        {/* Social Links */}
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="space-x-6 flex items-center justify-center sm:justify-start"
        >
          <Link
            className="hover:opacity-80 transition"
            to="https://github.com/Md-sajeeb001"
            target="_blank"
            title="GitHub"
          >
            <img className="w-8" src={github} alt="GitHub" />
          </Link>

          <Link
            className="hover:opacity-80 transition"
            to="https://www.facebook.com/saj.eeb.306309"
            target="_blank"
            title="Facebook"
          >
            <img className="w-8" src={facebook} alt="Facebook" />
          </Link>

          <Link
            className="hover:opacity-80 transition"
            to="https://www.linkedin.com/in/md-sajeeb-wd/"
            target="_blank"
            title="LinkedIn"
          >
            <img className="w-8" src={linkedin} alt="LinkedIn" />
          </Link>

          <Link
            className="hover:opacity-80 transition"
            to="https://x.com/mdSajeeb010101"
            target="_blank"
            title="Twitter"
          >
            <img className="w-8" src={twitter} alt="Twitter" />
          </Link>
        </div>
      </div>

      {/* Right Section (Developer Image) */}
      <div
        data-aos="flip-down"
        data-aos-duration="3000"
        className="sm:w-1/2 w-full "
      >
        <img
          className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[300px] xl:w-[400px] mx-auto "
          src={developer}
          alt="Developer"
        />
      </div>
    </div>
  );
};

export default Banner;
