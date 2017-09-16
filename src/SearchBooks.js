import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {

  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    if(query.length > 0) {
      BooksAPI.search(query,20).then(books => this.setState({books}))
      BooksAPI.search(query,20).then(books => console.log(books))
    } else {
      this.setState({ books: []})
    }
  }

  render() {
    let numResults = this.state.books ? this.state.books.length : 0
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          { this.state.query && (<div>Your search returned { numResults} result(s)</div>)}
          <BookShelf handleChange={this.props.handleChange} books={this.state.books} title="Search Results" />
        </div>
      </div>
    )
  }
};

export default SearchBooks
