import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class BookSearch extends Component {

    state = {
      books: [],
      currentBooks: []
    }

    componentDidMount() {
      BooksAPI.getAll()
        .then(books => {
          // Get rid of all other properties except book id
          const booksId = books.map(book => ({ id: book.id,shelf: book.shelf }))
          this.setState({ currentBooks: booksId })
        })
    }

    onSearch = (event) => {
      const value = event.target.value
      
      if(value) {
        BooksAPI.search(value).then(books => {
          if(!books || books.hasOwnProperty('error')) {
            this.setState({ books: [] })
          } else {
              this.setState({ books: books })
          }  
        })
      } else {
        this.setState( { books: [] })
      }
    }

    onShelfChange = (book, shelf) => {
      const newBooks = []
      BooksAPI.update(book, shelf)
        .then(books => {
          Object.keys(books)
            .forEach(shelf => {
              return books[shelf].map(id => ({ id: id, shelf: shelf}))
              .forEach(book => {
                newBooks.push(book)
              })
            })
            return newBooks
        })
        .then(newBooks => {
          this.setState({ currentBooks: newBooks })
        })
    }
 
    render() {
        const { books, currentBooks } = this.state
        let booksList

        if (books.length > 0) {
          booksList = books.map((book, index) => {
            currentBooks.forEach(cbook => {
              if(cbook.id === book.id) {
                book.shelf = cbook.shelf
              }
            })

            return (
              <li key={index}>
                <Book
                  onShelfChange={this.onShelfChange}
                  book={book} />
              </li>
            ) 
          })
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