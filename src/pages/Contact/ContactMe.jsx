import { useRef } from "react";
import { Element } from "react-scroll";
import emailjs from "@emailjs/browser";
import Button from "../../shared/Button/Button";
import toast from "react-hot-toast";
import { FaWhatsapp, FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const message = form.message.value;

    const info = {
      email,
      message,
    };

    emailjs
      .send("service_yhzjh1f", "template_n1lgjcs", info, {
        publicKey: "oP74nEvOOAfXozr7c",
      })
      .then(
        (res) => {
          console.log("SUCCESS!");
          if (res) {
            toast.success("check you mail inbox");
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    AOS.init();
  });

  return (
    <Element name="/contact">
      <div className="sm:py-20 py-10">
        <h2 className="text-3xl pb-8 font-bold text-center underline underline-offset-2 text-[#363636]">
          Contact Me.
        </h2>
        <div
          data-aos="fade-up"
          className=" lg:flex-row flex flex-col items-center justify-center bg-gradient-to-r "
        >
          <div
            data-aos="fade-up"
            className="lg:flex-row flex flex-col items-center justify-center bg-gradient-to-r w-full"
          >
            <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full">
              {/* Left Section - Contact Info */}
              <div className="md:w-1/2 w-full bg-[#0A66C2] text-white p-8 flex flex-col justify-center rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                <div>
                  <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
                  <p>
                    Whether you have a question, want to start a project or
                    simply want to connect.
                  </p>{" "}
                  <br />
                  <p className="mb-6">
                    Feel free to reach out through WhatsApp or Email!
                  </p>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3 mb-3">
                  <FaWhatsapp className="text-xl" />
                  <p>+880 1817397967</p>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 mb-6">
                  <FaEnvelope className="text-xl" />
                  <p className="md:text-sm">mohammadsajeeb890@gmail.com</p>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/saj.eeb.306309/following"
                    target="_blank"
                    className="hover:text-gray-200 transition"
                  >
                    <FaFacebook className="text-2xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/md-sajeeb-wd"
                    target="_blank"
                    className="hover:text-gray-200 transition"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a
                    href="https://github.com/Md-sajeeb001"
                    target="_blank"
                    className="hover:text-gray-200 transition"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                </div>
              </div>

              {/* Right Section - Form */}
              <div className="md:w-1/2 w-full p-8 rounded-b-lg md:rounded-bl-none md:rounded-r-lg">
                <form ref={form} onSubmit={sendEmail}>
                  {/* Email Input */}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      placeholder="Write your message here..."
                      className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
                      rows="4"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button className="text-sm font-medium text-white pt-5">
                    <Button text="SEND"></Button>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ContactMe;
