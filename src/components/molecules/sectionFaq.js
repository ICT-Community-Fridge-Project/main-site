import React from "react";
import styled from "styled-components";
import Container from "@atoms/container";
import FaqQuestion from "@atoms/faqQuestion";
import { media } from "@utils/media";

const SectionFAQ = () => {
  return (
    <FaqContainer content="true" contentTop grid id="about-us">
      <Questions>
        <FaqQuestion
          question="What is the ICT Community Fridge Project?"
          answer="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
        />
        <FaqQuestion
          question="Who can take advantage of the program?"
          answer=" Vivamus ut fringilla enim. Quisque vel justo ut augue volutpat ultricies non ut nulla. Maecenas sagittis ipsum non rhoncus pulvinar. Phasellus tristique pharetra nisi sollicitudin cursus."
        />
        <FaqQuestion
          question="How can I help?"
          answer="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam pellentesque orci odio, et tristique mauris bibendum et. Aliquam tempor diam eros, at tincidunt mi vulputate ac."
        />
      </Questions>
    </FaqContainer>
  );
};

export default SectionFAQ;

const FaqContainer = styled(Container)`
  align-items: start;
  background-color: ${(props) => props.theme.colors.background};
  grid-template-columns: 1fr;

  @media ${media.lg} {
  }
`;
const Questions = styled.div`
  grid-row: 2;

  h1 {
    margin-bottom: 2.5rem;
  }

  @media ${media.lg} {
    grid-row: 1;
  }
`;
