import React from "react";
import styled from "styled-components";

const FaqQuestion = ({ question, answer, index }) => (
  <FAQ>
    <Content>
      <h2>{question}</h2>
      <p>{answer}</p>
    </Content>
  </FAQ>
);

export default FaqQuestion;

const FAQ = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  padding: 1rem;

  &:last-of-type {
    padding-bottom: 0;
  }
`;

const Content = styled.div`
  flex-basis: auto;
  margin-right: 1.5rem;
  h2 {
    margin-bottom: 0.5rem;
  }
`;
