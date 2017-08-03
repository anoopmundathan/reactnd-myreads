import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class BookSearch extends Component {

    state = {
      query: '',
      books: []
    }

    onSearch = (event) => {
      const value = event.target.value
      console.log(value)
      if (value) {
        BooksAPI.search(value).then(books => {
          this.setState({
            books: books
          })
        })
      }
    }
    
    render() {

        const books = this.state.books.map(book => <li><Book book={book}/></li>)
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
                {books}
              </ol>
            </div>
          </div>
        )
    }
}

export default BookSearch