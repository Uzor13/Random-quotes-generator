import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Author = styled.h2`
  color: #4F4F4F;
  font-size: 1.5rem;
  margin-top: 1rem;
  :hover {
  color: #f2f2f2;
  }
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`

const QuoteButton = styled.button`
  border: 0;
  width: 50%;
  margin-top: 4rem;
  background: transparent;
  transition: all 200ms ease-in;
  padding: 1rem;
  :hover {
    background: #333333;
    cursor: pointer;
    color: #F2F2F2;
    }
    @media screen and (max-width: 600px) {
    width: 80%;
  }
  
`
const Genre = styled.p`
  color: #828282;
  font-size: .9rem;
`

const Button = ({author, handleClick, genre}) => {
    return (
        <>
            <QuoteButton onClick={(e) => handleClick(e)}>
                <Link to='/author'>
                    <Author className='authorButton'>{author}</Author>
                    <Genre>{genre}</Genre>
                </Link>

            </QuoteButton>
        </>
    );
};

export default Button;