import React, { useState } from "react";
import axios from "axios";

const BorrowReturn = () => {

  const [borrowMemberId, setBorrowMemberId] = useState("");
  const [borrowBookId, setBorrowBookId] = useState("");

  const [returnMemberId, setReturnMemberId] = useState("");
  const [returnBookId, setReturnBookId] = useState("");

  const borrowBook = () => {
    try{
      axios.post(`https://localhost:7247/book/borrow?memberId=${borrowMemberId}&bookId=${borrowBookId}`);
      alert("Book Borrowed successfully");
    }
    catch(error){
      alert(error.response?.data || "Failed to return book");
    }
   
  };

  const returnBook = () => {
    try{
      axios.post(`https://localhost:7247/book/return?memberId=${returnMemberId}&bookId=${returnBookId}`);
      alert("Book returned successfully");
    }
    catch (error) {
      alert(error.response?.data || "Failed to return book");
    }
  };

  return (
    <div className="container " >
      {/* Borrow Section */}
      <div className="borrow-section">
        <h2>Borrow a Book</h2>
        <input
          type="number"
          placeholder="Member ID"
          value={borrowMemberId}
          onChange={(e) => setBorrowMemberId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Book ID"
          value={borrowBookId}
          onChange={(e) => setBorrowBookId(e.target.value)}
        />
        <button onClick={borrowBook}>Borrow</button>
      </div>

      <hr />

      {/* Return Section */}
      <div className="return-section">
        <h2>Return a Book</h2>
        <input
          type="number"
          placeholder="Member ID"
          value={returnMemberId}
          onChange={(e) => setReturnMemberId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Book ID"
          value={returnBookId}
          onChange={(e) => setReturnBookId(e.target.value)}
        />
        <button onClick={returnBook}>Return</button>
      </div>
    </div>
  );
};

export default BorrowReturn;
