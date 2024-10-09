import React from "react";
import ellips from "../../assets/PlayVideo.png";
import letsGo from "../../assets/LetsGo.png";
import readIcon from "../../assets/Atom_Card1.png";
import applyIcon from "../../assets/Atom_Card2.png";
import multiplyIcon from "../../assets/Atom_Card2.png";
import CreateCard from "./CreateCard/CreateCard";
import Nav from "../Nav/Nav";
import "./Header.scss";

function Header() {
  const worksCard = [
    {
      icon: readIcon,
      title: "Read it",
      descr:
        "Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
    {
      icon: applyIcon,
      title: "Apply",
      descr:
        "Orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  magna dolore.",
    },
    {
      icon: multiplyIcon,
      title: "Apply",
      descr:
        "Orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  magna dolore.",
    },
  ];
  return (
    <div className="wrapperHeader">
      <div className="containerHeader">
        <Nav />
        <div className="tittleBox">
          <div className="tittleLeft">
            <h1>Listen To The Beat Of The Web</h1>
            <p className="middleText">
              First template from series templates to design web pages, using
              components system
            </p>
            <button>
              <p className="textButton">Let’s Go</p>
              <img src={letsGo} alt="letsGo" />
            </button>
          </div>
          <div className="tittleRight">
            <img src={ellips} alt="ellips" />
          </div>
        </div>
        <p className="works">How it works</p>
        <div className="cardBox">
          <CreateCard item={worksCard} />
        </div>
      </div>
    </div>
  );
}

export default Header;
