import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Clipboard, Trash2 } from "react-feather";

import "./detailCartsStyling.css";
import empty from "../../../assets/images/empty.png";

import { config } from "../../../config";
import { addItem, clearItem, reduceItem } from "../../../app/features/actions/cartActions";
import { formatRupiah } from "../../../app/utils/currencyFormatter";
import Swal from "sweetalert2";

function DetailCarts() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const plus = String.fromCharCode(43); // (+)
  const minus = String.fromCharCode(8722); // (−)

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

  return (
    <div className="detail-carts">
      <h2>Keranjang</h2>
      {/* Detail Carts */}
      {cartItems.length === 0 ? (
        <div className="empty">
          <img src={empty} alt="empty" />
          <h3>Cart is Empty</h3>
          <h3>Let's go shopping first</h3>
        </div>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="box-cart">
            <div className="box-fill">
              <div className="box-gap">
                <div className="image-cart">
                  <img src={`${config.api_host}/images/products/${item.image_url}`} alt={item.name} />
                </div>
                <div className="body-cart">
                  <div className="fill-product">
                    <div className="title-product">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="price-product">
                      <p>{formatRupiah(item.price)}</p>
                    </div>
                  </div>
                  <div className="quantity-detail">
                    <button type="button" className="button" onClick={() => addCart(item)}><Clipboard /></button>
                    <button type="button" className="button" onClick={() => clearCart(item)}><Trash2 /></button>
                    <div className="quantity-amount">
                      <div className="amount">
                        <button id="minus" onClick={() => reduceCart(item)}>{minus}</button>
                        <span>{item.qty}</span>
                        <button id="plus" onClick={() => addCart(item)}>{plus}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DetailCarts;