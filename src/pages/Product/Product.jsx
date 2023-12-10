import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './productStyling.css';
// import menu from '../../assets/images/menu.jpg';
import kopi from '../../assets/images/kopi1.jpg';
import { Eye, ShoppingCart, Star, X } from 'react-feather';
import { Link } from 'react-router-dom';
import toggleModalBox from '../../toggle/toggleModalBox';

function Product() {
  useEffect(() => {
    toggleModalBox()
  }, []);

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

        <div className="row">
          <div className="product-card">
            <div className="product-icons">
              <Link><ShoppingCart/></Link>
              <Link className='item-detail-button'><Eye/></Link>
            </div>
            <div className="product-image">
              <img src={kopi} alt="Product 1" />
            </div>
            <div className="product-content">
              <h3>Coffee Beans 1</h3>
              <div className="product-stars">
                <Star className='star-full'/>
                <Star className='star-full'/>
                <Star className='star-full'/>
                <Star className='star-full'/>
                <Star className='star-full'/>
              </div>
              <div className="product-price">IDR 30K</div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-icons">
              <Link><ShoppingCart/></Link>
              <Link className='item-detail-button'><Eye/></Link>
            </div>
            <div className="product-image">
              <img src={kopi} alt="Product 1"/>
            </div>
            <div className="product-content">
              <h3>Coffee Beans 2</h3>
              <div className="product-stars">
                <Star className='star-full'/>
                <Star className='star-full'/>
                <Star className='star-full'/>
                <Star className='star-full'/>
                <Star/>
              </div>
              <div className="product-price">IDR 30K</div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-icons">
              <Link><ShoppingCart/></Link>
              <Link className='item-detail-button'><Eye/></Link>
            </div>
            <div className="product-image">
              <img src={kopi} alt="Product 1"/>
            </div>
            <div className="product-content">
              <h3>Coffee Beans 3</h3>
              <div className="product-stars">
                <Star className='star-full'/>
                <Star className='star-full'/>
                <Star className='star-full'/>
                <Star/>
                <Star/>
              </div>
              <div className="product-price">IDR 30K</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Box Item Detail Start */}
      <div className="modal" id="item-detail-modal">
        <div className="modal-container">
          <X className="close-icon"/>
          <div className="modal-content">
            <img src={kopi} alt="Product 1"/>
            <div className="product-content">
              <h3>Product 1</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias facere nesciunt repudiandae vitae cumque quaerat. Odio veniam ullam nesciunt vitae explicabo dolore iusto. Similique.</p>
              <div className="product-stars">
                <Star className='star-full'/>
                <Star className='star-full'/>
                <Star className='star-full'/>
                <Star className='star-full'/>
                <Star/>
              </div>
              <div className="product-price">IDR 30K</div>
              <Link><ShoppingCart/> <span>Add to cart</span></Link> 
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Product;