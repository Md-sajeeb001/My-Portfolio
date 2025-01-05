import { useEffect, useState } from "react";
import ProjectCart from "../../components/ProjectCart";

const MyProjects = () => {
  const [blog, setBolgs] = useState(null);

  useEffect(() => {
    fetch("/Projects.json")
      .then((res) => res.json())
      .then((data) => setBolgs(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {blog?.map((item, index) => (
        <ProjectCart key={index} item={item}></ProjectCart>
      ))}
    </div>
  );
};

export default MyProjects;
