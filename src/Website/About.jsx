import React from "react";
import { NavLink } from "react-router-dom";
import Img3 from "../images/img3.jpg";
import Commonpage from "./Commonpage";
const About = () => {
  return (
    <>
      <Commonpage
        name="Welocome to About Page"
        btn="Contact Now"
        path="/contact"
        image={Img3}
      />
    </>
  );
};

export default About;
