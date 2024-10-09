import React from "react";
import download1 from "../../assets/download1.png";
import download2 from "../../assets/download2.png";
import download3 from "../../assets/download3.png";
import "./DownloadBox.scss";

function DownloadBox() {
  return (
    <div className="wrapperDownload">
      <div className="downloadBox">
        <p className="topText">Download the future</p>
        <p className="middleText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad
          minim.
        </p>
        <form>
          <input type="text" placeholder="Input text placeholder" />
          <button>Sign Up</button>
        </form>
        <div className="threeIcons">
          <a href="">
            <img src={download1} alt="icons" />
          </a>
          <a href="">
            <img src={download2} alt="icons" />
          </a>
          <a href="">
            <img src={download3} alt="icons" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default DownloadBox;
