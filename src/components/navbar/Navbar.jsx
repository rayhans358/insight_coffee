import React, { useEffect } from 'react';
import { Search, ShoppingCart, Menu, Trash, MinusCircle, PlusCircle, Users } from 'react-feather'; 
import { Link } from 'react-router-dom';
import toggleDisplaySearchShop from '../../toggle/toggleDisplaySearchShop';

import './navbarStyling.css';
// import './navbarStyling.scss';

import productTes from '../../assets/logos/insLogo.jpg';

function Navbar() {
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
              <h3>Product 1</h3>
              <div className="item-price">Harga: IDR 30K</div>
              <div className="total-detail">Jumlah</div>
              <div className="total-product">
                <MinusCircle className="amount-product"/>  <h2>1</h2>  <PlusCircle className="amount-product"/>
              </div>
            </div>
            <Trash className="remove-item"/>
          </div>
          <div className="cart-item">
            <img src="../../tes1.jpg" alt="Product 2" />
            <div className="item-detail">
              <h3>Product 2</h3>
              <div className="item-price">Harga: IDR 30K</div>
              <div className="total-detail">Jumlah</div>
              <div className="total-product"><MinusCircle className="amount-product"/>  <h2>1</h2>  <PlusCircle className="amount-product"/></div>
            </div>
            <Trash className="remove-item"/>
          </div>
          <div className="cart-item">
            <img src="../../tes1.jpg" alt="Product 3" />
            <div className="item-detail">
              <h3>Product 3</h3>
              <div className="item-price">Harga: IDR 30K</div>
              <div className="total-detail">Jumlah</div>
              <div className="total-product"><MinusCircle className="amount-product"/>  <h2>1</h2>  <PlusCircle className="amount-product"/></div>
            </div>
            <Trash className="remove-item"/>
          </div>
        </div>
        {/* Shopping Cart end */}
      </nav>
    </div>
  );
};

export default Navbar;