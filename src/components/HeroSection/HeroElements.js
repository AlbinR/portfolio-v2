import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 10px;
  min-height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap-reverse;
  } ;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    align-items: center;
  } ;
`;

export const Title = styled.div`
  font-size: 80px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    align-items: center;
  } ;
`;
export const Name = styled.div`
  font-size: 40px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    align-items: center;
  } ;
`;
export const Intro = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    align-items: center;
  } ;
`;
export const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  } ;
`;

export const ImageAr = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 1000px;
  filter: grayscale(100%);
  transition: 0.5s;
  :hover {
    filter: grayscale(0%);
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 425px) {
    flex-direction: column;
  } ;
`;

export const Btn = styled.button`
  width: 100px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  text-decoration: none;
  background-color: black;
  font-size: 20px;
  border: none;
  color: #fff;
  border-bottom: 2px solid #4b8ea9;
`;
