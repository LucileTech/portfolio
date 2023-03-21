import React, { useState } from "react";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/0546efd0-ae38-11ed-a31e-753411848f80";

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
          <button className="button-55" type="submit">
            Send a message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
