/*
  MyReads: BookShelf.js
  By Chris Leung

  React component that displays a bookshelf name, number of books it contains,
  and each book on the bookshelf (using the Book component). Passes a change
  handler from App.js/ListBooks.js to each Book component that allows the user
  to move the book to a new shelf.

  Props:
    books: <Array> Book objects on this bookshelf
    title: <String> The name of this bookshelf
    handleChange: <Function> Change handler for moving the book to a new shelf. See app.js
    for more information.
*/

import React from 'react'
import Book from './Book'

const BookShelf = (props) => {
  const {books,title,handleChange} = props
  const numBooks = books ? books.length : 0
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title} ({numBooks})</h2>
      <div className="bookshelf-books">
        { numBooks > 0 &&
          (
            <ol className="books-grid">
              { books.map(book => (
                <Book
                  book={book}
                  handleChange={handleChange}
                  key={book.id} />
              ))}
            </ol>
          )
        }
      </div>
    </div>
  )
};

export default BookShelf
