import React from "react";

function CardDesign({ item }) {
  return item.map((post, index) => {
    const { icon, title, descr } = post;
    let color;
    if (index === 0) {
      color = "rgb(255, 216, 78)";
    } else if (index === 1) {
      color = "rgb(251, 99, 99)";
    } else if (index === 2) {
      color = "rgb(166, 109, 245)";
    } else if (index === 3) {
      color = "rgb(109, 214, 176)";
    } else if (index === 4) {
      color = "rgb(112, 140, 240)";
    } else {
      color = "rgb(160, 46, 142)    ";
    }
    return (
      <div className="card" key={index}>
        <img src={icon} alt="icon" />
        <div className="wrapperCard">
          <p className="title" style={{ color }}>
            {title}
          </p>
          <p className="descr">{descr}</p>
        </div>
      </div>
    );
  });
}

export default CardDesign;
