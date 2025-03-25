import React, { useState, useEffect } from 'react';
import api from '../api';
 
const Books = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');
 
  const fetchBooks = async () => {
    try {
      const response = await api.get('https://localhost:7247/book/getall');
      setBooks(response.data);
    } catch (err) {
      setError(err.response?.data || 'Error fetching books');
    }
  };
 
  useEffect(() => {
    fetchBooks();
  }, []);
 
  return (
    <div>
      <h2>Books List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.bookId}>
              <strong>{book.title}</strong> by {book.author} (ISBN: {book.isbn}) –{" "}
              {book.isAvailable ? "Available" : "Not Available"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
 
export default Books;