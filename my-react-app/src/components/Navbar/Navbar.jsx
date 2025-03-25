import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Books from '../Books/Books'
import AddBook from '../Books/AddBook'
import Members from '../Member/Members'
import Librarian from '../Librarian/Librarian'
import Borrow from '../Borrow/Borrow'

const Navbar = () =>{
    <Router>
    <div className="container" >
      <h1>Library Management System</h1>
      <nav>
        <Link to="/books"> Home</Link> | 
        <Link to="/addBook"> Add Book</Link> | 
        <Link to="/members"> Members</Link> | 
        <Link to="/borrow"> Borrow</Link> | 
        <Link to="/librarian"> Librarian</Link>
      </nav>

      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/members" element={<Members />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/addBook" element={<AddBook />} />
        <Route path="/librarian" element={<Librarian />} />
      </Routes>
    </div>
  </Router>
}

export default Navbar;