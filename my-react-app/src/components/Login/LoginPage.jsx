
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import jwtDecode from "jwt-decode";
import "./login.css"; 
 
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
 
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
 
    try {
      const response = await axios.post("https://localhost:7247/auth/login", { username, password });
      const { token } = response.data;
      
      localStorage.setItem("token", token);

      const decodedToken = jwtDecode(token);
      const userRole = decodedToken.role; 

    //   if (userRole === "Librarian") {
    //     navigate("/librarian-dashboard");
    //   } else if (userRole === "Member") {
    //     navigate("/member-dashboard");
    //   } else {
    //     setError("Invalid role.");
    //   }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };
 
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
 
export default LoginPage;