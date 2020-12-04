import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import Container from "@atoms/container";
import { media } from "@utils/media";
import Button from "@atoms/button";

const SectionHeader = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <Header grid>
      <Image>
        <Img fadeIn={false} fluid={data.file.childImageSharp.fluid} />
      </Image>
      <Content>
        <h2>Everybody eats, period.</h2>
        <p>
          ICT community fridge project is rooted in mutual aid & justice. The
          goal is to provide free food to every member of the Wichita community,
          period.
        </p>
        <Button href="https://cash.app/$ictfreefood">Donate</Button>
      </Content>
    </Header>
  );
};

export default SectionHeader;

const Header = styled(Container)`
  align-items: center;
  grid-template-columns: 1fr;
  grid-gap: 0;

  @media ${media.lg} {
    grid-template-columns: 40fr 60fr;
  }
`;

const Image = styled.div`
  width: 100%;
  padding: 10%;
  height: 100%;

  .gatsby-image-wrapper {
    height: 100%;
    max-height: 60vh;
    width: 100%;

    @media ${media.lg} {
      max-height: none;
    }

    img {
      object-position: top center !important;
    }
  }
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: 4rem 2rem;

  p {
    margin-bottom: 2rem;
  }

  @media ${media.xs} {
    padding: 1.5rem 2rem;
  }
`;
