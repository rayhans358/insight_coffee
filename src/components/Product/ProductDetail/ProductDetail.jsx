import React, { useEffect, useState } from "react";
import { ShoppingCart, Star, X } from "react-feather";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./productDetailStyling.css";

import { config } from "../../../config";
import toggleModalBox from "../../../toggle/toggleModalBox";
import { formatRupiah } from "../../../app/utils/currencyFormatter";
import { addItem } from "../../../app/features/actions/cartActions";

function ProductDetail({ product }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    toggleModalBox()
    setShowModal(true)
  }, []);

  function addProduct(product) {
    dispatch(addItem(product))
  };

  if (!product || !product.image_url) {
    return null
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`} id="item-detail-modal">
      <div className="modal-container">
        <X className="close-icon" onClick={() => setShowModal(false)} />
        <div className="modal-content">
          <img src={`${config.api_host}/images/products/${product.image_url}`} alt={product.name} />
          <div className="product-content">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="product-stars">
              {[...Array(product.stars)].map((_, index) => (
                <Star key={index} className='star-full' />
              ))}
            </div>
            <div className="product-price">{formatRupiah(product.price)}</div>
            <Link className="shopping-cart" onClick={() => addProduct(product)}><ShoppingCart/> <span>Add to cart</span></Link> 
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductDetail;
