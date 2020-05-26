import React from 'react';
import icon from "./logo2.png"
import './style.scss';

function Navbar () {
  return (
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" >
            <i  className="fas fa-leaf">
                
            </i>
            SpicedUp
        </a>
        
            <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown mr-2">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Category
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                </li>
            </ul>
        
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-success my-2 my-sm-0" type="submit">
                <i  className="fas fa-search"></i>
            </button>
        </form>
    </nav>
  );
}

export default Navbar;
