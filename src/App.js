import './App.css';
import Header from './components/Header'
import React, {useEffect, useState} from "react";
import axios from 'axios';
import RandomQuotes from "./components/RandomQuotes";
import AuthorQuotes from "./components/AuthorQuotes";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {

    const [quotes, setQuotes] = useState([]);
    const [author, setAuthor] = useState('');
    const [allQuotes, setAllQuotes] = useState([])

    const handleMenuItemClick = (event) => {
        setAuthor(decodeURI(event.target.textContent));
    };

    const getRandomQuotes = () => {
        axios.get('https://quote-garden.herokuapp.com/api/v3/quotes/random')
            .then((res) => {
                setQuotes(res.data.data)
            }).catch(err => console.log(err.message))
    }

    useEffect(() => {
        getRandomQuotes();
    }, []);


    const getAuthorQuotes = () => {
        axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes/?author=${author}`)
            .then((res) => {
                setAllQuotes(res.data.data)
                console.log(res.data.data)
            }).catch(err => console.log(err.message))
    }
    useEffect(() => {
        getAuthorQuotes();
    }, [author])


    return (
        <Router>
            <div className="App">
                <Header getRandom={getRandomQuotes}/>
                <Route path='/' exact component={RandomQuotes}>
                    <RandomQuotes data={quotes} handleClick={handleMenuItemClick}/>
                </Route>
                <Route path='/author' component={AuthorQuotes}>
                    <AuthorQuotes quotes={allQuotes}/>
                </Route>
            </div>
            <Switch>


            </Switch>
        </Router>
    );
}

export default App;
