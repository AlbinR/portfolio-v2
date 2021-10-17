import React from "react";
import Video from "../../videos/video.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  Header,
  ImageDiv,
  Text,
  Title,
  Name,
  Intro,
  ImageContainer,
  Buttons,
  Btn,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <Header>
          <Text>
            <Title>
              <h1>Hello,</h1>
            </Title>
            <Name>
              <h2>My name is Albin Ryberg</h2>
            </Name>
            <Intro>
              <h2>I am a front-end developer studying at KYH in Stockholm</h2>
            </Intro>
          </Text>
          <ImageContainer>
            <ImageDiv />
          </ImageContainer>
        </Header>
        <Buttons>
          <Btn class="draw">About</Btn>
          <Btn class="draw">Portfolio</Btn>
          <Btn class="draw">Contact</Btn>
        </Buttons>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
