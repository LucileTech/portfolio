import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/0546efd0-ae38-11ed-a31e-753411848f80"; // TODO - fill on the later step

const ContactForm = ({ theme }: { theme: string }) => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="App-section">
        <div className="thanksMessage">
          <div className="Section-title text-2xl">Thank you!</div>
          <div className="Section-title text-md">We'll be in touch soon.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="App-section" id="contactSection">
      <h2 className="Section-title">CONTACT ME</h2>
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        className="input-form"
      >
        <div>
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="input"
            id="name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input"
            id="mail"
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Your message"
            name="message"
            className="input"
            id="message"
            required
          />
        </div>
        <div>
          <button
            className="button-55"
            // className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Send a message
          </button>
        </div>
      </form>
      {/* 
    <form action="https://public.herotofu.com/v1/0546efd0-ae38-11ed-a31e-753411848f80" method="post">
  <div>
    <label for="name">Your Name</label>
    <input name="Name" id="name" type="text" required />
  </div>
  <div>
    <label for="email">Your Email</label>
    <input name="Email" id="email" type="email" required  />
  </div>
  <div>
    <input type="submit" value="Download CTA" />
  </div>
</form> */}
    </div>
  );
};

export default ContactForm;
