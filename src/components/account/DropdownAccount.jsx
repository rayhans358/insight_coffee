// Import React
import React from "react";

// Dropdown receives prop selectValue from page account
export default function DropdownAccount({selectValue}) {
  // Options
  const options = [
    { label: 'Profile', value: 'profile' },
    { label: 'Pemesanan', value: 'pemesanan'},
    { label: 'Alamat', value: 'alamat' }
  ];

  // Event handler to change the option value
  const handleChange = (e) => {
    selectValue(e.target.value)
  };

  return (
    <div>
      <select className="w-[7rem] focus:shadow-none focus:outline- font-semibold border-0 text-black rounded bg-transparent p-0 text-md" onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} className="text-black" value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
};