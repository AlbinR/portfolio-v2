import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 30px;
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
`;
export const Text = styled.div``;
export const Title = styled.div`
  font-size: 90px;
  border-bottom: 1px solid #4b8ea9;
  width: fit-content;
`;
export const Name = styled.div`
  font-size: 60px;
  border-bottom: 1px solid #4b8ea9;
  width: fit-content;
`;
export const Intro = styled.div`
  font-size: 30px;
  border-bottom: 1px solid #4b8ea9;
  width: fit-content;
`;
export const ImageContainer = styled.div``;

export const ImageDiv = styled.div`
  background-color: #fff;
  width: 400px;
  height: 400px;
  border-radius: 100px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

export const Btn = styled.button`
  width: 100px;
  padding: 10px;
  margin: 0 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  border-bottom: 2px solid #4b8ea9;
`;
