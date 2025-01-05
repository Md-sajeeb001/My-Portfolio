import Banner from "../components/Banner";
import AboutMe from "./AboutMe/AboutMe";
import MyProjects from "./MyProjects/MyProjects";
import MySkills from "./MySkills/MySkills";

const Home = () => {
  return (
    <div className="px-6 lg:px-0">
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
    </div>
  );
};

export default Home;
