import React, { Component } from 'react';
import CurrentlyReadingIcon from './icons/book-reader-solid.svg';
import WantToReadIcon from './icons/bookmark-solid.svg';
import ReadIcon from './icons/check-solid.svg';
import NoneIcon from './icons/arrow-drop-down.svg';



class Book extends Component {
  getIcon = (shelfValue) => {
    switch (shelfValue) {
      case "currentlyReading":
        return CurrentlyReadingIcon;

      case "wantToRead":
        return WantToReadIcon;

      case "read":
        return ReadIcon;

      default:
        return NoneIcon;
    }
  }

  render() {
    let book = this.props.book;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer" style={{ backgroundImage: `url(${this.getIcon(book.shelf)})` }}>
              <select 
                onChange={(event) => {
                  if(this.props.reloadSearchPage){
                    this.props.reloadSearchPage();
                  }
                  this.props.updateBookShelf(book, event.target.value);
                }} 
                value={book.shelf} >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          {(book.authors !== undefined) && <div className="book-authors">{book.authors}</div>}
        </div>
      </li>
    )
  }
}

export default Book