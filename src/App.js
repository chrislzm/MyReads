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

  updateBook = (bookToUpdate,newShelf) => {
    let newBook = true;
    // If the book is already in our local state, update its shelf
    BooksAPI.update(bookToUpdate,newShelf).then(() => {
      for(let book of this.state.books) {
        if(book.id === bookToUpdate.id) {
          book.shelf = newShelf
          newBook = false
          this.forceUpdate()
          break
        }
      }
      if(newBook) {
        bookToUpdate.shelf = newShelf
        this.setState((prevState) => ({
          books: [...prevState.books,bookToUpdate]
        }))
      }
      console.log("Updated main page.")
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() =>(
          <ListBooks handleChange={this.updateBook} books={this.state.books}/>
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks handleChange={this.updateBook} books={this.state.books}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
