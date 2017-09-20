/*
  MyReads: Constants.js
  By Chris Leung

  Description:
  Contains all constants for the MyReads application

  Constants:
    SHELVES: <Object Array> Contains information about all bookshelves in our
    application. To add a new bookshelf, add a new object to this array with the
    following properties:
      id: <String> The bookshelf identifier
      name: <String> The bookshelf title/name
      disabled: <boolean> Disable/enable the shelf when displaying it as an
      option in a list of possible shelves to move a book to.
*/

export const NO_BOOK_COVER_DEFAULT_IMAGE_URL = "http://via.placeholder.com/128x193?text=No%20Cover"

export const SHELVES =
  [
    { // First shelf acts as a label for the other options, so it's disabled
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
  }
]
