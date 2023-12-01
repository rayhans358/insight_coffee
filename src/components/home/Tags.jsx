// Import All needed dependencies
const { useState, useEffect } = require("react");
const { useSelector, useDispatch } = require("react-redux");

// Import Products Action
const { setTags, setPage } = require("../../app/features/actions/productActions");

// Receive prop value from page Product
const Tags = ({ value }) => {
  const [active, setActive] = useState(false);

  // Initial the useDispatch and useSelector from react-redux. useSelector is function to read value from the global state and then return that result
  const products = useSelector((state) => state.product);
  // Dispatch an action, so that it triggers a global state change
  const dispatch = useDispatch();

  // Event handler click tag on
  const handleClickTagOn = (e) => {
    setActive(true)
    dispatch(setTags([
      ...products.tags,
      e.target.innerText
    ]))
  };

  // Event handler click tag off
  const handleClickTagOff = (e) => {
    setActive(false)
    dispatch(setTags(
      [...products.tags]
      .filter(value => value !== e.target.innerText)
    ))
  };

  // Each state active changes and dispatch triggers, set currentPage to page 1
  useEffect(() => {
    dispatch(setPage(1))
  }, [active, dispatch]);

  return (
    <div>
      {/* If event click triggers, button background will change */}
      {active ? (
        <button onClick={handleClickTagOff} className="bg-blue-600  text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded focus:outline-0 focus:border-0 dark:bg-blue-200 dark:text-blue-800">{value}</button>
      ): <button onClick={handleClickTagOn} className="bg-blue-100 hover:bg-blue-600 hover:text-white focus:outline-0 focus:border-0    text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{value}</button>}
    </div>
  )
};

export default Tags;