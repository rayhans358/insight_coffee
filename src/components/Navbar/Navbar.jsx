import React, { useEffect, useState } from 'react';
import { Search, ShoppingCart, Menu, Users, Trash2 } from 'react-feather'; 
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import './navbarStyling.css';

import { config } from '../../config';
import { addItem, clearAllItem, clearItem, reduceItem } from '../../app/features/actions/cartActions';
import { formatRupiah, sumPrice } from '../../app/utils/currencyFormatter';
import { setKeyword } from '../../app/features/actions/productActions';
import toggleDisplaySearchShop from '../../toggle/toggleDisplaySearchShop';
import secureCart from "../../assets/images/securecart.png";

function Navbar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const plus = String.fromCharCode(43); // (+)
  const minus = String.fromCharCode(8722); // (−)
  const equal = String.fromCharCode(61); // (=)

  useEffect(() => {
    toggleDisplaySearchShop();
    const auth = localStorage.getItem("auth") 
      ? JSON.parse(localStorage.getItem("auth"))
      : {};
    setIsLoggedIn(!!auth.token)
  }, [navigate]);

  async function handleSearch(event) {
    const searchTerm = event.target.value
    setSearchTerm(searchTerm);
    dispatch(setKeyword(searchTerm));
  };

  function addCart(item) {
    dispatch(addItem(item))
  };

  function reduceCart(item) {
    dispatch(reduceItem(item))
  };

  function clearCart(item) {
    Swal.fire({
      title: "Are you sure want to delete this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#109010",
      cancelButtonColor: "#ff0000",
      confirmButtonText: "Yes, delete it!"
    })
    .then((result) => {
      if (result.isConfirmed) {
        dispatch(clearItem(item))
        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  };

  function clearAll() {
    dispatch(clearAllItem())
  };

  function handleCheckout() {
    navigate('/carts')
  }

  function handleUserLogin() {
    if (isLoggedIn) {
      navigate("/account/dashboard");
    } else {
      navigate("/account/login");
    }
  }

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
            {isLoggedIn && cartItems.length > 0 && (
              <span className="quantity-badge">
                {cartItems.reduce((total, item) => total + item.qty, 0)}
              </span>
            )}
          </Link>
          <Link to={isLoggedIn ? "/account/dashboard" : "/account/login"} id="user-button" onClick={handleUserLogin}><Users /></Link>
          <Link to="/" id="display-menu"><Menu /></Link>
        </div>
        {/* Navbar Extra end */}

        {/* Search Form start */}
        <div className="search-form">
          <input type="search" id="search-box" placeholder="Search product here ...." value={searchTerm}
            onChange={handleSearch} />
          <label htmlFor="search-box"><Search /></label>
        </div>
        {/* Search Form end */}

        {/* Shopping Cart start */}
        <div className="shopping-cart" style={{ overflowY: 'auto' }}>
          {isLoggedIn ? (
            <>
              {cartItems.length === 0 ? (
                <h4 style={{marginTop: '1rem'}}>Cart is Empty</h4>
              ) : (
                <>
                <div className="head-cart">
                  <h4>Keranjang</h4>
                  <h4 className='qty-cart'>{cartItems.reduce((total, item) => total + item.qty, 0)}</h4>
                </div>
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
                        <div className="item-qty">
                          <span style={{padding: '0 10px'}}>{formatRupiah(item.price)}</span>
                          <div className="qty">
                            <button id="minus" onClick={() => reduceCart(item)}>{minus} </button>
                            <span> {item.qty} </span>
                            <button id="plus" onClick={() => addCart(item)}>{plus}</button>
                          </div>
                        </div>
                        <div className="total-price">
                          {equal}
                          <span style={{fontWeight: '600'}}> {formatRupiah(item.price * item.qty)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <h4 className='text-total'>Total : <span>{formatRupiah(sumPrice(cartItems))}</span></h4>
                <div className="button">
                  <button className='delete-button' onClick={(event) => {
                    event.stopPropagation();
                    clearAll();
                  }}>Delete All</button>
                  <button className='checkout-button' onClick={() => {
                    handleCheckout()
                  }}>Checkout</button>
                </div>
                </>
              )}
            </>
          ) : (
            <>
            <img className="is-image-login" src={secureCart} alt={secureCart} />
            <h4 className="is-navbar-login" >Silahkan Log In terlebih dahulu</h4>
            <button className="button-navbar-login" onClick={() => navigate('/account/login')}>Log In</button>
            </>
          )}
        </div>
        {/* Shopping Cart end */}
      </nav>
    </div>
  );
};

export default Navbar;