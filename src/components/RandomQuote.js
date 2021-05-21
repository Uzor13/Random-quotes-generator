import React from 'react';
import styled from "styled-components";
import Quote from "./Quote";
import Button from "./Button";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-top: 4rem;
`


const RandomQuote = ({quoteAuthor, quoteGenre, quoteText, handleClick}) => {
    return (
            <Wrapper>
                <Quote text={quoteText}/>
                <Button handleClick={handleClick} author={quoteAuthor} genre={quoteGenre}/>
            </Wrapper>
    );
};

export default RandomQuote;