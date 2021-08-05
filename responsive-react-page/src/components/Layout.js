import React from "react";
import SideNav from "./SideNav/SideNav";
import Paragraph from "./Paragraph/Paragraph";
import CardGroup from "./Cards/CardGroup/CardGroup";

import "./Layout.css";

const Layout = () => {
  return (
    <div className="row">
      <div className="col nav">
        <SideNav />
      </div>
      <div className="col main">
        <div className="header">
          <div className="heading">
            <h1>
              What are you <br /> having for lunch?
            </h1>
          </div>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing an elit.
            vestibulum turpis. Morbi vel , sodales arcu et
          </Paragraph>
          <CardGroup />
        </div>
      </div>
    </div>
  );
};

export default Layout;
