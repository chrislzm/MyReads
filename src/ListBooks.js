import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

const ListBooks = (props) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <div>
          <BookShelf handleChange={props.handleChange} books={props.books.filter(book => book.shelf === "currentlyReading")} title="Currently Reading" />
          <BookShelf handleChange={props.handleChange} books={props.books.filter(book => book.shelf === "wantToRead")} title="Want to Read" />
          <BookShelf handleChange={props.handleChange} books={props.books.filter(book => book.shelf === "read")} title="Read" />
        </div>
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
);

export default ListBooks
