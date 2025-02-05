/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Button = ({ text }) => {
  const [hover, setHover] = useState(false);
  return (
    // <div className="flex items-center">
    //   <div className="w-12 h-12 rounded-full bg-slate-200"></div>
    //   <div className="-ml-4">
    //     <button className="flex items-center gap-3">
    //       <p className="text-black">{text}</p>
    //       <FaArrowRightLong className="text-black"></FaArrowRightLong>
    //     </button>
    //   </div>
    // </div>

    <div
      className="flex items-center cursor-pointer group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Rounded Circle Div with Light Blue BG on Hover */}
      <div
        className={`w-12 h-12 rounded-full transition-all duration-300 ${
          hover ? "bg-blue-400 shadow-lg" : "bg-slate-200"
        }`}
      ></div>

      <div className="-ml-4">
        <button className="flex items-center gap-3 text-black font-medium transition-all duration-300">
          <p>{text}</p>
          {/* Arrow moves slightly to the right on hover */}
          <FaArrowRightLong
            className={`text-black transition-transform duration-300 ${
              hover ? "translate-x-1" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Button;
