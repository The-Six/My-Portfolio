import React from "react";
import "./about.css";
import LogEntryForm from '../LogEntryForm/logentry';


function About() {
  return (
    <div className="About">
      <div className="about_box">
        <div className="left_aboutBar"></div>
        <div className="about_text">A B O U T</div>
        <div className="right_aboutBar"></div>
      </div>
      <div className="aboutCenterSection">
        <div className="aboutSpacerSection"></div>
        <div className="about_textBox">
          <p className="about_content">
          <LogEntryForm /><p>------</p>I am a natural problem solver with a passion for our
            symbiotic relationship with technology. My background in psychology
            and sociology found me researching the influence of tech in these
            domains. Programming has given me the tools to explore the
            opportunity of having a tangible input into the future of this
            relationship.
          </p>
        </div>
      </div>
      <div className="aboutQuoteSection">
      <div className="qouteSpacerSection"></div>
        <div className="aboutTextContainer">
          <a
            className="aboutQuoteAnchor"
            href="https://www.youtube.com/watch?v=ShdmErv5jvs"
            target="blank"
            rel="noopener noreferrer"
          >
            <p class="aboutTyping">
              <p className="aboutTextLine">
                3. If you graph the numbers of any system, patterns emerge.
                Therefore, there are patterns everywhere in nature."
              </p>
              <p className="aboutTextLine">—𝝅</p>
            </p>

            <div class="aboutHiders">
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
