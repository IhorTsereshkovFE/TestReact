import React from "react";
import instagram from "../../../assets/instagram.png";
import telegram from "../../../assets/telegram.png";
import linkedin from "../../../assets/linkedin.png";

function CreateProfileTeam({ item }) {
  return item.map((person, index) => {
    const { icon, name, post } = person;
    return (
      <div className="cardProfile" key={index}>
        <img src={icon} alt="icon" />
        <div className="descrWrapper">
          <div className="postName">
            <p className="nameUser">{name}</p>
            <p className="titleCard">{post}</p>
          </div>
          <div className="imgWrapper">
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="#">
              <img src={telegram} alt="telegram" />
            </a>
            <a href="#">
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    );
  });
}

export default CreateProfileTeam;
