import React, { useState } from 'react';
import api from '../api';
 
const Borrow = () => {
  const [memberId, setMemberId] = useState('');
  const [bookId, setBookId] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
 
  const borrowBook = async () => {
    if (!memberId || !bookId) {
      setError('Please provide both Member ID and Book ID.');
      return;
    }
    try {
const response = await api.post(`/book/borrow${memberId, bookId}`);
      setMessage(response.data);
      setError('');
    } catch (err) {
      setError(err.response?.data || 'Error borrowing book.');
      setMessage('');
    }
  };
 
  const returnBook = async () => {
    if (!memberId || !bookId) {
      setError('Please provide both Member ID and Book ID.');
      return;
    }
    try {
const response = await api.post(`/book/return${memberId, bookId}`);
      setMessage(response.data);
      setError('');
    } catch (err) {
      setError(err.response?.data || 'Error returning book.');
      setMessage('');
    }
  };
 
  return (
    <div>
      <h2>Borrow / Return Book</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <div>
        <input
          type="number"
          placeholder="Member ID"
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Book ID"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        />
      </div>
      <div>
        <button onClick={borrowBook}>Borrow Book</button>
        <button onClick={returnBook}>Return Book</button>
      </div>
    </div>
  );
};
 
export default Borrow;