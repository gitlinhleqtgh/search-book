import React, { Component } from 'react';
import './App.css';
import SearchArea from './SearchArea';
import request from 'superagent';
import BookList from './BookList';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: 'javascript',
      sort: ''
    }
  }

  searchBook = (e) => {
    e.preventDefault();
    request.get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchField })
      .then((data) => {
        //console.log(data);
        const cleanData = this.cleanData(data)
        this.setState({ books: cleanData })
      })

  }

  handleSearch = (e) => {
    //  console.log(e.target.value);
    this.setState({ searchField: e.target.value })
  }

  handleSort = (e) => {
    console.log(e.target.value);
    this.setState({ sort: e.target.value })
  }
  cleanData = (data) => {
    const cleanedData = data.body.items.map((book) => {
      if (book.volumeInfo.hasOwnProperty('publishedDate') === false) {
        book.volumeInfo['publishedDate'] = '0000';
      }
      else if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
        book.volumeInfo['imageLinks'] = { thumbnail: 'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6' }
      }
      return book;
    })
    return cleanedData;
  }

  render() {
    const filteredBooks = this.state.books.sort((a, b) => {
      if (this.state.sort === 'Newest') {
        console.log("in newest")
        return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4));
      }
      else if (this.state.sort === 'Oldest') {
        return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4));
      }
      return;
    })
    return (
      <div>
        <SearchArea
          searchBook={this.searchBook}
          handleSearch={this.handleSearch}
          handleSort={this.handleSort}
        />
        <BookList books={filteredBooks} />
      </div>
    );
  }
}

export default Books;
