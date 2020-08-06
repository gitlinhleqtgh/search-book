import React from 'react';
import BookCard from './BookCard';

const BookList = (props) =>{ 
    return(
      <div className="list">
         {
             props.books.map((book,i) =>{
             
                 return <BookCard  
                 previewLink={book.volumeInfo.previewLink}
                 key={i}
                 
                 image={ book.volumeInfo.imageLinks === undefined
                    ? ""
                    : `${book.volumeInfo.imageLinks.thumbnail}`}
                 title={book.volumeInfo.title}
                 author={book.volumeInfo.authors}
                 published={book.volumeInfo.publishedDate}
                 publisher={book.volumeInfo.publisher}
                 />

             })
         }
      </div>
    )
}
export default BookList;