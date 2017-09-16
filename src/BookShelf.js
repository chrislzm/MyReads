import React from 'react'
import Book from './Book'

const BookShelf = (props) => (
  <div>
    { props.books && props.books.length > 0 && (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        { props.books.map(book => (
          <Book handleChange={props.handleChange} book={book} key={book.id} />
        ))}
      </ol>
    </div>
  </div>
  )}
</div>
);

export default BookShelf
