import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid mx-5">
        <Link className="navbar-brand" to="/">
          <img src="/images/logo.png" className="logo" alt="..." />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Electronics
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#">Electronics</Link></li>
                <li><Link className="dropdown-item" to="#">Home & Furniture</Link></li>
                <li><Link className="dropdown-item" to="#">Fashion</Link></li>
                <li><Link className="dropdown-item" to="#">Beauty, Toy & More</Link></li>
                <li><Link className="dropdown-item" to="#">Stationary</Link></li>
                <li><Link className="dropdown-item" to="#">Sports</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Fashion
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#">Electronics</Link></li>
                <li><Link className="dropdown-item" to="#">Home & Furniture</Link></li>
                <li><Link className="dropdown-item" to="#">Fashion</Link></li>
                <li><Link className="dropdown-item" to="#">Beauty, Toy & More</Link></li>
                <li><Link className="dropdown-item" to="#">Stationary</Link></li>
                <li><Link className="dropdown-item" to="#">Sports</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Home & Furniture
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#">Electronics</Link></li>
                <li><Link className="dropdown-item" to="#">Home & Furniture</Link></li>
                <li><Link className="dropdown-item" to="#">Fashion</Link></li>
                <li><Link className="dropdown-item" to="#">Beauty, Toy & More</Link></li>
                <li><Link className="dropdown-item" to="#">Stationary</Link></li>
                <li><Link className="dropdown-item" to="#">Sports</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Stationary
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#">Electronics</Link></li>
                <li><Link className="dropdown-item" to="#">Home & Furniture</Link></li>
                <li><Link className="dropdown-item" to="#">Fashion</Link></li>
                <li><Link className="dropdown-item" to="#">Beauty, Toy & More</Link></li>
                <li><Link className="dropdown-item" to="#">Stationary</Link></li>
                <li><Link className="dropdown-item" to="#">Sports</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sports
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#">Electronics</Link></li>
                <li><Link className="dropdown-item" to="#">Home & Furniture</Link></li>
                <li><Link className="dropdown-item" to="#">Fashion</Link></li>
                <li><Link className="dropdown-item" to="#">Beauty, Toy & More</Link></li>
                <li><Link className="dropdown-item" to="#">Stationary</Link></li>
                <li><Link className="dropdown-item" to="#">Sports</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Beauty, Toy & More
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#">Electronics</Link></li>
                <li><Link className="dropdown-item" to="#">Home & Furniture</Link></li>
                <li><Link className="dropdown-item" to="#">Fashion</Link></li>
                <li><Link className="dropdown-item" to="#">Beauty, Toy & More</Link></li>
                <li><Link className="dropdown-item" to="#">Stationary</Link></li>
                <li><Link className="dropdown-item" to="#">Sports</Link></li>
              </ul>
            </li>
            <li className="nav-item"><Link className="nav-link active text-primary" aria-current="page" to="/cart"><FontAwesomeIcon icon={faCartShopping} />(2)</Link></li>
            <li className="nav-item"><Link className="nav-link active text-primary" aria-current="page" to="/login"><button class="btn btn-primary text-white">login/Signup</button></Link></li>
            
          </ul> 
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </>
  )
}
export default Header