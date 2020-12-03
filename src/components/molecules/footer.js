import React from "react";
import styled from "styled-components";
import Container from "@atoms/container";
import TextLink from "@atoms/textLink";

const Footer = () => (
  <FooterContainer content="true">
    <Links>
      <li>
        <TextLink href="mailto:ictfreefood@gmail.com">Contact Us</TextLink>
      </li>
    </Links>
    <Links>
      <li>
        <TextLink href="https://www.facebook.com/ICTfridgefood/">
          Faceboook
        </TextLink>
      </li>
      <li>
        <TextLink href="https://www.instagram.com/ictcommunityfridge">
          Instagram
        </TextLink>
      </li>
    </Links>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled(Container)`
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  padding-top: 1rem;

  a,
  p {
    color: ${(props) => props.theme.colors.lightGray};
    margin-bottom: 0;
  }
`;

const Links = styled.ul`
  margin: 0;
  display: flex;
  list-style: none;

  li {
    margin: 0;
    padding-right: 0.75rem;
    color: white;
  }
`;
