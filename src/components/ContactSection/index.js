import React from "react";
import { ContactContainer, ContactWrapper } from "./ContactElements";
import Header from "./../Header";

const ContactSection = () => {
  return (
    <>
      <ContactContainer id="contact">
        <ContactWrapper>
          <Header heading="Contact me" />
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
