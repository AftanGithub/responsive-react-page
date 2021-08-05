import React from "react";
import Card from "../Card";
import "./CardGroup.css";
const CardGroup = () => {
  return (
    <div className="card-section" id="bottom">
      <Card
        img="https://theveganatlas.com/wp-content/uploads/2019/01/Lentil-tacos2-Joshua-Resnick-480x360.jpg"
        name="Mexican Taco"
      />
      <Card
        img="https://img-global.cpcdn.com/recipes/4f330bd6f8a38f79/680x482cq70/farmhouse-pizza-recipe-main-photo.jpg"
        name="Farmhouse Pizza"
      />
      <Card
        img="https://static.toiimg.com/thumb/62333823.cms?width=1200&height=900"
        name="Chicken Burger"
      />
      <Card
        img="https://static.toiimg.com/thumb/55046506.cms?width=1200&height=900"
        name="Loaded Nachos"
      />
    </div>
  );
};

export default CardGroup;
