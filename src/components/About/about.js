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
            <p class="aboutTyping">
              <p className="aboutTextLine">"It's still the same old story</p>
              <p className="aboutTextLine">A fight for love and glory</p>
              <p className="aboutTextLine">A case of do or die...</p>
            </p>

            <div class="aboutHiders">
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about_textBox">
        <p className="about_content">
          Coding initially began as a hobby but I began to see how pivotal
          software had become in our society, I believe it truly rules the world
          and I want to help shape it.
        </p>
      </div>
    </div>
  );
}

export default About;
