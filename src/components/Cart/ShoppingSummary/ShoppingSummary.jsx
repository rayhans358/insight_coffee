import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import "./shoppingSummaryStyling.css";

import { formatRupiah, sumPrice } from "../../../app/utils/currencyFormatter";
import { clearAllItem } from "../../../app/features/actions/cartActions";

function ShoppingSummary() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function clearAll() {
    Swal.fire({
      title: "Are you sure want to delete all this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#109010",
      cancelButtonColor: "#ff0000",
      confirmButtonText: "Yes, delete it!"
    })
    .then((result) => {
      if (result.isConfirmed) {
        dispatch(clearAllItem())
        Swal.fire({
          title: "Deleted!",
          text: "Your all product has been deleted",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  };

  return (
    <div className="box-shopping">
      <div className="body-shopping">
        <h2>Ringkasan belanja</h2>
        {cartItems.length > 0 ? (
          <div className="total-price">
            <span>Total</span>
            <span>{formatRupiah(sumPrice(cartItems))}</span>
          </div>
        ) : (
          <div className="total-price">
            <span>Total</span>
            <span>{formatRupiah(0)}</span>
          </div>
        )}
      </div>
      {cartItems.length > 0 ? (
        <>
        <div className="delete">
          <button className="delete-btn" onClick={() => clearAll()} style={{cursor: "Pointer"}}>
            <span>Delete All</span>
          </button>
        </div>
        <div className="checkout">
          <Link to="/" className='checkout-btn' type='submit' id='checkout-button'>
            <span>Checkout</span>
          </Link>
        </div>
        </>
      ) : (
        <div className="checkout">
          <Link to="/products" className='checkout-btn' type='submit' id='checkout-button'>
            <span>Go Products</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingSummary;