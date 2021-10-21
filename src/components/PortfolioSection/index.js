import React from "react";
import PortfolioImg from "../../images/portfoliosite.jpg";
import BevNewsImg from "../../images/bevnews.jpg";
import QuireImg from "../../images/quire.jpg";

import {
  PortfolioContainer,
  PortfolioWrapper,
  Title,
  Cards,
  CardDiv,
} from "./PortfolioElements";

import Card from "../Cards";

const PortfolioSection = () => {
  return (
    <>
      <PortfolioContainer id="portfolio">
        <PortfolioWrapper>
          <Title>
            <h1>Portfolio</h1>
          </Title>
          <Cards>
            <CardDiv>
              <Card
                title="Porfolio"
                body="The code for this portfolio site."
                imageUrl={PortfolioImg}
              />
              <Card
                title="BevNews"
                body="Tracks words in The Guardian."
                imageUrl={BevNewsImg}
              />
              <Card
                title="Quire"
                body="Online note-taking app."
                imageUrl={QuireImg}
              />
            </CardDiv>
            <CardDiv>
              <Card title="Cargo" body="Figma prototype made in react." />
              <Card
                title="Calculator"
                body="Calculator made in react."
                // imageUrl={Image}
              />
            </CardDiv>
          </Cards>
        </PortfolioWrapper>
      </PortfolioContainer>
    </>
  );
};

export default PortfolioSection;
