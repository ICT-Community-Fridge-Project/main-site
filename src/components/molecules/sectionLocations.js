import React from "react";
import styled from "styled-components";
import Container from "@atoms/container";
import { media } from "@utils/media";

const Maps = () => {
  return (
    <>
      <Figure>
        <FigureCaption>
          <a href="https://www.deadcentervintage.com/">Dead Center Vintage</a>
        </FigureCaption>
        <LocationMap
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=626%20E%20Douglas%20Ave,%20Wichita,%20KS%2067202+(Dead%20Center%20Vintage)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </Figure>
      <Figure>
        <FigureCaption>
          <a href="https://www.facebook.com/CHDINC3/">CHD Boxing Club</a>
        </FigureCaption>
        <LocationMap
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2505%20E%209th%20St%20N,%20Wichita,%20KS%2067214+(CHD%20Boxing%20Company)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </Figure>
    </>
  );
};

const SectionLocation = () => {
  return (
    <LocationsContainer content="true" contentTop>
      <section id="locations">
        <LocationsHeader>Locations</LocationsHeader>
        <Maps />
      </section>
    </LocationsContainer>
  );
};

export default SectionLocation;

const LocationsContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  text-align: center;

  h1 {
    margin-bottom: 4rem;
  }
`;

const LocationsHeader = styled.h1`
  margin-bottom: 2rem;
`;

const LocationMap = styled.iframe`
  width: 50vw;
  height: 800px;

  @media ${media.xs} {
    height: 500px;
    width: 80vw;
  }
`;

const FigureCaption = styled.figcaption`
  margin-bottom: 2rem;
`;

const Figure = styled(Container)``;
