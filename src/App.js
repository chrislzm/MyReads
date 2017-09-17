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

  handleChange = (bookToUpdate,newShelf) => {
    BooksAPI.update(bookToUpdate,newShelf).then(() => {
      // Remove the book from our local state if it's in there already
      this.setState(prevState => ({
        books: prevState.books.filter(book => book.id !== bookToUpdate.id)
      }))
      // Add the updated book back in
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
            books={this.state.books}
            handleChange={this.handleChange}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
