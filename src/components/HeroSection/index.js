import React from "react";
import Video from "../../videos/video.mp4";
import Image from "../../images/albin.jpg";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  Header,
  ImageAr,
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
              <h2>My name is Albin Ryberg,</h2>
            </Name>
            <Intro>
              <h2>I am a front-end developer </h2>
              <h2>studying at KYH in Stockholm</h2>
            </Intro>
          </Text>
          <ImageContainer>
            <ImageAr src={Image} alt="Albin" type="image/jpg" />
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
