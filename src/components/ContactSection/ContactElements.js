import styled from "styled-components";

export const ContactContainer = styled.div`
  color: gray;
  background: #16202d;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ContactWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 900px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;
