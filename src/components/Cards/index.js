import React from "react";
import {
  CardContainer,
  ImageContainer,
  CardTitle,
  CardBody,
} from "./CardElements";

export const Card = ({ title, imageUrl, body }) => {
  return (
    <>
      <CardContainer>
        <ImageContainer>
          <img src={imageUrl} alt=""></img>
        </ImageContainer>
        <CardTitle>
          <h3>{title}</h3>
        </CardTitle>
        <CardBody>
          <p>{body}</p>
        </CardBody>
      </CardContainer>
    </>
  );
};

export default Card;
