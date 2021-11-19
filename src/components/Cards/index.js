import React from "react";
import {
  CardContainer,
  ImageContainer,
  CardTitle,
  CardText,
  CardInfoBox,
  CardContent,
  IconBox,
  GitIcon,
} from "./CardElements";

export const Card = ({ title, imageUrl, body }) => {
  return (
    <>
      <CardContainer>
        <CardInfoBox>
          <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardText>{body}</CardText>
          </CardContent>
          <IconBox>
            <GitIcon />
          </IconBox>
        </CardInfoBox>
        <ImageContainer>
          <img src={imageUrl} alt=""></img>
        </ImageContainer>
      </CardContainer>
    </>
  );
};

export default Card;
