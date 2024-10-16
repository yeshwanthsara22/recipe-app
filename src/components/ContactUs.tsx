// import React from "react";
import "./ContactUs.css";
export const ContactUs = () => {
  return (
    <div className="main-color">
      {/* <button>xx</button> */}
      <footer className="container d-flex flex-wrap justify-content-between align-items-center py-4 main-color">
        {/* <p className="col-md-4 mb-0 text-black">© Recipe App, Inc</p> */}
        <div className="col-md-4 text-black text-center">
          <p className="mb-1">© Recipe App, Inc</p>
          <h6 className="mb-1">
            For support, please contact us from Monday to Friday, between 9 AM
            and 9 PM.
          </h6>
          <h6 className="mb-1">Email: support@recipeapp.com</h6>
          <h6 className="mb-1">Phone: +123 456 7890</h6>
        </div>
        <ul className="nav navbar-dar col-md-4 justify-content-end">
          <a href="#" className="nav-link px-2 text-black">
            Home
          </a>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-black">
              Recipe
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
export default ContactUs;
