import React, { useEffect } from 'react';
import { Search, ShoppingCart, Menu, Trash, MinusCircle, PlusCircle } from 'react-feather'; 
import { Link } from 'react-router-dom';
import toggleDisplaySearchShop from '../../toggleDisplaySearchShop';

// import '../styles/css/navbarStyling.css';
import '../styles/scss/navbarStyling.scss';

function Navbar() {
  useEffect(() => {
    toggleDisplaySearchShop()
  }, []);

  return (
    <>
    <nav className="navbar">
      <div>
      <a href="/" className="navbar-logo">Insight<span>Coffe</span>™</a>
      </div>

      <div className="navbar-nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/menu">Menu</a>
        <a href="/products">Product</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="navbar-extra">
        <Link to="/" id="search-button"><Search /></Link>
        <Link to="/" id="shopping-cart-button"><ShoppingCart /></Link>
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
          <img src="../../tes1.jpg" alt="Product 1" />
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
    </>
  );
}

export default Navbar;