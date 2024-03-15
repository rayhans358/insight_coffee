import React from "react";
import { useLocation, useNavigate} from "react-router-dom";

import "./resumeShoppingStyling.css";

import TotalShopping from "../../TotalShopping/TotalShopping";
import { createOrder } from "../../../../app/api/order";

function ResumeShopping() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedCourier, price } = location.state;
  // const { address, cart } = localStorage;
  // const cartItems = JSON.parse(cart);
  const address = localStorage.getItem("address")
    ? JSON.parse(localStorage.getItem("address"))
    : {};
  const cartItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {};
  // console.log(address, 'address');
  // console.log(cart, 'cart');
  // console.log(location.state);

  // function generateInvoice(orderNumber, purchaseDate) {
  //   const invoiceNumber = orderNumber ? `INV-${orderNumber}` : '';
  //   const currentTime = new Date();
  //   const options = { hour12: false };
  //   const newPurchaseDate = currentTime.toLocaleString('id-ID', options).replace(/\./g, ':');
    
  //   const newInvoice = {
  //     invoiceNumber: invoiceNumber,
  //     orderNumber: orderNumber || '',
  //     purchaseDate: purchaseDate || newPurchaseDate
  //   };
  //   console.log(newInvoice, 'newInvoice');

  //   return newInvoice;
  // };

  async function handlePayment() {
    try {
      const cartName = cartItems.map(item => item.name);
      const unitPrice = cartItems.map(item => item.price);
      const qty = cartItems.map(item => item.qty).length;
      const totalQty = cartItems.reduce((total, item) => total + item.qty, 0);
      const totalPrice = cartItems.reduce((total, item) => total + (item.qty * item.price), 0);
      
      const newOrder = await createOrder({
        fullName: address.fullName,
        phoneNumber: address.phoneNumber,
        items: cartName,
        unit_price: unitPrice,
        qty: qty,
        total_qty: totalQty,
        totalPrice: totalPrice,
        totalShopping: totalPrice + price,
        // paymentMethod: method,
        delivery_courier: selectedCourier, 
        delivery_fee: price,
        delivery_address: address,
        status: 'waiting_payment'
      });

      // const newOrderResponse = newOrder.data
      // const invoice = generateInvoice(newOrderResponse);
      console.log(address.fullName, 'FN');
      console.log(address.phoneNumber, 'PN');
      console.log(cartName, 'Cart Name');
      console.log(unitPrice, 'Unit Price');
      console.log(qty, 'qty');
      console.log(totalQty, 'Total Qty');
      console.log(totalPrice, 'Total Price');
      console.log(totalPrice + price, 'Total Shopping');
      console.log(selectedCourier, 'selectedCourier');
      console.log(price, 'price');
      console.log(address, 'address');
      console.log(newOrder, 'order');
      // console.log(method, 'method');
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
          <button className="payment-btn"
           onClick={handlePayment}
           >
            <span>Bayar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeShopping;