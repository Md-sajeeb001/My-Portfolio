/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Button = ({ text }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="flex items-center cursor-pointer group max-w-56"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`w-12 h-12 rounded-full transition-all duration-500 bg-gradient-to-r from-[#3b5998] via-[#0A66C2] to-[#1d3557] bg-[length:200%_200%] ${
          hover
            ? "bg-[position:100%_50%] shadow-[0px_0px_15px_#0A66C2]"
            : "bg-[position:0%_50%] shadow-none"
        }`}
      ></div>

      <div className="-ml-4">
        <button className="flex items-center gap-3 text-black font-medium transition-all duration-300">
          <p>{text}</p>
          <FaArrowRightLong
            className={`text-black transition-transform duration-300 ${
              hover ? "translate-x-3" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Button;
