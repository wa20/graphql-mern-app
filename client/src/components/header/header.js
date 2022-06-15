import react from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src={logo} width='35' height='35' className="mr-5"/>
 
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Menu 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Menu 3</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}
