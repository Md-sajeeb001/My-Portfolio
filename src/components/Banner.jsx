import { Link } from "react-router-dom";
import developer from "../assets/developer.jpg";
import Button from "../shared/Button/Button";
import resume from "../../public/Resume.pdf";
import github from '../assets/skills/github.png';
import fackbook from '../assets/skills/facebook.png';
import linkedin from '../assets/skills/linkedin.png';
import twitter from '../assets/skills/twitter.png';

const Banner = () => {
  return (
    <div className="sm:flex items-center gap-14  sm:py-12 sm:pt-28 pt-20 ">
      <div className="sm:w-1/2 w-full space-y-4 md:space-y-6 lg:space-y-8 sm:pb-0 pb-5  sm:text-start text-center">
        <h2 className="lg:text-7xl md:text-5xl text-4xl text-[#363636] font-bold">
          Frontend Developer.
        </h2>
        <p className="text-slate-600 leading-8">
          Hi, im Mohammad Sajeeb, I am a Frontend Developer, crafting beautiful
          and user-friendly websites with creativity and precision
        </p>
        <button className="text-sm font-medium text-white">
          <a href={resume} download="resume">
            <Button text="Download Resume"></Button>
          </a>
        </button>
        <div className="space-x-6 flex items-center">
          <Link
            className="text-sm text-slate-600 underline-[#363636] underline underline-offset-2 hover:text-blue-900"
            to="https://github.com/Md-sajeeb001"
            target="_blank"
            title="github"
          >
            <img className="w-8" src={github} alt="" />
          </Link>

          <Link
            className="text-sm text-slate-600 underline-[#363636] underline underline-offset-2 hover:text-blue-900"
            to="https://www.facebook.com/saj.eeb.306309"
            target="_blank"
            title="facebook"
          >
            <img className="w-8" src={fackbook} alt="" />
          </Link>

          <Link
            className="text-sm text-slate-600 underline-[#363636] underline underline-offset-2 hover:text-blue-900"
            to="https://www.linkedin.com/in/md-sajeeb-wd/"
            target="_blank"
            title="linkedin"
          >
            <img className="w-8" src={linkedin} alt="" />
          </Link>

          <Link
            className="text-sm text-slate-600 underline-[#363636] underline underline-offset-2 hover:text-blue-900"
            to="https://x.com/mdSajeeb010101"
            target="_blank"
            title="twitter"
          >
            <img className="w-8" src={twitter} alt="" />
          </Link>
        </div>
      </div>
      <div className="sm:w-1/2">
        <img
          className="w-full sm:rounded-full"
          src={developer}
          alt="developer"
        />
      </div>
    </div>
  );
};

export default Banner;
