import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  IconBox,
  ItemBox,
  CircleDiv,
  GitIcon,
  LinkedInIcon,
  TwitterIcon,
  EmailIcon,
  Title,
} from "./ContactElements";

const ContactSection = () => {
  return (
    <>
      <ContactContainer id="contact">
        <ContactWrapper>
          <Title>
            <h1>Contact me</h1>
          </Title>
          <IconBox>
            <ItemBox>
              <CircleDiv>
                <GitIcon />
              </CircleDiv>
              <h1>GitHub</h1>
              <p>AlbinR</p>
            </ItemBox>
            <ItemBox>
              <CircleDiv>
                <LinkedInIcon />
              </CircleDiv>
              <h1>Linked In</h1>
              <p>AlbinR</p>
            </ItemBox>
            <ItemBox>
              <CircleDiv>
                <TwitterIcon />
              </CircleDiv>
              <h1>Twitter</h1>
              <p>@AlbinRyberg</p>
            </ItemBox>
            <ItemBox>
              <CircleDiv>
                <EmailIcon />
              </CircleDiv>
              <h1>Email</h1>
              <p>albin@rybergs.net</p>
            </ItemBox>
          </IconBox>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
