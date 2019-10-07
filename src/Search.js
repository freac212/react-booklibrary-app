import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { search, getAll } from './BooksAPI';
import Book from "./Book"

class Search extends Component {
  state = {
    searchBar: "",
    searchResults: []
  }

  reloadSearchPage = () => {
    this.getQueryResults(this.state.searchBar);
  }

  updateSearch = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // Dont search too quickly! xD Didn't get debounce to work unfortunately.

    this.getQueryResults(e.target.value);
  }

  getQueryResults = (queryString) => {
    if (queryString !== "") {
      // Search the string, parse the response
      search(queryString).then(this.parseResults);
    } else {
      // Skip parsing and display nothing.
      this.displayResults([]);
    }
  }

  parseResults = (queryResponse) => {
    // Parse the query results to display.
    // If error or undefined somehow, display empty array.
    // Else filter out books in our collection, then display.
    // If no shelf value present, shelfs default is set to none.
    // If there's no image for the book, omit the result.
    if (queryResponse === undefined || queryResponse.error) {
      this.displayResults([]);
    } else {
      getAll()
        .then((getAllResponse) => {
          return queryResponse.filter((book) => book.imageLinks !== undefined).map(book => {
            let returnVal;
            getAllResponse.forEach(bookOfResponse => {
              if (book.id === bookOfResponse.id) {
                returnVal = bookOfResponse;
              }
            });

            // Converting the results to objects with shelves if they don't have them already
            if (!returnVal) {
              return { ...book, shelf: "none" };
            }
            return returnVal;
          });
        }).then((filteredResponse) => {
          this.displayResults(filteredResponse);
        })
    }
  }

  displayResults = (queryResponse) => {
    // Sets the search results array to the query response, which is then rendered later
    this.setState(() => {
      return { searchResults: queryResponse };
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" name="searchBar" placeholder="Search by title or author" value={this.state.searchBarVal} onChange={this.updateSearch} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.searchResults.map((book) => {
                return <Book
                  book={book}
                  key={book.id}
                  updateBookShelf={this.props.updateBookShelf}
                  reloadSearchPage={this.reloadSearchPage}
                />
              })
            }
            {this.state.searchResults.length === 0 && this.state.searchBar.length > 0 &&
              <h2>No results</h2>
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search