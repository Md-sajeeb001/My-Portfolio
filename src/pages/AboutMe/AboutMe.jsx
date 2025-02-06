import { Element } from "react-scroll";
import developer from "../../assets/Resume/profile2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutMe = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Element name="/about">
      <div className="sm:pt-20 pt-10">
        <div>
          <div data-aos="fade-right">
            <h3 className="text-4xl font-light sm:text-start text-center max-w-2xl text-[#363636] ">
              i am A passionate{" "}
              <span className="font-bold text-[#0A66C2] italic ">
                Frontend Developer
              </span>{" "}
              with a Keep eye details
            </h3>
          </div>

          <div className="lg:flex  justify-center gap-10 mt-14">
            <div className="lg:w-1/2 h-full">
              <div data-aos="zoom-in" className="md:flex items-center">
                <img
                  className="lg:hidden block w-20 rounded-tl-3xl rounded-br-3xl lg:rounded-tl-none lg:rounded-br-none"
                  src={developer}
                  alt="developer"
                />
              </div>

              {/* small and medium device part */}
              <img
                data-aos="zoom-in"
                className="hidden lg:block w-full rounded-tl-3xl rounded-br-3xl lg:rounded-tl-none lg:rounded-br-none"
                src={developer}
                alt="developer"
              />
            </div>

            {/* large device part */}
            <div className="lg:w-1/2 w-full space-y-3" data-aos="fade-left">
              <h2 className="text-3xl font-bold text-center underline underline-offset-2 text-[#363636]">
                About Me.
              </h2>
              <p className="leading-[26px] ">
                Hello! I’m a junior web developer with a passion for building
                dynamic, user-friendly, and visually appealing websites. My
                journey in programming began with a curiosity for how the web
                works, and that curiosity quickly turned into a dedication to
                mastering front-end development. Over time, I’ve acquired a
                solid understanding of HTML, CSS, JavaScript, React.js, Tailwind
                CSS, and back-end technologies like Node.js and MongoDB,
                enabling me to create both beautiful and functional websites.
                <br />
                <span className="text-xs text-[#0A66C2] italic font-medium underline">
                  Here's My Hobbies
                </span>{" "}
                <br />
                Beyond programming, I’m passionate about exploring new places,
                blogging about my travel experiences, indulging in delicious
                food, and meeting new people. These activities allow me to stay
                inspired and bring fresh perspectives to my work. I believe that
                a good developer should always be learning, adapting, and
                evolving, and I’m excited to continue this journey and
                contribute to the world of web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default AboutMe;
