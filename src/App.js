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
    BooksAPI.update(bookToUpdate,newShelf).then(() => {
      for(let book of this.state.books) {
        if(book.id === bookToUpdate.id) {
          book.shelf = newShelf
          this.forceUpdate()
          break
        }
      }
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
