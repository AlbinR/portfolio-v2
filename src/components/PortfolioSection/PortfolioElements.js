import styled from "styled-components";

export const PortfolioContainer = styled.div`
  color: #fff;
  background: #16202d;
  width: 100%;
  min-height: 100vh;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid white;
`;

export const PortfolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  min-height: 100%;
`;

export const Title = styled.div`
  width: 80vw;
  margin: auto;
  border-radius: 10px;
  margin-bottom: 6%;
  h1 {
    font-size: calc(16px + 3vw);
    font-weight: bold;
    padding: 20px;
    margin: auto;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const CardDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`;
