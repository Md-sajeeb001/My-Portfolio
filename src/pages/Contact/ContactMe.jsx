import { useRef } from "react";
import { Element } from "react-scroll";
import emailjs from "@emailjs/browser";
import Button from "../../shared/Button/Button";
import toast from "react-hot-toast";

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

  return (
    <Element name="/contact">
      <div className=" mx-auto max-w-xl lg:py-20 md:16 py-8">
        <div>
          <h2 className="text-3xl py-10 font-bold text-center underline underline-offset-2 text-[#363636]">
            Contact Me
          </h2>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 card rounded-lg  bg-base-100 w-full shrink-0 shadow-lg">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-control space-y-5">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border-2 rounded-xl outline-none p-4"
                required
              />
              <textarea
                name="message"
                className="border-2 rounded-xl outline-none p-4"
                placeholder="Your Message "
                id=""
                cols="30"
                rows="4"
              />
            </div>
            <button className="text-sm font-medium text-white pt-5 ">
              <Button text="SEND"></Button>
            </button>
          </form>
        </div>
      </div>
    </Element>
  );
};

export default ContactMe;
