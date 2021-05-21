import React from 'react';
import styled from "styled-components";

const QuoteText = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 43.2px;
  padding: 1rem 1rem 1rem 3rem;
  @media screen and (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.2rem;
  }
`
const Container = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  height: 300px;
  border-left: 5px solid #F7DF94;
   @media screen and (max-width: 600px) {
    width: 80%;
   }
`

const Quote = ({text}) => {
    return (
        <Container>
            <QuoteText>{text}</QuoteText>
        </Container>
    );
};

export default Quote;