import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {

  state = {
    query: '',
    results: 0,
    books: [],
    searching: false
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    if(query.length > 0) {
      this.setState({searching:true})
      BooksAPI.search(query,20).then(books => {
        // Our query may have been updated since we searched
        if(!books.error && this.state.query === query) {
          this.setState({books, results: books.length})
        }
        this.setState({searching:false})
      })
    } else {
      // Clear books from results for empty queries
      this.setState({ books: [], results: 0})
    }
  }

  render() {
    let numResults = this.state.books.length ? this.state.books.length : 0
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
          { this.state.searching && (<div>Searching...</div>)}
          { !this.state.searching && this.state.query.length > 0 && (<div>Your search returned { numResults} result(s)</div>)}
          <BookShelf handleChange={this.props.handleChange} books={this.state.books} title="Search Results" />
        </div>
      </div>
    )
  }
};

export default SearchBooks
