import React, { useEffect } from 'react';
import { Search, ShoppingCart, Menu, Users, Trash2 } from 'react-feather'; 
import { Link } from 'react-router-dom';
import toggleDisplaySearchShop from '../../toggle/toggleDisplaySearchShop';

import './navbarStyling.css';
// import './navbarStyling.scss';

import productTes from '../../assets/logos/insLogo.jpg';

function Navbar() {
  const multiply = String.fromCharCode(215); // tanda kali (×)
  const plus = String.fromCharCode(43); // tanda tambah (+)
  const minus = String.fromCharCode(8722); // tanda kurang (−)
  const equal = String.fromCharCode(61); // sama dengan (=)

  useEffect(() => {
    toggleDisplaySearchShop()
  }, []);

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">Insight<span>Coffee</span>™</Link>

        <div className="navbar-nav">
          <Link to="/">Home</Link>
          <Link to="/products">Product</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="navbar-extra">
          <Link to="/" id="search-button"><Search /></Link>
          <Link to="/" id="shopping-cart-button"><ShoppingCart /></Link>
          <Link to="/account" id=""><Users /></Link>
          <Link to="/" id="display-menu"><Menu /></Link>
        </div>

        {/* Search Form Start */}
        <div className="search-form">
          <input type="search" id="search-box" placeholder="Search product here ...." />
          <label htmlFor="search-box"><Search /></label>
        </div>
        {/* Search Form end */}

        {/* Shopping Cart start */}
        <div className="shopping-cart">
          <div className="cart-item">
            <img src={productTes} alt="Product 1" />
            <div className="item-detail">
                <Trash2 className='remove-item'/>
              <h3>Product 1</h3>
              <div className="item-price">
                <span>Rupiah {multiply} </span>
                <button id="minus">{minus}</button>
                <span> quantity </span>
                <button id="plus">{plus}</button> {equal}
                <span> rupiah</span>
              </div>
            </div>
          </div>
          <h4>Total : <span>rupiah</span></h4>
        </div>
        {/* Shopping Cart end */}
      </nav>
    </div>
  );
};

export default Navbar;