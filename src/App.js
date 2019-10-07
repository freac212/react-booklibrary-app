import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Search from './Search';
import BookShelf from './BookShelf';
import { update, getAll } from './BooksAPI';

class BooksApp extends Component {
  state = {
    localBooksArray: [],
  }

  updateBookShelf = (book, shelfValue) => {
    update(book, shelfValue)
      .then(getAll)
      .then(this.loadUpdatedShelves);
  }

  loadUpdatedShelves = (queryResponseArray) => {
    this.setState(() => {
      return { localBooksArray: queryResponseArray };
    })
  }

  render() {
    return (
      <div className="app">
        {/* Search Page */}
        <Route exact path="/search" render={() => {
          return (
            <Search
              localBooksArray={this.state.localBooksArray}
              loadUpdatedShelves={this.loadUpdatedShelves}
              updateBookShelf={this.updateBookShelf}
            />
          )
        }}>
        </Route>

        {/* Your Book Collection Page */}
        <Route exact path="/" render={() => {
          return (
            <div className="list-books">
              <BookShelf
                localBooksArray={this.state.localBooksArray}
                loadUpdatedShelves={this.loadUpdatedShelves}
                updateBookShelf={this.updateBookShelf}
              />
            </div>
          )
        }}>
        </Route>
      </div>
    )
  }
}

export default BooksApp
