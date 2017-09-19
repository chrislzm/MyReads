/*
  MyReads: SearchBooks.js
  By Chris Leung

  Descriptions:
  React component that allows a user to search for books and move them to
  bookshelves. The search results are provided by Udacity's backend server via
  the BooksAPI library.

  Props:
    myBooks: <Array> All book objects in our collection
    handleChange: <Function> Change handler for moving the book to a new shelf.
    Passes this to each Book component, allowing the user to move the book to a
    new shelf. See app.js for more information.
*/

import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {

  state = {
    searchQuery: '',
    searchResults: [],
    searchComplete: true
  }

  // Takes a book object and returns its shelf if it exists in our collection.
  // Returns empty string otherwise.
  getBookShelf = (book) => {
    const myBooks = this.props.myBooks
    for(const myBook of myBooks) {
      if(book.id === myBook.id) {
        return myBook.shelf
      }
    }
    return ''
  }

  search = (newSearchQuery) => {
    this.setState({ searchQuery: newSearchQuery })
    if(newSearchQuery.length > 0) {
      this.setState({searchComplete:false})
      BooksAPI.search(newSearchQuery,20).then(searchResults => {
        // Only continue if no error AND the current query still matches the
        // one stored in state. The user may have typed a new search query while
        // we were waiting for these results to return, in which case we do not
        // need to display these results.
        if(searchResults.error) {
          // Clear search screen for queries that return an error
          this.setState({ searchResults: []})
        } else if(this.state.searchQuery === newSearchQuery) {
          for(let searchResult of searchResults) {
            // If the book exists in our collection, display its shelf
            const shelf = this.getBookShelf(searchResult)
            if(shelf) {
              searchResult.shelf = shelf
            }
          }
          this.setState({searchResults})
        }
        this.setState({searchComplete:true})
      })
    } else {
      // Clear search screen for empty queries
      this.setState({ searchResults: []})
    }
  }

  render() {
    const {searchQuery, searchComplete, searchResults} = this.state;

    const searchResultsTitle = `'${searchQuery}' - Search Results`
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={searchQuery}
              onChange={(event) => this.search(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <div style={{height: "1em"}}>{ !searchComplete && ("Searching...")}</div>
          { // Only display results if we have a query AND we have results to
            // show OR our search is complete and has turned up no results.
            searchQuery.length > 0 && (searchComplete || searchResults.length > 0) &&
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
