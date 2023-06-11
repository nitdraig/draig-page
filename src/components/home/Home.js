import { NavBar } from "./../navbar/NavBar";
import { Banner } from "./../banner/Banner";

import { Projects } from "./../projects/Projects";
import { Contact } from "./../contact/Contact";
import { Footer } from "./../footer/Footer";

import React from "react";

const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
