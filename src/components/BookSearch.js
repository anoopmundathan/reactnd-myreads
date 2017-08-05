import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class BookSearch extends Component {

    state = {
      books: []
    }

    onSearch = (event) => {
      const value = event.target.value
      BooksAPI.search(value).then(books => {
        if(!books || books.hasOwnProperty('error')) {
          this.setState({ books: [] })
        } else {
            this.setState({ books: books })
        }  
      })
    }

    onShelfChange = (book, shelf) => {
      BooksAPI.update(book, shelf)
    }
    
    render() {
        const { books } = this.state

        let booksList

        if (books.length > 0) {
          booksList = books.map((book, index) => (
                        <li key={index}>
                          <Book
                            onShelfChange={this.onShelfChange}
                            book={book} />
                        </li>))
        } else {
          booksList = null
        }

        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                  type="text" 
                  onChange={this.onSearch}
                  placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
               {booksList}
              </ol>
            </div>
          </div>
        )
    }
}

export default BookSearch