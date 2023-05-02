import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="Contact">
      <div className="contact_box">
        <div className="left_contactBar"></div>
        <div className="contact_text">C O N T A C T</div>
        <div className="right_contactBar"></div>
      </div>
       <div className="container">
        <form
          target="_blank"
          action="https://formsubmit.co/3b9a8c5d407e0100f9b11e15ea083dff"
          method="POST"
          className="form-content"
        >
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Full Name"
            required  
          />
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email Address"
            required
          />

          <textarea
            placeholder="Your Message"
            className="form-control text_area"
            name="message"
            rows="6"
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <div className="logo-container">
          <a
            href="https://www.linkedin.com/in/ijaz-driscoll-9709541b9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-logo-link">
              <div className="linkedin"></div>
            </div>
          </a>
          <div className="aboutImageContainer">
          <a href="https://ijaz-driscoll.tumblr.com/"
            target="_blank"
            rel="noopener noreferrer">
          <div className="aboutImage"></div>
          </a>
        </div>
          <a
            href="https://github.com/The-Six"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-logo-link">
              <div className="github"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
