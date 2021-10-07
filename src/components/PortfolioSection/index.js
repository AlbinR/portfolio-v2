import React from "react";
import { PortfolioContainer, PortfolioWrapper } from "./PortfolioElements";
import Header from "./../Header";
import Card from "./../Cards";

const PortfolioSection = () => {
  return (
    <>
      <PortfolioContainer id="portfolio">
        <PortfolioWrapper>
          <Header heading="Portfolio" />
          <Card />
          <Card />
          <Card />
          <Card />
        </PortfolioWrapper>
      </PortfolioContainer>
    </>
  );
};

export default PortfolioSection;
