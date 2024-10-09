import React from "react";
import ceoIcon from "../../assets/CEO.png";
import webDesignIcon from "../../assets/WebDesign.png";
import managerIcon from "../../assets/Manager.png";
import CreateComment from "./CreateComment/CreateComment";
import CardDesign from "./CreateComment/CardDesign";
import CreateCardTeam from "./CreateComment/CreateCardTeam";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import bgIcon from "../../assets/bgElement.png";
import layout from "../../assets/Layout.png";
import variants from "../../assets/Variants.png";
import components from "../../assets/Components.png";
import design from "../../assets/Design.png";
import animated from "../../assets/Animated.png";
import responsive from "../../assets/Responsive.png";
import pieter from "../../assets/Pieter.png";
import loyd from "../../assets/Loyd.png";
import latte from "../../assets/Latte.png";
import cheese from "../../assets/Cheese.png";
import "./Main.scss";
import CreateProfileTeam from "./CreateComment/CreateProfileTeam";

function Main() {
  const person = [
    {
      icon: ceoIcon,
      name: "Sean Farmer",
      post: "CEO",
      comment:
        "Sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam lorem ipsum dolor.",
    },
    {
      icon: webDesignIcon,
      name: "Nick Parker",
      post: "Wed-designer",
      comment:
        "Orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  magna dolore. Orem ipsum.",
    },
    {
      icon: managerIcon,
      name: "Mishel Latuale",
      post: "Project Manager",
      comment:
        "Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Ipsum dolor sit amet.",
    },
  ];
  const cardData = [
    {
      icon: layout,
      title: "Auto Layout",
      descr:
        "Sed do eiusmod tempor incididunt ut consectetur adipisicing elit,do eiusmod tempor incididunt ut labore et dolore",
    },
    {
      icon: variants,
      title: "Variants",
      descr:
        "Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
    },
    {
      icon: components,
      title: "Components",
      descr:
        "Dor sum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore ma iusmod",
    },
    {
      icon: design,
      title: "Atomic Design",
      descr:
        "Adipisicing elit, orem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et dolore magna ",
    },
    {
      icon: animated,
      title: "Animated",
      descr:
        "Morem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
    },
    {
      icon: responsive,
      title: "Responsive",
      descr:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
    },
  ];
  const dataTeam = [
    {
      icon: pieter,
      name: "Pieter Omvlee",
      post: "Designer",
    },
    {
      icon: loyd,
      name: "Loyd Maywe",
      post: "Php developer",
    },
    {
      icon: latte,
      name: "Latte Macchiato",
      post: "CEO Company",
    },
    {
      icon: cheese,
      name: "Cheese Cake",
      post: "Art Director",
    },
  ];
  return (
    <div className="wrapperMain">
      <div className="whyLove">
        <p className="titleLove">Why you'll love it</p>
        <div className="wrapperCard">
          <CreateComment item={person} />
        </div>
      </div>
      <p className="graphic">Unsplash graphic</p>
      <p className="graphicDescr">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliquat enim ad minim.
      </p>
      <div className="graphicIcon">
        <img src={img1} alt="icon" />
        <img src={img2} alt="icon" />
        <img src={img3} alt="icon" />
        <img src={img4} alt="icon" />
        <img src={img5} alt="icon" />
        <img className="bgIcon" src={bgIcon} alt="icon" />
      </div>
      <p className="designProcess">Speed up your design process</p>
      <div className="cardDesign">
        <CardDesign item={cardData} />
      </div>
      <div className="enjoyProductBox">
        <div className="wrapperEnjoy">
          <p className="title">Enjoy this product</p>
          <p className="descr">
            This project required a huge amount of hours but sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliquat enim ad minim.
          </p>
          <button className="productButton">Sign In</button>
        </div>
      </div>
      <div className="projectTeamBox">
        <div className="text">
          <p className="title">Project's team</p>
          <p className="descr">
            Sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliquat enim ad minim veniam
            lorem ipsum dolor.Sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <button className="teamButton">Join our team</button>
      </div>
      <div className="cardBoxTeam">
        <CreateProfileTeam item={dataTeam} />
      </div>
    </div>
  );
}

export default Main;
