import React from "react";
import "./about.css";

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
        <div className="aboutImageContainer">
          <div className="aboutImage"></div>
        </div>
        <div className="aboutQuoteSection">
          <div className="aboutTextContainer">
            <a
              className="aboutQuoteAnchor"
              href="https://www.youtube.com/watch?v=jOWer47swn8"
              target="blank"
              rel="noopener noreferrer"
            >
              <p class="aboutTyping">
                <p className="aboutTextLine">
                  The world will always welcome lovers
                </p>
                <p className="aboutTextLine">As time goes by."</p>
                <p className="aboutTextLine">--Vera Lynn</p>
              </p>

              <div class="aboutHiders">
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="about_textBox">
        <p className="about_content">
          I am a natural problem solver with a keen interest in our symbiotic
          relationship with technology. Programming has given me the tools to
          build a tangible bridge between the two.
        </p>
      </div>
    </div>
  );
}

export default About;
