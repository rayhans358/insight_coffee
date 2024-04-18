import React from "react";
import { useLocation, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

import "./resumeShoppingStyling.css";

import orderSucessCreated from "../../../../assets/images/orderSucessCreated.png";
import orderFailed from "../../../../assets/images/orderFailed.png";
import TotalShopping from "../../TotalShopping/TotalShopping";
import { createOrder } from "../../../../app/api/order";

function ResumeShopping({ selectedMethod }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedCourier, price  } = location.state;
  const address = localStorage.getItem("address")
    ? JSON.parse(localStorage.getItem("address"))
    : {};
  const cartItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {};

  async function handlePayment() {
    try {
      if (!selectedMethod) {
        Swal.fire({
          imageUrl: orderFailed,
          imageWidth: 225,
          imageHeight: 225,
          imageAlt: orderFailed,
          title: `You have not choosen a payment method, please choose a payment method first!`,
          showConfirmButton: false,
          timer: 1500
        });
        return;
      };

      let totalQty = 0;
      let totalShopping = 0;
      totalQty = cartItems.reduce((total, item) => total + parseInt(item.qty), 0);
      let subTotal = cartItems.reduce((total, item) => total + (parseInt(item.qty) * parseInt(item.price)), 0);
      totalShopping += subTotal + price;

      const order_items = cartItems.map(item => ({
        name: item.name,
        price: parseInt(item.price),
        qty: parseInt(item.qty),
        product: item._id
      }))
      
      const newOrder = await createOrder({
        delivery_courier: selectedCourier, 
        delivery_fee: price,
        delivery_address: address,
        totalQty: totalQty,
        subTotal: subTotal,
        totalShopping: totalShopping,
        order_items: order_items,
        paymentMethod: selectedMethod,
        status: 'waiting_payment'
      });

      Swal.fire({
        imageUrl: orderSucessCreated,
        imageWidth: 225,
        imageHeight: 225,
        imageAlt: orderSucessCreated,
        title: `Congratulations, you successfully created an order`,
        showConfirmButton: false,
        timer: 1500
      });

      console.log(newOrder, 'newOrder');
      navigate('/products');

    } catch (error) {
      console.error("Error processing payment:", error);
    };
  };

  return (
    <div className="resume-shopping">
      <div className="fill-resumeShopping">
        <TotalShopping
          selectedCourier={selectedCourier}
          price={price}
        />
        <div className="box-btn">
          <button className="payment-btn" onClick={handlePayment}>
            <span>Bayar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeShopping;