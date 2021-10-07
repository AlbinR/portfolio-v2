import React from "react";
import Video from "../../videos/video.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  Heading,
} from "./HeroElements";
import { Card } from "../Cards";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <Card imageUrl="/" />
        <Heading>
          <h1>Albin Ryberg</h1>
          <h2>Front-End developer</h2>
        </Heading>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
