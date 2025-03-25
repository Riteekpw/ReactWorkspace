import React,{useState} from 'react';
import axios from 'axios';
import "./addBook.css";

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');
    const [message, setMessage] = useState('');
  
    const addBook = async() => {
      if (!title || !author || !isbn) {
        alert('Please fill in all fields');
        return;
      }
  
      await axios
        .post('https://localhost:7247/book/add', { title, author, isbn })
        .then(() => {
          setMessage('Book Added Successfully');
          setTitle('');
          setAuthor('');
          setIsbn('');
        })
        .catch((error) => {
          console.error(error);
          setMessage('Error while adding book');
        });
    };
  
    return (
      <div className="container">
        <h2 className="form-title">Add a New Book</h2>
        {message && <p className="message">{message}</p>}
  
        <form className="book-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter book title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              placeholder="Enter author name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="isbn">ISBN</label>
            <input
              type="text"
              id="isbn"
              placeholder="Enter ISBN"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />
          </div>
  
          <button type="button" className="submit-btn" onClick={addBook}>
            Add Book
          </button>
        </form>
      </div>
    );
  };
  
  export default AddBook;