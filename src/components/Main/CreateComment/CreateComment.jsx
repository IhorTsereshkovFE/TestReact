import React from "react";

function CreateComment({ item }) {
  return item.map((person, index) => {
    const { icon, name, post, comment } = person;
    return (
      <div className="cardComment" key={index}>
        <div className="topWrapper">
          <img src={icon} alt="icon" />
          <div className="postName">
            <p className="nameUser">{name}</p>
            <p className="titleCard">{post}</p>
          </div>
        </div>
        <p className="descr">{comment}</p>
      </div>
    );
  });
}

export default CreateComment;
