import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import "./shoppingSummaryStyling.css";

import { formatRupiah, sumPrice } from "../../../app/utils/currencyFormatter";
import { clearAllItem } from "../../../app/features/actions/cartActions";
import { useNavigate } from "react-router-dom";

function ShoppingSummary() {
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();
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
          <button className="delete-btn" onClick={() => clearAll()}>
            <span>Delete All</span>
          </button>
        </div>
        <div className="checkout">
          <button className='checkout-btn' onClick={() => {navigate('/carts/delivery')}}>
            <span>Checkout</span>
          </button>
        </div>
        </>
      ) : (
        <div className="go-products">
          <button className='go-products-btn' onClick={() => {navigate('/products')}}>
            <span>Go Products</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingSummary;