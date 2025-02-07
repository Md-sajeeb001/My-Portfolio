import { useEffect, useState } from "react";
// import ProjectCart from "../../components/ProjectCart";
import { Element } from "react-scroll";
// import ProjectDetails from "../Details/ProjectDetails";
import ProjectCart from "../../components/ProjectCart";

const MyProjects = () => {
  const [project, setBolgs] = useState(null);

  useEffect(() => {
    fetch("/Projects.json")
      .then((res) => res.json())
      .then((data) => setBolgs(data));
  }, []);

  return (
    <Element name="/work">
      <div className="sm:pt-0 pt-14">
        <h2 className="text-3xl pb-8 sm:pb-6 font-bold text-center underline underline-offset-2 text-[#363636]">
          My Project.
        </h2>
        <div className="space-y-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {project?.map((item, index) => (
            <ProjectCart key={index} item={item}></ProjectCart>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default MyProjects;
