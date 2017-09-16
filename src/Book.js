import React from 'react'

const shelves = [
  { //  This first shelf is a label for the select element, so it's disabled
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

const updateBookHandleChange = (book,shelf,handleChange) => {
  book.shelf = shelf
  handleChange(book,shelf)
}

const Book = (props) => {
  const {book,handleChange} = props
  let shelf = book.shelf ? book.shelf : "none"
  return(
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: props.book.imageLinks ? `url(${props.book.imageLinks.thumbnail})` : ''}}></div>
          <div className="book-shelf-changer">
            <select
              value={ shelf }
              onChange={ (event) => updateBookHandleChange(book,event.target.value,handleChange)}>
              { shelves.map(shelf => (
                <option value={shelf.id} disabled={shelf.disabled} key={shelf.id}>{shelf.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="book-title">{ props.book.title }</div>
        <div className="book-authors">{ props.book.authors && (props.book.authors[0]) }</div>
      </div>
    </li>
  )};

  export default Book
