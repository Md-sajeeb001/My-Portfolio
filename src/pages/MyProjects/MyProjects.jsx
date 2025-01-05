import { useEffect, useState } from "react";
import ProjectCart from "../../components/ProjectCart";
import { Element } from "react-scroll";

const MyProjects = () => {
  const [blog, setBolgs] = useState(null);

  useEffect(() => {
    fetch("/Projects.json")
      .then((res) => res.json())
      .then((data) => setBolgs(data));
  }, []);

  return (
    <Element name="/work">
      <div className="sm:pt-0 pt-14">
        <h2 className="text-3xl pb-12 font-bold text-center underline underline-offset-2 text-[#363636]">
          My Project.
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blog?.map((item, index) => (
            <ProjectCart key={index} item={item}></ProjectCart>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default MyProjects;
