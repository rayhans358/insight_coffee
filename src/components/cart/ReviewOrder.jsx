// Import All needed dependencies
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Import Component and Actions
import OrderItems from "./OrderItems";
import { addItem, removeItem } from "../../app/features/actions/cartActions";

export default function ReviewOrder() {
  // Selector is function to read value from the global state and then return that result
  const carts = useSelector((state) => state.cart);

  // Initial the useDispatch from react-redux. Dispatch an action, so that it triggers a global state change
  const dispatch = useDispatch();

  // navigate is used for going to another pages
  const navigate = useNavigate();

  // Each carts data changes, useEffect will be called
  useEffect(() => {
    carts.length === 0 && navigate("/")
  }, [carts, navigate]);

  return (
    <div className="lg:w-[40rem] xs:min-w-[20rem]">
      <h3 className="mb-2 text-xl font-bold">Review Your Order</h3>
      <hr className="border-black" />
      {/* Order Items */}
      {carts.map((cart, i) => {
        return <OrderItems 
          key={i} 
          name={cart.name} 
          qty={cart.qty} 
          price={cart.price * cart.qty} 
          image={cart.image_url}
          onItemIncrement={() => dispatch(addItem(cart))} 
          onItemDecrement={() => dispatch(removeItem(cart))} 
        />
      })}
      <hr className="border-black" />
    </div>
  )
};