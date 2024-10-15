// src/components/HomePage.tsx
import React from "react";
import NavBar from "./NavBar";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="home-page">
        <NavBar />
        <h1>Welcome to the Home Page!</h1>
        {/* Add your recipe content here */}
      </div>
    </>
  );
};

export default HomePage;
