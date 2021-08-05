import React from "react";
import "./Paragraph.css";

const Paragraph = (props) => {
  return (
    <div className="para" id="top">
      {props.children}
      <hr />
    </div>
  );
};

export default Paragraph;
