import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src={logo} width='35' height='35' className="mr-5" alt="logo"/>
 
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to='/' className="nav-link active" aria-current="page">
                Home
        </Link>
          {/* <a className="nav-link active" aria-current="page" href="">Home</a> */}
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Menu 2</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Menu 3</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}
