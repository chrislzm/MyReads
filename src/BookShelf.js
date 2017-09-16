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
                <Book handleChange={handleChange} book={book} key={book.id} />
              ))}
            </ol>
          )
        }
      </div>
    </div>
  )
};

export default BookShelf
