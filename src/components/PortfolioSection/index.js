import React from "react";
import { PortfolioContainer, PortfolioWrapper } from "./PortfolioElements";
import Header from "./../Header";

const PortfolioSection = () => {
  return (
    <>
      <PortfolioContainer id="portfolio">
        <PortfolioWrapper>
          <Header heading="Portfolio" />
        </PortfolioWrapper>
      </PortfolioContainer>
    </>
  );
};

export default PortfolioSection;
