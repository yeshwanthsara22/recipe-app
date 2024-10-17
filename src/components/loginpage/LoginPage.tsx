import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // For error handling
  const navigate = useNavigate(); // Make sure this line is present

  const handleLogin = () => {
    // Simple validation check
    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // Simulate authentication (hardcoded check for this example)
    if (email === "a" && password === "a") {
      localStorage.setItem("token", "user-authenticated"); // Store token
      setErrorMessage(null); // Clear error if login is successful
      navigate("/home"); // Navigate to home page
    } else {
      setErrorMessage("Invalid email or password."); // Show error message for invalid credentials
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="text-center mb-4">Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
        {/* Display error message */}
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
