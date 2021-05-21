import React from 'react';
import styled from "styled-components";


const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  margin-top: 2rem;
`

const Author = styled.h2`
  color: #4F4F4F;
  font-size: 1.5rem;
  margin-top: 1rem;
  padding-left: 1rem;
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    line-height: 1.2rem;
  }
`
const Container = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  border-left: 5px solid #F7DF94;
  @media screen and (max-width: 600px) {
    width: 80%;
   }
`
const Quote = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 43.2px;
  padding: 1rem 1rem 1rem 3rem;
  @media screen and (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.2rem;
  }
`


const AuthorQuote = ({quoteAuthor, quoteText}) => {
    return (
        <Wrapper>
            <Container>
                <Author>{quoteAuthor}</Author>
                <Quote>{quoteText}</Quote>
            </Container>
        </Wrapper>
    );
};

export default AuthorQuote;