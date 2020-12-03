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
          answer="The ICT Community Fridge Project aims to provide free access to nutritious food in 67214 and beyond. The fridge gives access to much needed produce such as fruits, vegetables, eggs, milk products, lunch meats, and bread for families and individuals in Wichita."
        />
        <FaqQuestion
          question="Who can take advantage of the program?"
          answer="Everyone. Everyone eats. No IDs, no tax papers, take whatever you need. This fridge is for students, families, individuals, regardless of income. Take an apple for a snack, or come get free groceries. The fridge is for us, by us."
        />
        <FaqQuestion
          question="How can I help?"
          answer="You can donate to our cashapp, $ictfreefood. You can donate food, drink, and resources directly to our locations. You can spread the word about the fridge, tell your coworkers, friends, and family."
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
