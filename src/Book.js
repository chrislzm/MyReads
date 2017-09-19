/*
  MyReads: Book.js
  By Chris Leung

  This component displays a single book along with its title and author. It
  also provides a control that allows user to move the book to a different
  shelf. It will select the book's current shelf by default.

  Requires two properties:
    book: Book object to display.
    handleChange: Change handler for moving the book to a new shelf. See app.js
    for more information.
*/

import React from 'react'

// Stores shelf options to display to the user
const shelves = [
  { //  First shelf acts as a label for the other options so it's disabled
  id: "move",
  name: "Move to...",
  disabled: true
},
{
  id: "currentlyReading",
  name: "Currently Reading",
  disabled: false
},
{
  id: "wantToRead",
  name: "Want to Read",
  disabled: false
},
{
  id: "read",
  name: "Read",
  disabled: false
},
{
  id: "none",
  name: "None",
  disabled: false
},
]

// Generates an author string from authors array (there may be zero to multiple authors)
const createAuthorList = (authors) => {
  if(!authors) return ''
  let authorList
  for(const author of authors) {
    if(!authorList) {
      authorList = author
    } else {
      authorList = `${authorList}, ${author}`
    }
  }
  return authorList
}

const Book = (props) => {
  const {book,handleChange} = props
  const authors = createAuthorList(book.authors)
  const imageUrl = book.imageLinks ? `url(${book.imageLinks.thumbnail})` : "none"
  const shelf = book.shelf ? book.shelf : "none"
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: imageUrl
            }}>
          </div>
          <div className="book-shelf-changer">
            <select
              value={ shelf }
              onChange={ (event) => handleChange(book,event.target.value)}>
              {shelves.map(shelf => (
                <option
                  value={shelf.id}
                  disabled={shelf.disabled}
                  key={shelf.id}>
                  {shelf.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="book-title">{ book.title }</div>
        <div className="book-authors">{ authors }</div>
      </div>
    </li>
  )
};

export default Book
