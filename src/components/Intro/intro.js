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
          <h1>My Name Is Ijaz Driscoll</h1>
          <p>Full Stack Software Engineer</p>
          <p>Based in London, UK.</p>
        </div>
        <div className="quoteSection">
          <div className="textContainer">
            <p class="typing">
              <p className="textLine">"It's still the same old story</p>
              <p className="textLine">A fight for love and glory</p> 
              <p className="textLine">A case of do or die...</p>
            </p>

            <div class="hiders">
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
