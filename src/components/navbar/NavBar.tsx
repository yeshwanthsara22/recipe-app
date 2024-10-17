import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>(""); // State for search input
  const navigate = useNavigate();

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value); // Update state with input value
  };

  // Handle search function
  const searchFunction = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form from refreshing the page
    // Navigate to the recipes page with the search query
    navigate(`/recipes?search=${searchInput}`);
  };

  // Handle logout function
  const logoutFunction = () => {
    // Clear user data (assuming token is stored in localStorage)
    localStorage.removeItem("token"); // Clear the token from localStorage
    // Redirect to login page
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        {/* Logo or Brand */}
        <Link to="/" className="navbar-brand">
          Recipe
        </Link>

        {/* Toggler button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links, search bar, and logout button */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/recipes" className="nav-item nav-link">
              Recipes
            </Link>
            <Link to="#contact-us" className="nav-item nav-link">
              Contact Us
            </Link>
          </div>

          {/* Search bar */}
          <form
            className="form-inline my-2 my-lg-0 ml-lg-3"
            onSubmit={searchFunction}
          >
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchInput}
                onChange={handleInputChange}
              />
              <div className="input-group-append">
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>

          {/* Logout Link with onClick */}
          <div className="navbar-nav">
            <Link
              to="/login"
              className="nav-item nav-link"
              onClick={logoutFunction} // Trigger the logout function on click
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
