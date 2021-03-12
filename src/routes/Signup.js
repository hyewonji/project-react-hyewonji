import React from "react";
import FormTemplate from "../components/FormTemplate";
import NavBar from "../components/NavBar";
import HelmetComponent from "../components/HelmetComponent";

const Signup = () => {
  return (
    <>
      <HelmetComponent title="Signup" />
      <NavBar />
      <FormTemplate></FormTemplate>
    </>
  );
};

export default Signup;
