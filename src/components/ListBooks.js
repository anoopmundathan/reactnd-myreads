import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Title from './Title'
import BookShelf from './BookShelf'
import AddBook from './AddBook'

class ListBooks extends Component {
    render() {
        return(
            <div className="list-books">
                <Title />
                <BookShelf books={this.props.books}/>
                <AddBook />
            </div>
        )
    }
}

ListBooks.propTypes = {
    books: PropTypes.array.isRequired
}

export default ListBooks