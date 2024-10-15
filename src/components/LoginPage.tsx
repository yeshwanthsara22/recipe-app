// // src/components/LoginPage.tsx
// import React, { useState } from "react";
// import "./LoginPage.css";

// const LoginPage: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     console.log("Logging in with", email, password);
//   };

//   return (
//     <div className="login-container">
//       <div className="image-section"></div>
//       <div className="login-box">
//         <h2 className="text-center mb-4">Login</h2>
//         <div className="form-group mb-3">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="form-group mb-3">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button className="btn btn-primary w-100" onClick={handleLogin}>
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
// src/components/LoginPage.tsx
import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Make sure this line is present

  const handleLogin = () => {
    console.log("Logging in with", email, password);
    // Simulate successful login
    navigate("/home"); // Navigate to home page
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="text-center mb-4">Login</h2>
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
