import React , {useState} from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Books from "./components/Books/Books";
import Members from "./components/Member/Members";
import Borrow from "./components/Borrow/Borrow";
import Librarian from "./components/Librarian/Librarian";
import "./index.css";
import AddBook from "./components/Books/AddBook";
import LoginPage from "./components/Login/LoginPage";


const App = () => {


  return (
    <>
    {/* <div>
      <LoginPage/>
    </div> */}
    
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

    
    </>
  );
};

export default App;
