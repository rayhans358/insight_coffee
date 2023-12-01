import { useDispatch, useSelector } from "react-redux";

// Import Counter Action
import { increment } from "../../app/features/actions/counterActions";

// Receive prop value from page Product
const ProductCard = ({ title, imgUrl, price, desc, tag, modal, addToCart }) => {
  // Initial the useSelector and useDispatch from react-redux. useSelector is function to read value from the global state and then return that result, Dispatch an action, so that it triggers a global state change
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  // Event handle click add to product
  const handleAddProduct = () => {
    // If no user exists show login modal. Else cartCount will increment and chosen product will be added in cart
    user === null ? modal(true) : dispatch(increment(1)) && addToCart()
  };

  return (
    <div className="max-w-[17rem] mr-3 my-2  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div>
        <img className="rounded-lg mx-auto mt-4 w-24 h-24" src={imgUrl} alt="productImage" />
      </div>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`Rp. ${price}`}</h5>
        <h3 className="mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h3>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{tag}</span>
        <p className="truncate mt-2 mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
        <button onClick={handleAddProduct} className="w-[14rem] inline-flex items-center py-2 pl-16 text-sm font-medium text-white bg-[#149BFC] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Add to Cart
          <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        </button>
      </div>
    </div>
  )
};

export default ProductCard;