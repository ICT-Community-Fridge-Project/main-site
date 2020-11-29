import React from "react";
import styled from "styled-components";
import Container from "@atoms/container";

const GOOGLE_PLACES_API_KEY = "AIzaSyBrAHX3xbf9wx_C4dVqbZ4YQZIaZ-HUMF4";

const locations = [
  {
    name: "Dead Center Vintage",
    mapUrl: `https://www.google.com/maps/embed/v1/search?q=Dead%20Center%20Vintage%2C%20East%20Douglas%20Avenue%2C%20Wichita%2C%20KS%2C%20USA&key=${GOOGLE_PLACES_API_KEY}`,
    websiteUrl: "https://www.deadcentervintage.com/",
  },
];

const Maps = () => {
  return (
    <>
      {locations.map(({ name, mapUrl, websiteUrl }) => {
        return (
          <Figure key={mapUrl}>
            <LocationMap style={{ border: 0 }} src={mapUrl} />
            <FigureCaption>
              <a href={websiteUrl}>{name}</a>
            </FigureCaption>
          </Figure>
        );
      })}
    </>
  );
};

const SectionLocation = () => {
  return (
    <LocationsContainer content="true" contentTop>
      <section id="locations">
        <h1>Locations</h1>
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
    margin-bottom: 2rem;
  }
`;

const LocationMap = styled.iframe`
  width: '100%
`;

const FigureCaption = styled.figcaption``;

const Figure = styled(Container)``;
