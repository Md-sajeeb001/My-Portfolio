import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch("/Projects.json")
      .then((res) => res.json())
      .then((data) => {
        const project = data.find((item) => item._id == id);
        setDetails(project);
      });
  }, [id]);

  return (
    <div className="lg:pt-32 md:pt-24 pt-28 pb-14">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="lg:w-1/2">
          <div>
            <figure className="w-full p-4 h-full">
              <img
                className="h-full object-contain"
                src={details?.image}
                alt="Album"
              />
            </figure>
          </div>
          <div className="grid grid-cols-2 gap-5 p-4">
            {details?.demoImg?.map((img, idx) => (
              <img
                key={idx}
                className="w-52 h-full object-contain"
                src={img}
                alt="Album"
              />
            ))}
          </div>

          <Link to={details?.liveLink} target="_blank">
            <button className="btn text-white bg-blue-800 hover:bg-blue-950 m-4 pr-4 ">
              Live Link
            </button>
          </Link>
        </div>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title">{details?.name}</h2>
          <p className="text-sm text-slate-700">{details?.description}</p>
          <hr />
          <div>
            <small>Frontend</small> <br />
            <div className="space-x-3">
              {details?.frontend?.map((skill, idx) => (
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
              {details?.backend?.map((skill, idx) => (
                <div key={idx} className="badge badge-secondary badge-outline">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <div>
              <small>DataBase</small> <br />
              {details?.database?.map((skill, idx) => (
                <div key={idx} className="badge badge-outline">
                  {skill}
                </div>
              ))}
            </div>
            <div className="flex gap-8">
              {details?.gitHubLink ? (
                <Link to={details?.serverLink} target="_blank">
                  <button className="btn text-white bg-blue-800 hover:bg-blue-950">
                    GitHub Link
                  </button>
                </Link>
              ) : (
                <div>
                  <Link to={details?.serverLink} target="_blank">
                    <button className="btn text-white bg-blue-800 hover:bg-blue-950">
                      Git-Server
                    </button>
                  </Link>
                  <Link to={details?.clientLink} target="_blank">
                    <button className="btn text-white bg-blue-800 hover:bg-blue-950">
                      Git-Client
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
