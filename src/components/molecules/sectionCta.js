import React from "react";
import styled from "styled-components";
import Button from "@atoms/button";
import Container from "@atoms/container";

const SectionCTA = () => {
  return (
    <CTAContainer content="true" contentTop>
      <h1>We need your support to help those in need.</h1>
      <Buttons>
        <Button href="https://cash.app/$ictfreefood">Donate</Button>
      </Buttons>
    </CTAContainer>
  );
};

export default SectionCTA;

const CTAContainer = styled(Container)`
  align-items: center;
  display: flex;
  background-color: ${(props) => props.theme.colors.background};
  flex-direction: column;
  justify-content: center;
  position: relative;
  text-align: center;

  h1 {
    margin-bottom: 2rem;
  }
`;

const Buttons = styled.div`
  align-items: center;
  display: flex;

  a {
    margin: 1rem 1rem;
  }
`;
