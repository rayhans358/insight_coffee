import React, { useEffect, useState } from "react";
import { Eye, ShoppingCart, Star } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import Swal from "sweetalert2";

import './productCardStyling.css';

import { config } from "../../../config";
import { formatRupiah } from "../../../app/utils/currencyFormatter";
import { addItem } from "../../../app/features/actions/cartActions";
import { getCategoryTagSearch, getProducts } from "../../../app/api/product";
import ProductDetail from "../ProductDetail/ProductDetail";
import CategoryTag from "../CategoryTag/CategoryTag";
import cartSecure from "../../../assets/images/cartSecure.png";

function ProductCard() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loadingDataProducts, setLoadingDataProducts] = useState(false);
  const keyword = useSelector((state) => state.product?.keyword || '');
  const isLoggedIn = !!localStorage.getItem("auth");
  
  useEffect(() => {
    if (keyword) {
      fetchProductsWithKeyword(keyword);
    } else {
      fetchProducts();
    };
  }, [keyword]);

  async function fetchProducts() {
    setLoadingDataProducts(true);
    try {
      const productsData = await getProducts();
      setProducts(productsData.data.data);
      // console.log(productsData.data.data, 'all product');

    } catch (error) {
      console.error('Error fetching products:', error);

    } finally {
      setLoadingDataProducts(false);
    };
  };

  async function fetchProductsWithKeyword(keywordParams) {
    setLoadingDataProducts(true);
    try {
      const productsData = await getCategoryTagSearch({ keyword: keywordParams });
      setProducts(productsData.data);
      // console.log(productsData.data, 'search product');
      
    } catch (error) {
      console.error('Error fetching products by keyword:', error);

    } finally {
      setLoadingDataProducts(false);
    };
  };

  async function fetchProductsByCategory(categoryId) {
    setLoadingDataProducts(true);
    try {
      const productsData = await getCategoryTagSearch({ category: categoryId })
      // console.log(productsData.data, 'category data')
      return productsData.data;

    } catch (error) {
      console.error('Error fetching products by category:', error)

    } finally {
      setLoadingDataProducts(false);
    };
  };

  async function fetchProductsByTag(tagId) {
    setLoadingDataProducts(true);
    try {
      const productsData = await getCategoryTagSearch({ tag: tagId })
      // console.log(productsData.data, 'tags data')
      return productsData.data;

    } catch (error) {
      console.error('Error fetching products by tag:', error);

    } finally {
      setLoadingDataProducts(false);
    };
  };

  function addProduct(product) {
    if (isLoggedIn) {
      dispatch(addItem(product))
    } else {
      Swal.fire({
        title: "Something gone wrong! Please Log In first!",
        imageUrl: cartSecure,
        imageHeight: 100,
        imageWidth: 100,
        imageAlt: cartSecure,
        showConfirmButton: false,
        timer: 2000
      });
    };
  };

  return (
    <div>
      <CategoryTag
        fetchProductsByCategory={fetchProductsByCategory}
        fetchProductsByTag={fetchProductsByTag}
        setProducts={setProducts}
      />
      
      <div className="row">
        {loadingDataProducts ? (
          <div className="loadingProducts-container">
            <div className="loadingProducts-content">
              <FadeLoader color={"#b6895b"} loading={true} size={30} /> 
            </div>
            <p className="loadingProducts-text">Loading products . . .</p>
          </div>
        ) : (
          Array.isArray(products) && products.length > 0 ? (
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
          )
        )}
      </div>
    </div>
  )
};

export default ProductCard;