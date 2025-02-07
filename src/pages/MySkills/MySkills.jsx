import html from "../../assets/logos/html.png";
import css from "../../assets/logos/css.png";
import js from "../../assets/logos/js.png";
import react from "../../assets/logos/react.png";
import router from "../../assets/logos/router.png";
import tailwind from "../../assets/logos/tailwind.png";
import nodejs from "../../assets/logos/nodejs.png";
import express from "../../assets/logos/express.png";
import mongoDB from "../../assets/logos/mongoDB.png";
import nextjs from "../../assets/logos/nextjs.png";
import firebase from "../../assets/logos/firebase.png";
import gitignore from "../../assets/logos/gitignore.png";
import vscode from "../../assets/logos/vscode.png";
import postman from "../../assets/logos/postman.png";
import github from "../../assets/logos/github.png";
import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MySkills = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Element name="/skills">
      <div className="lg:py-28 md:py-16 pt-8">
        <div data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center underline underline-offset-2 text-[#363636]">
            My Skills.
          </h2>
          <p className=" pt-8 text-justify">
            As a fresher in web development, I have gained knowledge and
            hands-on experience in both front-end and back-end technologies. On
            the front-end, I work with HTML, CSS, JavaScript, React.js,
            React-Router-Dom, and Tailwind CSS to create interactive and
            responsive user interfaces. For the back-end, I use Node.js and
            Express.js to build server-side applications and APIs. I also manage
            databases using MongoDB, ensuring efficient storage and retrieval of
            data for applications.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-3 pt-10">
          <ul className="space-y-5 mx-auto ">
            <h3 className="text-center font-bold underline">Frontend</h3>
            <div className="flex flex-wrap items-center space-y-4">
              <li data-aos="fade-up" className="w-28 h-18">
                <img className="w-full h-full" src={html} alt="" />
              </li>
              <li data-aos="fade-up" className="w-28 h-18">
                <img className="w-full h-full" src={css} alt="" />
              </li>
              <li data-aos="fade-up" className="w-28 h-18">
                <img className="w-full h-full" src={js} alt="" />
              </li>
              <li data-aos="fade-up" className="w-16 mx-auto ml-6 h-18">
                <img className="w-full h-full" src={react} alt="" />
              </li>
              {/* <li data-aos="fade-up" className="w-28 mx-auto h-18">
                <img className="w-full h-full" src={router} alt="" />
              </li> */}
              <li data-aos="fade-up" className="w-12 mx-auto h-12">
                <img className="w-full mx-auto h-full" src={tailwind} alt="" />
              </li>
              <li data-aos="fade-up" className="w-12 mx-auto h-12">
                <img className="w-full mx-auto h-full" src={nextjs} alt="" />
              </li>
              <li data-aos="fade-up" className="w-14 mx-auto h-14">
                <img className="w-full mx-auto h-full" src={firebase} alt="" />
              </li>
            </div>
          </ul>
          <ul className="space-y-5 mx-auto">
            <h3 className="text-center font-bold underline">Backend</h3>
            <div className="">
              <li data-aos="fade-up" className="w-28 h-18">
                <img className="w-full" src={nodejs} alt="" />
              </li>
              <li data-aos="fade-up" className="w-12 ml-6 h-14 mx-auto">
                <img className="w-full" src={express} alt="" />
              </li>
              <li data-aos="fade-up" className="w-28 h-18 mx-auto">
                <img className="w-full" src={mongoDB} alt="" />
              </li>
            </div>
          </ul>
          <ul className="space-y-5 mx-auto">
            <h3 className="text-center font-bold underline">Tools</h3>
            <div className="space-y-4">
              <li data-aos="fade-up" className="w-14 h-14 mx-auto">
                <img className="w-full" src={vscode} alt="" />
              </li>
              <li data-aos="fade-up" className="w-12 h-12 mx-auto">
                <img className="w-full" src={postman} alt="" />
              </li>
              <li data-aos="fade-up" className="w-14 h-14 mx-auto">
                <img className="w-full" src={gitignore} alt="" />
              </li>
              <li data-aos="fade-up" className="w-12 h-12 mx-auto">
                <img className="w-full" src={github} alt="" />
              </li>
            </div>
          </ul>
        </div>
      </div>
    </Element>
  );
};

export default MySkills;
