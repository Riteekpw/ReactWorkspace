import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css"; 
 
const LoginPage = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
 
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
 
    try {
      const response = await axios.post("https://localhost:7247/auth/login", { username, password });

      const  token  = response.data.token;

      localStorage.setItem("token", token);

      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      console.log(decodedToken);
      const userRole = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      console.log(userRole);

      localStorage.setItem("role", userRole);

      if (userRole === "Librarian") {
        navigate("/librarian"); 
      } 
      else if (userRole === "Member") {
        navigate("/books"); 
      } else {
        setError("Invalid role.");
      }
    } 
    catch (err) {
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

        <p>
          Don't have an account? <a href="/register">Sign Up</a>
        </p>

      </form>
    </div>
  );
};
 
export default LoginPage;