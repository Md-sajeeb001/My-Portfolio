/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Button from "../shared/Button/Button";
import resume from "../../public/Resume.pdf";

const ProjectCart = ({ item }) => {
  const {
    image,
    name,
    description,
    _id,
    frontend,
    backend,
    liveLink,
    database,
    clientLink,
    serverLink,
    gitHubLink,
  } = item;
  console.log(item);

  return (
    <div className=" glass rounded-lg">
      <div>
        <figure>
          <img src={image} alt="project" />
        </figure>
      </div>
      <div className="card-body rounded-lg">
        <h2 className="card-title text-[#363636]">{name}</h2>
        <p className="text-sm text-slate-700">
          {description.substring(0, 50)}....
        </p>
        

        <Link to={`/details/${_id}`}>
          <button className="text-sm font-medium text-white">
            <a href={resume} download="resume">
              <Button text="View More"></Button>
            </a>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCart;
