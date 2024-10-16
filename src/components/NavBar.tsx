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

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div></div>
      <div></div>
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

        {/* Navigation links and search bar */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/recipes" className="nav-item nav-link">
              Recipes
            </Link>
            <Link to="#contact-us" className="nav-item nav-link">
              {" "}
              {/* Updated Link */}
              Contact Us
            </Link>
          </div>

          {/* Search bar */}
          <form
            className="form-inline my-2 my-lg-0 ml-3"
            onSubmit={searchFunction}
          >
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchInput}
                onChange={handleInputChange} // Update search input value
              />
              <div className="input-group-append">
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
