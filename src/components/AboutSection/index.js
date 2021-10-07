import React from "react";
// import { Button } from "../ButtonElements";
import { AboutContainer, AboutWrapper } from "./AboutElements";
import Header from "./../Header";

const AboutSection = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <Header heading="About Me" />
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
