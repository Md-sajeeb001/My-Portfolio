/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import Button from "../../shared/Button/Button";
import { useEffect, useState } from "react";

const ProjectDetails = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/Projects.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const selectedProject = data.find((item) => item._id == id);
        setProject(selectedProject);
      });
  }, [id]);

  const {
    image,
    name,
    description,
    frontend,
    backend,
    liveLink,
    database,
    clientLink,
    gitHubLink,
    demoImg,
    futurePlans,
    challengesFaced,
  } = project || {};

  console.log(project);

  return (
    <div className="sm:-mt-12 -mt-14 sm:max-w-5xl mx-auto w-full px-6">
      <div className="pb-8 pt-24">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div className="lg:w-1/2 h-[100%] m-4 rounded-2xl shadow-inner border-2  p-4">
            <div className="w-full h-full">
              <figure>
                <img
                  className="w-full h-full  rounded-md border"
                  src={image}
                  alt="Album"
                />
              </figure>
            </div>
            <div className="grid grid-cols-2 gap-5 py-3">
              {demoImg?.map((img, idx) => (
                <img
                  key={idx}
                  className="w-52 h-full object-contain border rounded-md"
                  src={img}
                  alt="Album"
                />
              ))}
            </div>
            <hr />
            <div className="pt-4">
              <Link to={liveLink} target="_blank">
                <Button text={"Live Link"}></Button>
              </Link>
            </div>
          </div>
          <div className="card-body lg:w-1/2 ">
            <h2 className="card-title">{name}</h2>
            <p className="text-sm text-slate-700">{description}</p>
            <hr />
            <div>
              <p>
                <b>futurePlans</b> : {futurePlans}
              </p>
              <p>
                <b>challengesFaced</b> : {challengesFaced}
              </p>
            </div>
            <hr />
            <div className="space-y-2">
              <div>
                <small>Frontend</small> <br />
                <div className="space-x-3">
                  {frontend?.map((skill, idx) => (
                    <div key={idx} className="badge badge-accent badge-outline">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              <div>
                <small>Backend</small> <br />
                <div className="space-x-3">
                  {backend?.map((skill, idx) => (
                    <div
                      key={idx}
                      className="badge badge-secondary badge-outline"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              <div className="flex items-center justify-between">
                <div>
                  <small>DataBase</small> <br />
                  {database?.map((skill, idx) => (
                    <div
                      key={idx}
                      className="badge badge-outline badge-success"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
                <div className="flex gap-8">
                  {gitHubLink ? (
                    <Link to={gitHubLink} target="_blank">
                      <Button text={"GitHub Link"}></Button>
                    </Link>
                  ) : (
                    <div className="">
                      <Link to={clientLink} target="_blank">
                        <Button text={"Git-Client"}></Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center my-8">
        <Link to="/">
          <Button text={"Back to Home"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
