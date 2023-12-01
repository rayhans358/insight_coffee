// Import All needed dependencies
import React from "react";
import { Link } from "react-router-dom";

// Import Hook useAddressData
import { useAddressData } from "../../app/hooks/useAddressData";

// DeliveryAddress gets prop from page Cart
export default function DeliveryAddress({setSelectAddress}) {
  // Get address data and status of fetching data
  const { data, status } = useAddressData();
  const addressData = data.data;

  // Event handler to change address value
  function handleAddress(e) {
    setSelectAddress(e.target.value)
  };

  return (
    <form className="lg:mt-0 lg:ml-0 xs:mt-2 xs:ml-[-1rem] lg:w-[32rem] xs:min-w-[20rem]">
      <h3 className="mb-2 text-xl font-bold">Choose Your Delivery Address</h3>
      <hr className="border-black" />

      {/* If there's no address, go to page account */}
      {data.count === 0 && (
        <Link to="/account">
          <button type="button" className="mt-2 mx-40 w-[10rem] focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 mb-2 rounded-full">Tambah Alamat</button>
        </Link>
      )}

      {/* If fetching data is success, then render the radio input */}
      {status === "success" && addressData.map((alamat, i) => {
        return (
          <div key={i} className="flex flex-col">
            <div className="flex m-4">
              <div className="flex items-center h-5">
                <input type="radio" name="address" onChange={handleAddress} className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" value={alamat._id} id={alamat.nama} />
              </div>

              <div className="ml-3 text-sm">
                <label htmlFor={alamat.nama} className="font-medium text-gray-900">{alamat.nama}</label>

                <div className="text-gray-500">
                  <span className="text-xs font-normal">{alamat.provinsi}, {alamat.kabupaten}, {alamat.kecamatan}, {alamat.kelurahan}, {alamat.detail}</span>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      <hr className="border-black" />
    </form>
  )
};