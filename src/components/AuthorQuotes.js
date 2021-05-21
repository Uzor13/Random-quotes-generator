import React from 'react';
import {v4 as uuidv4} from "uuid";
import AuthorQuote from "./AuthorQuote";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Anchor = styled.p`
  color: #333333;
  text-decoration: none;
`


const AuthorQuotes = ({quotes}) => {
    return (
        <div>
            <Link to='/'>
                <Anchor>Back to Home <i className='fas fa-arrow-left'/></Anchor>
            </Link>
            {quotes.map((quote) => {
                return (
                    <AuthorQuote
                        key={uuidv4()}
                        quoteAuthor={quote.quoteAuthor}
                        quoteText={quote.quoteText}
                    />
                )
            })}
        </div>
    );
};

export default AuthorQuotes;