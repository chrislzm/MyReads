import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {

  state = {
    query: '',
    searchResults: [],
    searching: false
  }

  getBookShelf = (book) => {
    const myBooks = this.props.myBooks
    for(const myBook of myBooks) {
      if(book.id === myBook.id) {
        return myBook.shelf
      }
    }
    return ''
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    if(query.length > 0) {
      this.setState({searching:true})
      BooksAPI.search(query,20).then(searchResults => {
        // Our query may have been updated since we searched
        if(!searchResults.error && this.state.query === query) {
          // If a search result is in our collection, update its shelf
          for(let searchResult of searchResults) {
            const shelf = this.getBookShelf(searchResult)
            if(shelf) {
              searchResult.shelf = shelf
            }
          }
          this.setState({searchResults})
        }
        this.setState({searching:false})
      })
    } else {
      // Clear search results for empty queries
      this.setState({ searchResults: []})
    }
  }


  render() {
    const {query, searching, searchResults} = this.state;

    const searchResultsTitle = `'${query}' - Search Results`
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
          <div style={{height: "1em"}}>{ searching && ("Searching...")}</div>
          { query.length > 0 && (searchResults.length > 0 || !searching) &&
            (
              <BookShelf
                title={searchResultsTitle}
                books={searchResults}
                handleChange={this.props.handleChange}
              />
            )
          }
        </div>
      </div>
    )
  }
};

export default SearchBooks
