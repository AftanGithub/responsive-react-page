import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={props.img} alt="img" />
      </div>
      <div className="card-body">
        <h4>{props.name}</h4>
      </div>
    </div>
  );
};

export default Card;
