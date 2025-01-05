/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";
const Button = ({ text }) => {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full bg-slate-200"></div>
      <div className="-ml-4">
        <button className="flex items-center gap-3">
          <p>{text}</p>
          <FaArrowRightLong className=""></FaArrowRightLong>
        </button>
      </div>
    </div>
  );
};

export default Button;
