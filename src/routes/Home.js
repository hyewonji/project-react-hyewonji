import React from "react";
import HelmetComponent from "../components/HelmetComponent";
import HomeTemaplate from "../components/HomeTemplate";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <HelmetComponent title="Home" />
      <NavBar></NavBar>
      <HomeTemaplate></HomeTemaplate>
    </>
  );
};

export default Home;
