import html from "../../assets/logos/html.png";
import css from "../../assets/logos/css.png";
import js from "../../assets/logos/js.png";
import react from "../../assets/logos/react.png";
import router from "../../assets/logos/router.png";
import tailwind from "../../assets/logos/tailwind.png";
import nodejs from "../../assets/logos/nodejs.png";
import express from "../../assets/logos/express.png";
import mongoDB from "../../assets/logos/mongoDB.png";
import { Element } from "react-scroll";

const MySkills = () => {
  return (
    <Element name="/skills">
    <div className="lg:py-28 md:py-16 pt-8">
      <div>
        <h2 className="text-3xl font-bold text-center underline underline-offset-2 text-[#363636]">
          My Skills.
        </h2>
        <p className="text-center pt-8">
          As a fresher in web development, I have gained knowledge and hands-on
          experience in both front-end and back-end technologies. On the
          front-end, I work with HTML, CSS, JavaScript, React.js,
          React-Router-Dom, and Tailwind CSS to create interactive and
          responsive user interfaces. For the back-end, I use Node.js and
          Express.js to build server-side applications and APIs. I also manage
          databases using MongoDB, ensuring efficient storage and retrieval of
          data for applications.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-3 pt-10">
        <ul className="space-y-5 mx-auto">
          <h3 className="text-center font-bold underline">Frontend</h3>
          <li className="w-28 h-18">
            <img className="w-full h-full" src={html} alt="" />
          </li>
          <li className="w-28 h-18">
            <img className="w-full h-full" src={css} alt="" />
          </li>
          <li className="w-28 h-18">
            <img className="w-full h-full" src={js} alt="" />
          </li>
          <li className="w-16 ml-6 h-18">
            <img className="w-full h-full" src={react} alt="" />
          </li>
          <li className="w-28 h-18">
            <img className="w-full h-full" src={router} alt="" />
          </li>
          <li className="w-28 h-18">
            <img className="w-full h-full" src={tailwind} alt="" />
          </li>
        </ul>
        <ul className="space-y-5 mx-auto">
          <h3 className="text-center font-bold underline">Backend</h3>
          <li className="w-28 h-18">
            <img className="w-full" src={nodejs} alt="" />
          </li>
          <li className="w-16 ml-6 h-18">
            <img className="w-full" src={express} alt="" />
          </li>
        </ul>
        <ul className="space-y-5 mx-auto">
          <h3 className="text-center font-bold underline">DataBase</h3>
          <li className="w-28 h-18">
            <img className="w-full" src={mongoDB} alt="" />
          </li>
        </ul>
      </div>
    </div>
    </Element>
  );
};

export default MySkills;
