import styled from "styled-components";

export const CardContainer = styled.div`
  width: 200px;
  height: 400px;
  overflow: hidden;
  box-shadow: 0px 0px 15px -5px;
  color: #fff;
  transition: 0.2s ease-in;
  border-radius: 10px;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
`;

export const CardTitle = styled.div`
  padding: 1rem;
`;

export const CardBody = styled.div`
  padding: 1rem 1rem;
`;
