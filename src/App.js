import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'

import './App.css'

class BooksApp extends Component {

    state = {
        books: [],
        loaded: false
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({
                books: books,
                loaded: true
            })
        })
    }

    render() {
        return(
            <div className="app">
                {this.state.loaded ?
                 (<div>
                    <Route exact path="/" render={() => (<ListBooks books={this.state.books} />)} />
                    <Route path="/search" component={SearchBooks} />
                  </div>)
                 : (<h1>Loading...</h1>)
                }
            </div>
        );
    }
}

export default BooksApp