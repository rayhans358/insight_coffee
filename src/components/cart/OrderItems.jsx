// Import All needed dependencies
import React from "react";
import { useDispatch } from "react-redux";

// Import actions and utility for formatting price to rupiah
import { decrementCheck, increment } from "../../app/features/actions/counterActions";
import { formatRupiah } from "../../app/utils/currencyFormatter";

export default function OrderItems({ name, qty, price, image, onItemIncrement, onItemDecrement }) {
  // Initial the useDispatch from react-redux. Dispatch an action, so that it triggers a global state change.
  const dispatch = useDispatch();

  // Event Handler to add or remove quantity of order item
  const handleAddQty = () => {
    onItemIncrement()
    dispatch(increment(1))
  };

  const handleSubtractQty = () => {
    onItemDecrement()
    dispatch(decrementCheck(1))
  };

  return (
    <div className="flex">
      <div className="my-2 mr-4">
        <img className="lg:w-24 lg:h-24 xs:w-20 xs:h-20" src={`http://localhost:3000/images/products/${image}`} alt="imgProduct" />
      </div>

      <div className="w-[12rem] my-2 py-2 lg:mr-64 xs:mr-20">
        <p className="mb-4 font-semibold">{name}</p>
        <div className="flex space-x-5">
          <button onClick={handleSubtractQty} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1  text-center inline-flex items-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
          </button>
          <p className="text-xl">{qty}</p>
          <button onClick={handleAddQty} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 text-center inline-flex items-center mr-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
          </button>
        </div>
      </div>

      <div className="my-2 py-2">
        <p>{`Rp. ${formatRupiah(price)}`}</p>
      </div>
    </div>
  )
};