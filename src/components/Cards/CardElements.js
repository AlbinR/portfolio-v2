import styled from "styled-components";
import { FaGithub, FaReact } from "react-icons/fa";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #2a475e;
  color: #fff;
  border-radius: 10px;
  overflow: hidden;
  width: 350px;
  height: 200px;
  margin: 10px;
  border-left: 1px solid #66c0f4;
  border-top: 1px solid #66c0f4;
  border-bottom: 1px solid #66c0f4;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
    color: #fff;
    outline: 0;
    box-shadow: 0 0 10px 4px#3498db;
  }
`;

export const CardInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;
export const CardContent = styled.div`
  flex: 1 0 auto;
`;

export const CardTitle = styled.div`
  padding: 20px 20px 5px 20px;
  font-size: 30px;
`;

export const CardText = styled.div`
  padding: 0 10px 0 20px;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GitIcon = styled(FaGithub)`
  font-size: 50px;
  margin: 10px;
`;
export const ReactIcon = styled(FaReact)`
  font-size: 50px;
  margin: 10px;
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  float: right;
  background-color: #fff;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    transition: 0.5s;
  }
`;
