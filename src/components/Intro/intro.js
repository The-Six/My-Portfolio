import React from "react";
import "./intro.css";

function Intro() {
  return (
    <div className="Intro">
      <div className="intro_box">
        <div className="left_introBar"></div>
        <div className="intro_text">W E L C O M E</div>
        <div className="right_introBar"></div>
      </div>
      <div className="introCenterSection">
        <div className="spacerSection"></div>
        <div className="intro_textBox">
          <h1>Ijaz Driscoll</h1>
          <p>Full Stack Software Engineer</p>
          <p>Based in London, UK.</p>
        </div>
        <div className="quoteSection">
          <div className="textContainer">
            <p class="typing">
              <p className="textLine">"1. Mathematics is the language of nature. 2. Everything around us can be represented and understood through numbers.</p>
              {/* <p className="textLine">2. Everything around us can be represented and understood through numbers.</p>  */}
              
            </p>

            <div class="hiders">
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
      <div className="vaultLogo"></div>
    </div>
  );
}

export default Intro;
