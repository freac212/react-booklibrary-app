import React, { Component } from 'react';
import { getAll } from './BooksAPI';
import { Link } from 'react-router-dom';
import Book from './Book';

class BookShelf extends Component {

  componentDidMount() {
    // Initial load
    getAll().then(this.props.loadUpdatedShelves);
  }

  render() {
    return (
      <div>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {/* If there's no books containing currentlyReading; hide list */}
            {this.props.localBooksArray.filter((e) => e.shelf === "currentlyReading").length > 0 &&
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {/* Book component: map currently reading array */}
                    {this.props.localBooksArray.filter((e) => e.shelf === "currentlyReading").map((bookObject) => {
                      return <Book
                        book={bookObject}
                        key={bookObject.id}
                        updateBookShelf={this.props.updateBookShelf}
                      />
                    })}
                  </ol>
                </div>
              </div>
            }
            {/* If there's no books containing wantToRead; hide list */}
            {this.props.localBooksArray.filter((e) => e.shelf === "wantToRead").length > 0 &&
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {/* Book component: map want to read array */}
                    {this.props.localBooksArray.filter((e) => e.shelf === "wantToRead").map((bookObject) => {
                      return <Book
                        book={bookObject}
                        key={bookObject.id}
                        updateBookShelf={this.props.updateBookShelf}
                      />
                    })}
                  </ol>
                </div>
              </div>
            }
            {/* If there's no books containing read; hide list */}
            {this.props.localBooksArray.filter((e) => e.shelf === "read").length > 0 &&
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {/* Book component: map read array*/}
                    {this.props.localBooksArray.filter((e) => e.shelf === "read").map((bookObject) => {
                      return <Book
                        book={bookObject}
                        key={bookObject.id}
                        updateBookShelf={this.props.updateBookShelf}
                      />
                    })}
                  </ol>
                </div>
              </div>
            }
            {/* If the localBooksArray is empty; display message to user */}
            {this.props.localBooksArray.length === 0 &&
              <h2>Collection is empty! Add some books from the search page!</h2>
            }
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" className="button">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookShelf