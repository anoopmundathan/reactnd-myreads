import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import Shelf from './Shelf'

class BookShelf extends Component {

    render() {
        
        let currentList = [];
        let wantList = [];
        let readList = [];

        this.props.books.map(book => {
            switch(book.shelf) {
                case 'currentlyReading':
                    currentList.push(book)
                    break
                case 'wantToRead':
                    wantList.push(book)
                    break
                case 'read':
                    readList.push(book)
                    break
            }
        })

        const shelfList = [
            {
                name: 'Currently Reading',
                list : currentList
            },
            {
                name: 'Want To Read',
                list : wantList
            },
            {
                name: 'Read',
                list : readList
            }
        ]

        return(
            <div className="list-books-content">
                <div>
                    {shelfList.map(shelf => (
                        <Shelf 
                            title={shelf.name}
                            list={shelf.list} />
                    ))}
                </div>
            </div>
        )
    }
}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired
}

export default BookShelf