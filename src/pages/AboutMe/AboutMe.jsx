import { Element } from "react-scroll";
import developer from "../../assets/developer.jpg";
const AboutMe = () => {
  return (
    <Element name="/about">
      <div className="sm:pt-20 pt-10">
        <div>
          <div>
            <h3 className="text-4xl font-light sm:text-start text-center max-w-2xl text-[#363636] ">
              i am A passionate{" "}
              <span className="font-bold text-blue-900">
                full stack developer
              </span>{" "}
              with a Keep eye details
            </h3>
          </div>

          <div className="lg:flex  justify-center gap-6 mt-14">
            <div className="lg:w-1/2 h-full">
              <div className="md:flex items-center">
                <p className="pb-8 sm:hidden block">
                  <span className="text-xs text-slate-500 underline">
                    Here's My Hobbies
                  </span>{" "}
                  <br />I thrive on solving complex problems and bringing
                  creative ideas to life through code. When I’m not coding,
                  you’ll find me traveling to explore new cultures or indulging
                  in delicious food adventures. These experiences inspire my
                  work, fueling my creativity and drive to learn.
                </p>
                <img
                  className="lg:hidden block w-20 rounded-tl-3xl rounded-br-3xl lg:rounded-tl-none lg:rounded-br-none"
                  src={developer}
                  alt="developer"
                />
              </div>

              {/* small and medium device part */}
              <img
                className="hidden lg:block  w-full rounded-tl-3xl rounded-br-3xl lg:rounded-tl-none lg:rounded-br-none"
                src={developer}
                alt="developer"
              />
              <p className="pt-8 sm:block hidden">
                <span className="text-xs text-slate-500 underline">
                  Here's My Hobbies
                </span>{" "}
                <br />I thrive on solving complex problems and bringing creative
                ideas to life through code. When I’m not coding, you’ll find me
                traveling to explore new cultures or indulging in delicious food
                adventures. These experiences inspire my work, fueling my
                creativity and drive to learn.
              </p>
            </div>

            {/* large device part */}
            <div className="lg:w-1/2 w-full space-y-3">
              <h2 className="text-3xl font-bold text-center underline underline-offset-2 text-[#363636]">
                About Me.
              </h2>
              <p className="leading-[26px] ">
                Hi, I'm Mohammad Sajeeb, a passionate full-stack web developer
                who thrives on building seamless, user-friendly, and innovative
                web applications. With expertise in both front-end and back-end
                development, I specialize in creating dynamic websites that are
                not only visually appealing but also highly functional. I enjoy
                taking projects from concept to completion, ensuring every
                detail aligns with your goals. My skills include designing
                intuitive user interfaces, developing efficient APIs, and
                implementing scalable, secure back-end systems. Whether it's
                crafting responsive designs or optimizing complex database
                structures, I focus on delivering solutions that meet modern web
                standards. Collaboration is at the heart of my process. I work
                closely with clients and teams to understand their needs, adapt
                to challenges, and ensure the end product exceeds expectations.
                With a commitment to continuous learning, I stay updated on the
                latest technologies to bring fresh ideas to every project. Let's
                create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default AboutMe;
