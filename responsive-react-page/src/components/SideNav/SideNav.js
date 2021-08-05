import React, { useState, useLayoutEffect } from "react";
import "./SideNav.css";
import SingleLink from "./SingleLink/SingleLink";
import bar from "./bar.png";
import cart from "./cart.png";

const SideNav = () => {
  const [toggle, setToggle] = useState(true);
  let screenWidth = 0;
  function useWindowSize() {
    const [width, setWidth] = useState(window.innerWidth);
    useLayoutEffect(() => {
      function updateWidth() {
        setWidth(window.innerWidth);
      }
      window.addEventListener("resize", updateWidth);
      updateWidth();
      return () => window.removeEventListener("resize", updateWidth);
    }, []);
    return width;
  }

  screenWidth = useWindowSize();
  console.log(screenWidth);

  const isClickedFunc = () => {
    console.log("clicked");
    setToggle(!toggle);
    return;
  };

  return (
    <div className="sidenav">
      <div className="sidenav-head">
        <div>
          <button className="icon" onClick={isClickedFunc}>
            <img src={bar} alt="icon" />
          </button>
        </div>
        <div>
          <h1>
            Lorem <span id="half">Ipsum</span>
          </h1>
        </div>
        <div>
          <button className="icon">
            <img src={cart} alt="cart" />
          </button>
        </div>
      </div>
      {toggle || screenWidth > 600 ? (
        <>
          <div
            className={
              toggle || screenWidth > 600 ? "sidenav-links" : "responsive-links"
            }
          >
            <ul>
              <SingleLink link="/" name="About" />
              <SingleLink link="/" name="Services" />
              <SingleLink link="/" name="Cuisine" />
              <SingleLink link="/" name="Gallery" />
              <SingleLink link="/" name="Contact" />
              <SingleLink link="/" name="Book" />
            </ul>
          </div>
          <div>
            <a href="/" className="cart-btn">
              <span> Cart </span>
            </a>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default SideNav;
