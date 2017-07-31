import React, { Component } from 'react'

import Title from './Title'
import BookShelf from './BookShelf'
import AddBook from './AddBook'

class BookList extends Component {
    render() {
        return(
            <div className="list-books">
                <Title />
                <BookShelf /> 
                <AddBook />
            </div>
        )
    }
}

export default BookList