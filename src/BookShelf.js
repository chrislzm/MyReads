import React from 'react'
import Book from './Book'

const BookShelf = (props) => {
  const {title,books,handleChange} = props
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
