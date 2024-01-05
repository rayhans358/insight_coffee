import React from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './productStyling.css';
import ProductDetail from '../../components/Product/ProductDetail/ProductDetail.jsx';
import ProductCard from '../../components/Product/ProductCard/ProductCard.jsx';

function Product() {
  return (
    <div>
      <Navbar/>
      <section id="product" className="product">
        <h2><span>Product</span> Us</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure error
          magni amet doloribus deserunt odit tenetur consectetur minus.
        </p>

        <div className="flex text-center">
          <div className="text-center2">
            <span>TYPE OF SERVICES AVAILABLE</span>
            <div>
              <span>Order  </span>
              <span>Pick-Up  </span>
              <span>Delivery  </span>
            </div>
          </div>
        </div>
        <ProductCard/>
      </section>

      {/* Modal Box Item Detail Start */}
      <ProductDetail/>
      <Footer/>
    </div>
  );
};

export default Product;