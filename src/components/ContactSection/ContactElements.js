import styled from "styled-components";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const ContactContainer = styled.div`
  color: #fff;
  background: #16202d;
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
  }
`;

export const ContactWrapper = styled.div`
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

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`;
export const ItemBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  h1 {
    font-size: 20px;
    font-weight: 100;
    color: #65bef2;
    padding: 20px;
  }
`;

export const CircleDiv = styled.div`
  width: 150px;
  height: 150px;
  background-color: #171a21;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px #65bef2;
`;
export const GitIcon = styled(FaGithub)`
  font-size: 40px;
`;
export const LinkedInIcon = styled(FaLinkedinIn)`
  font-size: 40px;
`;
export const TwitterIcon = styled(FaTwitter)`
  font-size: 40px;
`;
export const EmailIcon = styled(MdEmail)`
  font-size: 40px;
`;
