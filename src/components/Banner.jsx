import { Link } from "react-router-dom";
import developer from "../assets/developer.jpg";
import Button from "../shared/Button/Button";
import resume from "../../public/Resume.pdf";

const Banner = () => {
  return (
    <div className="sm:flex items-center gap-14  sm:py-12 sm:pt-28 pt-20 ">
      <div className="sm:w-1/2 w-full space-y-4 md:space-y-6 lg:space-y-8 sm:pb-0 pb-5  sm:text-start text-center">
        <h2 className="lg:text-7xl md:text-5xl text-4xl text-[#363636] font-bold">
          Full Stack Developer.
        </h2>
        <p className="text-slate-600 leading-8">
          Hi, im Mohammad Sajeeb, A Passionate Full Stack Developer Based In The
          Cumilla, Bangladesh.
        </p>
        <button className="text-sm font-medium text-white">
          <a href={resume} download="resume">
            <Button text="Download Resume"></Button>
          </a>
        </button>
        <div className="space-x-3">
          <Link
            className="text-sm text-slate-600 underline-[#363636] underline underline-offset-2 hover:text-blue-900"
            to="https://github.com/Md-sajeeb001"
            target="_blank"
            title="github"
          >
            Github
          </Link>{" "}
          /
          <Link
            className="text-sm text-slate-600 underline-[#363636] underline underline-offset-2 hover:text-blue-900"
            to="https://www.facebook.com/"
            target="_blank"
            title="facebook"
          >
            Facebook
          </Link>{" "}
          /
          <Link
            className="text-sm text-slate-600 underline-[#363636] underline underline-offset-2 hover:text-blue-900"
            to="https://discord.com/channels/@me"
            target="_blank"
            title="facebook"
          >
            Discord
          </Link>{" "}
          /
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
