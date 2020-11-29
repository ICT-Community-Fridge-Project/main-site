import React from "react";
import styled from "styled-components";
import Button from "@atoms/button";
import Container from "@atoms/container";
import TextLink from "@atoms/textLink";
import { media } from "@utils/media";

const Navigation = () => {
  function navigateToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView();
  }

  return (
    <Nav>
      <NavContainer flex content="true">
        <strong>ICT Community Fridge Project</strong>
        <Links>
          <li>
            <TextLink onClick={() => navigateToSection("about-us")}>
              About Us
            </TextLink>
          </li>
          <li>
            <TextLink onClick={() => navigateToSection("locations")}>
              Locations
            </TextLink>
          </li>
          <li>
            <Button href="">Donate</Button>
          </li>
        </Links>
      </NavContainer>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
  position: relative;
  width: 100%;
`;
const NavContainer = styled(Container)`
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

const Links = styled.ul`
  align-items: center;
  display: none;
  list-style: none;
  margin: 0;

  @media ${media.md} {
    display: flex;
  }

  li {
    margin: 0;
    display: block;
  }

  a {
    font-size: 16px;
    margin: 0.25rem 0.75rem;
  }
`;
