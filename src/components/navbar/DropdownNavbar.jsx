// Import All needed dependencies and Product Action
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCategory } from "../../app/features/actions/productActions";

export default function DropdownNavbar() {
  // Initial the useDispatch from react-redux. Dispatch an action, so that it triggers a global state change
  const dispatch = useDispatch();

  // useNavigate is used for going to another page
  const navigate = useNavigate();

  // Category options
  const options = [
    { label: 'Semua', value: '' },
    { label: 'Utama', value: 'Utama' },
    { label: 'Minuman', value: 'Minuman' },
    { label: 'Snack', value: 'Snack' },
    { label: 'Pastry', value: 'Pastry' }
  ];
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value)
    dispatch(setCategory(e.target.value))
    navigate('/')
  };

  return (
    <div className="px-3 py-1 flex items-center text-md uppercase font-semibold leading-snug text-white hover:opacity-75">
      <select title="category" className="cursor-pointer w-[6.5rem] mt-1 focus:shadow-none focus:outline- font-semibold border-0 text-white rounded bg-transparent p-0" value={value} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} className="text-black" value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
};