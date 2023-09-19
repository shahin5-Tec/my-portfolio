import React, { useRef } from "react";
import bg from "../assets/touch-the-universe.jpg";


const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0c8hu2u",
        "template_ojy3xoc",
        form.current,
        "P2YwGNjq5SExK3m1e"
      )
      .then(
        (result) => {
          toast.success("Your Message send Successfully, Thank you.");
        },
        (error) => {}
      );
    e.target.reset();
  };
  return (
    <div style={{ backgroundImage: `url(${bg})` }} id="contactMe">
      <div data-aos="fade-right" data-aos-duration="1500">
        <div className="text-center font-serif text-white py-10">
          <h3 className="text-xl ">Contact Me</h3>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="md:w-3/5 w-11/12 m-auto pb-5 "
        >
          <input
            name="name"
            type="text"
            placeholder="Type here your Name"
            className="input input-bordered w-full "
          />
          <input
            name="email"
            type="email"
            placeholder="Type here your Email"
            className="input input-bordered w-full  mt-4"
          />
          <input
            type="text"
            name="subject"
            placeholder="Type here Subject"
            className="input input-bordered w-full  mt-4"
          />
          <textarea
            name="message"
            className="textarea textarea-bordered w-full  md:h-72 h-40 mt-4"
            placeholder="Type here your Message"
          ></textarea>
          <div className="text-center">
            <input
              className="btn btn-secondary hover:btn-success md:px-32 mt-3"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;