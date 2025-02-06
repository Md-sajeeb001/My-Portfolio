import { useEffect, useState } from "react";
// import ProjectCart from "../../components/ProjectCart";
import { Element } from "react-scroll";
import ProjectDetails from "../Details/ProjectDetails";

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
        <h2 className="text-3xl pb-12 font-bold text-center underline underline-offset-2 text-[#363636]">
          My Project.
        </h2>
        <div className="">
          {project?.map((item, index) => (
            <ProjectDetails key={index} item={item}></ProjectDetails>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default MyProjects;
