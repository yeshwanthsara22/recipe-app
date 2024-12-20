// src/components/HomePage.tsx
import React from "react";
import NavBar from "./../navbar/NavBar";
import "./HomePage.css";
import ContactUs from "./../contactus/ContactUs";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="home-page">
        <NavBar />
        <h1>Welcome to the Recipe world!!</h1>
        {/* Add your recipe content here */}
      </div>
      <div className="footer" id="contact-us">
        <ContactUs />
      </div>
    </>
  );
};

export default HomePage;
