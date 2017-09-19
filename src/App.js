/*
  MyReads: App.js
  By Chris Leung

  Description:
  React component that controls the main page of the application. It maintains
  state for all books in our collection. Provides an update handler
  ("handleChange") to child components for moving books to different shelves or
  our of our book collection.  Uses React Router to dislay either our
  bookshelves or the search page based on the current URL.
*/

import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({books}))
  }

  // Handles moving a book (bookToUpdate) to a new shelf (newShelf)
  handleChange = (bookToUpdate,newShelf) => {
    BooksAPI.update(bookToUpdate,newShelf).then(() => {
      // Remove the book from state -- if it's there, it contains the old shelf
      this.setState(prevState => ({
        books: prevState.books.filter(book => book.id !== bookToUpdate.id)
      }))
      // Update state with the updated book
      bookToUpdate.shelf = newShelf
      this.setState(prevState => ({
        books: [...prevState.books,bookToUpdate]
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() =>(
          <ListBooks
            books={this.state.books}
            handleChange={this.handleChange}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks
            myBooks={this.state.books}
            handleChange={this.handleChange}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
