// Import All needed dependencies
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "react-bootstrap";

// Import All needed Actions
import { addItem, clearItem } from "../app/features/actions/cartActions";
import { set_null } from "../app/features/actions/counterActions";
import fetchProduct, { goToNextPage, goToPrevPage, setPage } from "../app/features/actions/productActions";

// Import List of Tags
import { categoryTags, tagList } from "../components/home/TagList";

// Import All needed Components
import { formatRupiah } from "../app/utils/currencyFormatter";
import Navbar from "../components/navbar/Navbar";
import Tags from "../components/home/Tags";
import ProductCard from "../components/home/ProductCard";
import Register from "../components/register/Register";
import Login from "../components/login/Login";

export default function Home() {
  // Initial the useDispatch and useSelector from react-redux. Dispatch an action, so that it triggers a global state change
  const dispatch = useDispatch();

  // Selector is function to read value from the global state and then return that result
  const products = useSelector((state) => state.product);
  const auth = useSelector((state) => state.auth);

  // State
  // This two States are used to trigger showing modal of Login and Register with the initial value false. If true then component Login or Register Modal will be mounted
  const [showModal, setShowModal] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // Each dispatch of action triggers, cart item is empty and cart counter is 0 
  useEffect(() => {
    dispatch(clearItem())
    dispatch(set_null())
  }, [dispatch]);

  // Each dispatch of action triggers and global state of products changes, the product fetching begins
  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch, products.currentPage, products.keyword, products.category, products.tags]);

  return (
    <div>
      {/* If no user exists, the Login and Register Modal will be mounted if we want to add item cart, check the cart, or go to account page */}
      {auth.user === null ? (
        <Navbar modal={setShowModal}/>
      ) : <Navbar/>}
      <div className="container pl-[7.5rem] xs:pt-48 lg:pt-20">
        <p className="mb-4">Home</p>
        <div className="flex flex-wrap md:w-full xs:w-48">
          {/* If there's no Category, render all tags */}
          {products.category === "" && tagList.map((value, i) => {
            return (
              <Tags key={i} value={value}/>
            )
          })}
          {/* If there's category Utama, render all tags by category Utama */}
          {products.category === "Utama" && categoryTags.Utama.map((value, i) => {
            return (
              <Tags key={i} value={value}/>
            )
          })}
          {/* If there's category Minuman, render all tags by category Minuman */}
          {products.category === "Minuman" && categoryTags.Minuman.map((value, i) => {
            return (
              <Tags key={i} value={value}/>
            )
          })}
          {/* If there's category Snack, render all tags by category Snack */}
          {products.category === "Snack" && categoryTags.Snack.map((value, i) => {
            return (
              <Tags key={i} value={value}/>
            )
          })}
          {/* If there's category Pastry, render all tags by category Pastry */}
          {products.category === "Pastry" && categoryTags.Pastry.map((value, i) => {
            return (
              <Tags key={i} value={value}/>
            )
          })}
        </div>
      </div>
      {/* If there's process of fetching product, render loader spinner, else render the product cards */}
      { products.status === 'process' ? (
        <div className="container flex justify-center flex-wrap pl-[7.5rem] my-4">
          <svg role="status" className="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
        </div>
      ) : (
        <div className="container flex flex-wrap pl-[7.5rem] my-4">
          {/* Just render product card if there's at least one product */}
          {products.data.length > 0 && products.data.map((product, i) => {
            return (
              <div key={i}>
                <ProductCard title={product.name} imgUrl={`http://localhost:3000/images/products/${product.image_url}`} price={formatRupiah(product.price)} desc={product.description} tag={product.tag} addToCart={() => dispatch(addItem(product))} modal={setShowModal}/>
              </div>
            )
          })}
        </div>
      )}

      {/* Pagination by React Bootstrap */}
      <div className="container pl-[7.5rem] my-4">
        <Pagination>
          <Pagination.Prev onClick={(_) => dispatch(goToPrevPage())}/>
          {Array.from({ length: products.totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <Pagination.Item key={pageNumber} active={pageNumber === products.currentPage} onClick={() => dispatch(setPage(pageNumber))}>
              {pageNumber}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => dispatch(goToNextPage())}/>
        </Pagination>
      </div>

      {/* If no user exists, then show either Login or Register Modal */}
      {auth.user === null && showRegister ?
        <Register showModal={showModal} setRegister={setShowRegister} setModal={setShowModal}/>
      : 
        <Login showModal={showModal} setRegister={setShowRegister} setModal={setShowModal}/>
      }
    </div>
  )
};