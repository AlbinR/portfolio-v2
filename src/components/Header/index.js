import React from "react";
import {
  HeaderContainer,
  TextContainer,
  TextContainerP,
} from "./HeaderElements";

const Header = (props) => (
  <HeaderContainer>
    <TextContainer>{props.heading}</TextContainer>
    <TextContainerP>{props.description}</TextContainerP>
  </HeaderContainer>
);

export default Header;
