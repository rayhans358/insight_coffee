import React, { useEffect, useState } from "react";
import { Eye, ShoppingCart, Star } from "react-feather";
import { Link } from "react-router-dom";
import { getProducts } from "../../../app/api/product";
import { formatRupiah } from "../../../app/utils/currencyFormatter";
import { config } from "../../../config";
import ProductDetail from "../ProductDetail/ProductDetail";
import './productCardStyling.css';

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsData = await getProducts();
        setProducts(productsData.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="row">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <div className="product-icons">
            <Link onClick={() => setSelectedProduct(product)}><ShoppingCart/></Link>
            <Link className='item-detail-button' onClick={() => setSelectedProduct(product)}><Eye/></Link>
          </div>
          <div className="product-image">
            <img src={`${config.api_host}/images/products/${product.image_url}`} alt={product.name} />
          </div>
          {selectedProduct && <ProductDetail product={selectedProduct} />}
          <div className="product-content">
            <h3>{product.name}</h3>
            <div className="product-stars">
              {[...Array(product.stars)].map((_, index) => (
                <Star key={index}/>
              ))}
            </div>
            <div className="product-price">{formatRupiah(product.price)}</div>
            <div className="product-tags">
              <span className="tag">{product.tags.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default ProductCard;
