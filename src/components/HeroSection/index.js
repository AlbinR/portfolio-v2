import React from "react";
import Video from "../../videos/video.mp4";

import { HeroContainer, HeroBg, VideoBg, HeroContent } from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent></HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
