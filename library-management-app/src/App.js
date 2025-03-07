import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Books from './Components/Books';
import Members from './Components/Members';
import Borrow from './Components/Borrow';
 
const App = () => {
  return (
    <Router>
      <div className="container" style={{ padding: '20px' }}>
        <h1>Library Management System</h1>
        <nav style={{ marginBottom: '20px' }}>
          <NavLink to="/books" style={{ marginRight: '10px' }}>Books</NavLink>
          <NavLink to="/members" style={{ marginRight: '10px' }}>Members</NavLink>
          <NavLink to="/borrow">Borrow/Return</NavLink>
        </nav>
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/members" element={<Members />} />
          <Route path="/borrow" element={<Borrow />} />
          <Route path="/" element={<Books />} />
        </Routes>
      </div>
    </Router>
  );
};
 
export default App;