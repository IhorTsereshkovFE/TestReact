import React from "react";

function CreateCard({ item }) {
  return item.map((card, index) => {
    const { icon, title, descr } = card;
    return (
      <div className="cardFirst" key={index}>
        <img src={icon} alt="icon" />
        <p className="titleCard">{title}</p>
        <p className="descr">{descr}</p>
      </div>
    );
  });
}

export default CreateCard;
