import { render } from "@testing-library/react";
import React from "react";
import {NavLink, Outlet} from 'react-router-dom'

function Nav() {

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <a class="navbar-brand" href="/">Conference GO!</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/mainpage/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/presentations/new">New presentation</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/conferences/new">New conference</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/locations/new">New location</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/attendees/new">Attend conference</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/attendees/">Attendees List</NavLink>
            </li>
          </ul>
          </div>
        </div>
      </nav>
      </>
    );
  };


 export default Nav;