import React from 'react';
import RandomQuote from "./RandomQuote";
import { v4 as uuidv4 } from 'uuid';


const RandomQuotes = ({data, handleClick}) => {
    return (
        <div>
            {data.map(quote => {
                return (
                    <RandomQuote key={uuidv4()}
                                 quoteText={quote.quoteText}
                                 quoteAuthor={quote.quoteAuthor}
                                 quoteGenre={quote.quoteGenre}
                                 handleClick={handleClick}
                    />
                )
            })}
        </div>
    );
};

export default RandomQuotes;