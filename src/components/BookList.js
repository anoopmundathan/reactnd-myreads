import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'

import Title from './Title'
import BookShelf from './BookShelf'
import AddBook from './AddBook'

class BookList extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({
                books: books
            })
        })
    }

    render() {
        return(
            <div className="list-books">
                <Title />
                <BookShelf books={this.state.books}/> 
                <AddBook />
            </div>
        )
    }
}

export default BookList