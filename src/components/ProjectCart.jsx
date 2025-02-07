/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Button from "../shared/Button/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectCart = ({ item }) => {
  const { image, name, description, _id } = item;

  useEffect(() => {
    AOS.init();
  });

  return (
    <div
      data-aos="fade-up"
      className="card bg-base-100 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl border"
    >
      <figure className="w-full h-[210px]">
        <img
          src={image}
          alt="project"
          className="rounded-tr-md rounded-tl-md w-full h-full"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-[#363636]">{name}</h2>
        <p className="text-sm text-slate-700">
          {description.substring(0, 50)}....
        </p>

        <Link to={`/details/${_id}`} className="text-sm font-medium text-white">
          <Button text="View More"></Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCart;
