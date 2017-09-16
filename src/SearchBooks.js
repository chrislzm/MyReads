import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {

  state = {
    query: '',
    books: [],
    searching: false
  }

  moveBookHandler = (movedBook,newShelf) => {
    this.props.handleChange(movedBook,newShelf)
    for(let book of this.state.books) {
      if(book.id === movedBook.id) {
        book.shelf = newShelf
        this.forceUpdate()
        break
      }
    }
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    if(query.length > 0) {
      this.setState({searching:true})
      BooksAPI.search(query,20).then(books => {
        // Our query may have been updated since we searched
        if(!books.error && this.state.query === query) {
          this.setState({books})
        }
        this.setState({searching:false})
      })
    } else {
      // Clear books from results for empty queries
      this.setState({ books: []})
    }
  }

  render() {
    const {query, searching, books} = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          { searching && (<div>Searching...</div>)}
          { !searching && query.length > 0 &&
            (
              <BookShelf handleChange={this.moveBookHandler} books={books} title="Search Results" />
            )
          }
        </div>
      </div>
    )
  }
};

export default SearchBooks
