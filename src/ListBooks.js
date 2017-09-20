/*
  MyReads: ListBooks.js
  By Chris Leung

  Description:
  React component that displays all bookselves in our collection.

  Props:
    books: <Array> Book objects on this bookshelf
    title: <String> The name of this bookshelf
    handleChange: <Function> Change handler for moving the book to a new shelf.
    Passes this to the BookShelf component, which then passes it to the Book
    component, allowing the user to move the book to a new shelf. See app.js
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
                  key={shelf.id}
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
