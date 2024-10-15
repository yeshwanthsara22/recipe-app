// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage"; // Adjust the path as necessary
import HomePage from "./components/HomePage"; // Import your HomePage component
import Recipes from "./components/Recipes"; // Import the Recipes component
import ContactUs from "./components/ContactUs"; // Import the Contact Us component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/recipes" element={<Recipes />} />{" "}
        {/* Add Recipes route */}
        <Route path="/contact" element={<ContactUs />} />{" "}
        {/* Add Contact Us route */}
      </Routes>
    </Router>
  );
};

export default App;
