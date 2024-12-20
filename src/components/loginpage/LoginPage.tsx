import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

interface User {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  // Default user account
  const [users, setUsers] = useState<User[]>([
    { username: "recipe", password: "recipe" },
  ]);

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // Validate user credentials
    const user = users.find(
      (user) => user.username === email && user.password === password
    );
    if (user) {
      localStorage.setItem("token", "user-authenticated");
      setErrorMessage(null);
      navigate("/home");
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  const handleSignup = () => {
    if (!username || !password || !confirmPassword) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      setErrorMessage("Username is already taken.");
      return;
    }

    const newUser = { username, password };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setErrorMessage(null);
    setSuccessMessage("Account created successfully! You can now log in.");
    setIsSignup(false);
    setEmail(""); // Clear login fields
    setPassword("");
  };

  const toggleSignup = () => {
    setIsSignup(!isSignup);
    setErrorMessage(null);
    setSuccessMessage(null);
    setEmail(""); // Clear login fields on mode switch
    setPassword("");
    setUsername("");
    setConfirmPassword("");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="text-center mb-4">
          {isSignup ? "Create Account" : "Login"}
        </h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        {isSignup ? (
          <>
            <div className="form-group mb-3">
              <label htmlFor="username">Username</label>
              <input
                type="email"
                className="form-control"
                id="username"
                placeholder="Enter email or username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <div className="form-group mb-3">
              <label htmlFor="confirmPassword">Retype Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-primary w-100" onClick={handleSignup}>
              Create Account
            </button>
            <p className="text-center mt-3">
              Already have an account?{" "}
              <span className="link" onClick={toggleSignup}>
                Login
              </span>
            </p>
          </>
        ) : (
          <>
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email or Username"
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
            <p className="text-center mt-3">
              Don't have an account?{" "}
              <span
                className="link"
                onClick={toggleSignup}
                style={{
                  cursor: "pointer",
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                Create Account
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
