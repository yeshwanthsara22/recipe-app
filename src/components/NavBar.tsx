// import React from "react";
// import { Link } from "react-router-dom";
// import "./NavBar.css"; // Assuming you have a CSS file for additional styles

// const NavBar: React.FC = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light">
//       <div className="container">
//         {/* Logo or Brand */}
//         <Link to="/" className="navbar-brand">
//           Recipe
//         </Link>

//         {/* Toggler button for mobile view */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navigation links and search bar */}
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className="navbar-nav ml-auto">
//             <Link to="/" className="nav-item nav-link">
//               Home
//             </Link>
//             <Link to="/Recipes" className="nav-item nav-link">
//               Recipes
//             </Link>
//             <Link to="/contact" className="nav-item nav-link">
//               Contact Us
//             </Link>
//           </div>

//           {/* Search bar (inline style) */}
//           <form className="form-inline my-2 my-lg-0 ml-3">
//             <div className="input-group">
//               <input
//                 className="form-control"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <div className="input-group-append">
//                 <button className="btn btn-outline-success" type="submit">
//                   Search
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

// src/components/NavBar.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Assuming you have a CSS file for additional styles

const NavBar: React.FC = () => {
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

        {/* Navigation links and search bar */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/recipes" className="nav-item nav-link">
              {" "}
              {/* Corrected path */}
              Recipes
            </Link>
            <Link to="/contactus" className="nav-item nav-link">
              Contact Us
            </Link>
          </div>

          {/* Search bar (inline style) */}
          <form className="form-inline my-2 my-lg-0 ml-3">
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-successful" type="submit">
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
