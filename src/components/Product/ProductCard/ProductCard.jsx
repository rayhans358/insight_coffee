import React, { useEffect, useState } from "react";
import { Eye, ShoppingCart, Star } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import './productCardStyling.css';

import { config } from "../../../config";
import { formatRupiah } from "../../../app/utils/currencyFormatter";
import { addItem } from "../../../app/features/actions/cartActions";
import ProductDetail from "../ProductDetail/ProductDetail";
import CategoryTag from "../CategoryTag/CategoryTag";
import { getCategoryTagSearch, getProducts } from "../../../app/api/product";

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const keyword = useSelector((state) => state.product?.keyword || '');
  const dispatch = useDispatch();
  
  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsData = await getProducts();
        setProducts(productsData.data.data);
        // console.log(productsData.data.data, 'all product');
  
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    async function fetchProductsWithKeyword(keywordParams) {
      try {
        const productsData = await getCategoryTagSearch({ keyword: keywordParams });
        setProducts(productsData.data);
        // console.log(productsData.data, 'search product');
      } catch (error) {
        console.error('Error fetching products by keyword:', error);
      }
    }

    if (keyword) {
      fetchProductsWithKeyword(keyword);
    } else {
      fetchProducts();
    }
  }, [keyword]);

  async function fetchProductsByCategory(categoryId) {
    try {
      const productsData = await getCategoryTagSearch({ category: categoryId })
      // console.log(productsData.data, 'category data')
      return productsData.data;

    } catch (error) {
      console.error('Error fetching products by category:', error)
    };
  };

  async function fetchProductsByTag(tagId) {
    try {
      const productsData = await getCategoryTagSearch({ tag: tagId })
      // console.log(productsData.data, 'tags data')
      return productsData.data;

    } catch (error) {
      console.error('Error fetching products by tag:', error);
    };
  };

  function addProduct(product) {
    dispatch(addItem(product))
  };

  return (
    <>
    <CategoryTag
      fetchProductsByCategory={fetchProductsByCategory}
      fetchProductsByTag={fetchProductsByTag}
      setProducts={setProducts}
    />
    
    <div className="row">
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-icons">
              <Link onClick={() => addProduct(product)}><ShoppingCart/></Link>
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
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
    </>
  )
};

export default ProductCard;