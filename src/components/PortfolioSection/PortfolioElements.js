import styled from "styled-components";

export const PortfolioContainer = styled.div`
  color: #fff;
  background: #16202d;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const PortfolioWrapper = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: row;
`;
