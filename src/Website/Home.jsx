import React from "react";
import Img from "../images/img.png";
import "animate.css";
import { NavLink } from "react-router-dom";
import Commonpage from "./Commonpage";
const Home = () => {
  return (
    <>
      <Commonpage
        name="Grow Your business with"
        btn="Get Started"
        path="service"
        image={Img}
      />
    </>
  );
};

export default Home;
