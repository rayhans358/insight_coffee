// Import All needed dependencies
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCategory } from '../app/features/actions/productActions';

// Import Action
// import { setCategory } from '../../app/Features/Product/actions';

const Dropdown = () => {
  // Initial the useDispatch from redux
  // Dispatch an action, so that it triggers a global state change
  const dispatch = useDispatch();

  // useNavigate is used for going to another page
  const navigate = useNavigate();

  // Category Options
  const options = [
      { label: 'Semua', value: ''},
      { label: 'Utama', value: 'Utama'},
      { label: 'Minuman', value: 'Minuman'},
      { label: 'Snack', value: 'Snack'},
      { label: 'Pastry', value: 'Pastry'},
  ]

  // State of value
  const [value, setValue] = React.useState('');

  // If option value changes, state also changes, setCategory action triggers and go to home
  const handleChange = (e) => {
    setValue(e.target.value)
    dispatch(setCategory(e.target.value));
    navigate('/')
  };

  return (
    <div className='px-3 py-1 flex items-center text-md uppercase font-semibold leading-snug text-white hover:opacity-75'>
      <select title='category' className="cursor-pointer w-[6.5rem] mt-1 focus:shadow-none focus:outline- font-semibold border-0 text-white rounded bg-transparent p-0" value={value} onChange={handleChange}>
          {options.map((option,index) => (
            <option key={index} className='text-black' value={option.value}>{option.label}</option>
          ))}
      </select>
    </div>
  )
}

export default Dropdown