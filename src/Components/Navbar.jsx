import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul className="nav justify-content-center mt-5 ">
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
<hr/>
        </div>
    );
};

export default Navbar;