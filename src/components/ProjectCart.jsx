/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Button from "../shared/Button/Button";
// import resume from "../../public/Resume.pdf";

const ProjectCart = ({ item }) => {
  const { image, name, description, _id } = item;

  return (
    <div className="card glass rounded-lg">
      <figure className="w-full h-[50%]">
        <img src={image} alt="project" className="rounded-md w-full h-full" />
      </figure>
      <div className="card-body">
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
