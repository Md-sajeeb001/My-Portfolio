/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProjectCart = ({ item }) => {
  const { image, name, description, _id } = item;
  console.log(item);

  return (
    <div className="card glass rounded-lg">
      <figure>
        <img src={image} alt="project" />
      </figure>
      <div className="card-body rounded-lg">
        <h2 className="card-title text-[#363636]">{name}</h2>
        <p className="text-sm text-slate-700">
          {description.substring(0, 50)}....
        </p>
        <Link to={`/details/${_id}`}>
          <button className="btn text-white bg-blue-800 hover:bg-blue-950">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCart;
