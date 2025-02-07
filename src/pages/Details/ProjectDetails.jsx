/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../../shared/Button/Button";

const ProjectDetails = ({ item }) => {
  const {
    image,
    name,
    description,
    frontend,
    backend,
    liveLink,
    database,
    clientLink,
    serverLink,
    gitHubLink,
    demoImg,
  } = item;

  return (
    <div data-aos="fade-up" className="pt-8">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="lg:w-1/2 h-[100%] m-4 rounded-2xl shadow-inner border-2  p-4">
          <div className="w-full h-full">
            <figure>
              <img className="h-full object-contain rounded-md border" src={image} alt="Album" />
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
                  <div key={idx} className="badge badge-outline badge-success">
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
                    {/* <Link to={serverLink} target="_blank">
                      <Button text={"Git-Server"}></Button>
                    </Link> */}
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
  );
};

export default ProjectDetails;
