import React , {useState} from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Books from "./components/Books/Books";
import Members from "./components/Member/Members";
import Borrow from "./components/Borrow/Borrow";
import Librarian from "./components/Librarian/Librarian";
import "./index.css";
import AddBook from "./components/Books/AddBook";
import LoginPage from "./components/Login/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Login/Register";


const App = () => {

  const userRole = localStorage.getItem("role");
 console.log(userRole);
  return (
    <>
    <Router>

    <Navbar/>
      <div className="container" >
        <Routes>
          <Route path="/"  element={<LoginPage/>}/>
          <Route path="/books" element={<Books />} />
          <Route path="/members" element={<Members />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/librarian" element={ userRole === "Librarian" ? <Librarian /> : <LoginPage />} />
          <Route path="/register"  element={<Register/>} />
        </Routes>
      </div>
    </Router>

    
    </>
  );
};

export default App;
