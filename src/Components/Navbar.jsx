import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md  mt-5">
  <div className="container-fluid ">
   
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
        <Link to ="/">ALL</Link>
        </li>
        <li className="nav-item">
        <Link to ="/fullstack">FULL STACK DEVELOPMENT</Link>
        </li>
        <li className="nav-item">
        <Link to ="/datascience">DATA SCIENCE</Link>
        </li>
        <li className="nav-item">
  <Link to ="/cybersecurity">CYBER SECURITY</Link>
  </li>
  <li className="nav-item">
  <Link to ="/career">CAREER</Link>
  </li>
      </ul>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
<hr/>
        </div>
    );
};

export default Navbar;