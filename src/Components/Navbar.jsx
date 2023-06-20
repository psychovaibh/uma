import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <div className="card bg-dark text-center sticky-top">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="true" to="/">
                Add New User Data
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light " to="/show">
                Show user Data
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
