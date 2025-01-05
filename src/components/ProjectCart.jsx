/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProjectCart = ({ item }) => {
  const { name, description, _id } = item;

  return (
    <div>
      <img src="" alt="" />
      <h2>{name}</h2>
      <p>{description.substring(0, 18)}....</p>
      <Link to={`/details/${_id}`}>
        <button className="btn">View More</button>
      </Link>
    </div>
  );
};

export default ProjectCart;
