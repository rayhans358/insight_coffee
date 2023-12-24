import React, { useEffect } from 'react';
import { Search, ShoppingCart, Menu, Users, Trash2 } from 'react-feather'; 
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './navbarStyling.css';
// import './navbarStyling.scss';

import { config } from '../../config';
import toggleDisplaySearchShop from '../../toggle/toggleDisplaySearchShop';
import { addItem, clearAllItem, clearItem, reduceItem } from '../../app/features/actions/cartActions';
import { formatRupiah, sumPrice } from '../../app/utils/currencyFormatter';

function Navbar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart);
  const multiply = String.fromCharCode(215); // (×)
  const plus = String.fromCharCode(43); // (+)
  const minus = String.fromCharCode(8722); // (−)
  const equal = String.fromCharCode(61); // (=)

  useEffect(() => {
    toggleDisplaySearchShop();
  }, []);

  function addCart(item) {
    dispatch(addItem(item))
  };

  function reduceCart(item) {
    dispatch(reduceItem(item))
  };

  function clearCart(item) {
    dispatch(clearItem(item))
  };

  function clearAll() {
    dispatch(clearAllItem())
  };

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

        {/* Navbar Extra start */}
        <div className="navbar-extra">
          <Link to="/" id="search-button">
            {location.pathname === "/products" && (
              <Search />
            )}
          </Link>
          <Link to="/" id="shopping-cart-button">
            <ShoppingCart />
            {cartItems.length > 0 && (
              <span className="quantity-badge">
                {cartItems.reduce((total, item) => total + item.qty, 0)}
              </span>
            )}
          </Link>
          <Link to="/account" id=""><Users /></Link>
          <Link to="/" id="display-menu"><Menu /></Link>
        </div>
        {/* Navbar Extra end */}

        {/* Search Form start */}
        <div className="search-form">
          <input type="search" id="search-box" placeholder="Search product here ...." />
          <label htmlFor="search-box"><Search /></label>
        </div>
        {/* Search Form end */}

        {/* Shopping Cart start */}
        <div className="shopping-cart">
          {cartItems.length === 0 ? (
            <h4 style={{marginTop: '1rem'}}>Cart is Empty</h4>
          ) : (
            <>
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={`${config.api_host}/images/products/${item.image_url}`} alt={item.name} />
                <div className="item-detail">
                  <Trash2 className='remove-item' onClick={(event) => {
                    event.stopPropagation();
                    clearCart(item);
                  }}/>
                  <h3>{item.name}</h3>
                  <div className="item-price">
                    <span>{formatRupiah(item.price)} {multiply} </span>
                    <button id="minus" onClick={() => reduceCart(item)}>{minus}</button>
                    <span>{item.qty}</span>
                    <button id="plus" onClick={() => addCart(item)}>{plus}</button>{equal}
                    <span>{formatRupiah(item.price * item.qty)}</span>
                  </div>
                </div>
              </div>
            ))}
            <h4>Total : <span>{formatRupiah(sumPrice(cartItems))}</span></h4>
            <div className="button ">
              <button className='delete-button' onClick={(event) => {
                event.stopPropagation();
                clearAll();
              }}>Delete All</button>
              <Link to="/orders" className='checkout-button' type='submit' id='checkout-button'>Checkout</Link>
            </div>
            </>
          )}
        </div>
        {/* Shopping Cart end */}
      </nav>
    </div>
  );
};

export default Navbar;