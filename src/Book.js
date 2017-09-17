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

const createAuthorList = (authors) => {
  if(!authors) return ''
  let authorList
  for(const author of authors) {
    console.log(author)
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
  let shelf = book.shelf ? book.shelf : "none"
  let authors = createAuthorList(book.authors)
  let thumbnailUrl = book.imageLinks ? `url(${book.imageLinks.thumbnail})` : "none"
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: thumbnailUrl
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
                  key={shelf.id}>{shelf.name}>
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="book-title">{ book.title }</div>
        <div className="book-authors">{ authors }</div>
      </div>
    </li>
  )};

  export default Book
