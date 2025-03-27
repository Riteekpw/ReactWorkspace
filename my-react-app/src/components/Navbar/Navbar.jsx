import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
      return(
      <nav>
        <Link to="/books"> Home</Link> | 
        <Link to="/addBook"> Add Book</Link> | 
        <Link to="/members"> Members</Link> | 
        <Link to="/librarian"> Librarian</Link>
      </nav>
      );
}

export default Navbar;