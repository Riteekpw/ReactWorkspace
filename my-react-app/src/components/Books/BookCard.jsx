import { useEffect, useState } from "react";
import axios from "axios";
import "./book.css";
 
const BookCard = ({ book }) => {

    const deleteBook = () => {
    
        axios.delete(`https://localhost:7247/book/delete/${book.bookId}`)
          .then(() => {
            alert("Book deleted successfully!");
            setDeleteBookId("");
          })
          .catch(error => console.error(error));
      };

  return (
    <div className="book-card" >
      {<img src={'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D'} alt={book.title} /> }
      <h2>{book.title}</h2>
      <p className="author">{book.author}</p>
      <input type="button" value="Delete" onClick={deleteBook}/>
    </div>
  );
};
 
export default BookCard;