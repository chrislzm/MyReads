/*
  MyReads: ListBooks.js
  By Chris Leung

  This component displays all bookselves in our collection.

  Requires three properties:
    books: Array of book objects on this bookshelf
    title: String that contains the name of this bookshelf
    handleChange: Change handler for moving the book to a new shelf. See app.js
    for more information.
*/

import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as Constants from './Constants'

const ListBooks = (props) => {
  const {books,handleChange} = props
  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div>
            {
              Constants.SHELVES.filter(shelf => !shelf.disabled && shelf.id !== "none").map(shelf => (
                <BookShelf
                  title={shelf.name}
                  books={books.filter(book => book.shelf === shelf.id)}
                  handleChange={handleChange}
                />
              ))
            }
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
};

export default ListBooks
