import React from 'react'
import Book from './Book'

const BookShelf = (props) => {
  const numBooks = props.books ? props.books.length : 0
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title} ({numBooks})</h2>
      <div className="bookshelf-books">
        { numBooks > 0 &&
          (
            <ol className="books-grid">
              { props.books.map(book => (
                <Book handleChange={props.handleChange} book={book} key={book.id} />
              ))}
            </ol>
          )
        }
      </div>
    </div>
  )
};

export default BookShelf
