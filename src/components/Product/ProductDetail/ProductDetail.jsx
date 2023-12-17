import React, { useEffect, useState } from "react";
import { ShoppingCart, Star, X } from "react-feather";
import { Link } from "react-router-dom";
import toggleModalBox from "../../../toggle/toggleModalBox";
import "./productDetailStyling.css";
// import kopi from "../../../assets/images/kopi1.jpg";
import { config } from "../../../config";
import { formatRupiah } from "../../../app/utils/currencyFormatter";

function ProductDetail({ product }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    toggleModalBox()
    setShowModal(true)
  }, []);

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
            <Link className="shopping-cart"><ShoppingCart/> <span>Add to cart</span></Link> 
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductDetail;
