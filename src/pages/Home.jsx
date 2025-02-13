import { Element } from "react-scroll";
import Banner from "../components/Banner";
import AboutMe from "./AboutMe/AboutMe";
import MyProjects from "./MyProjects/MyProjects";
import MySkills from "./MySkills/MySkills";
import ContactMe from "./Contact/ContactMe";

const Home = () => {
  return (
    <Element name="/">
      <div id="home" className="px-6 lg:px-0">
        <div>
          <Banner></Banner>
        </div>
        <div>
          <AboutMe></AboutMe>
        </div>

        <div>
          <MySkills></MySkills>
        </div>
        <div>
          <MyProjects></MyProjects>
        </div>
        <div>
          <ContactMe></ContactMe>
        </div>
      </div>
    </Element>
  );
};

export default Home;
