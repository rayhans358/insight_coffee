// Import useEffect, Custom Hooks useAddressData and all needed components
import { useState } from "react";
import { useAddressData } from "../app/hooks/useAddressData";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import DropdownAccount from "../components/account/DropdownAccount";
import Profile from "../components/account/Profile";
import OrderList from "../components/account/orderList/OrderList";
import Address from "../components/account/address/Address";

export default function Account() {
  // State
  const [optionValue, setOptionValue] = useState('profile');
  const [showForm, setShowForm] = useState(false);

  // Use Address Data as props value to Component Address
  const { data, fetchAddress } = useAddressData();
  const addressData = data.data;

  // get auth state with useSelector
  const auth = useSelector((state) => state.auth);

  // redirect to home useNavigate
  const navigate = useNavigate();

  // Each state changes and page account is mounted, address API will be fetched
  useEffect(() => {
    fetchAddress()
  }, [optionValue, showForm, fetchAddress]);

  // If no user exist, then redirect to home page
  useEffect(() => {
    if (auth.user === null) {
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  }, [auth, navigate]);

  return (
    <div>
      <Navbar/>
      {auth.user !== null ? (
        <>
        <div className="container pl-[7.5rem] xs:pt-48 lg:pt-20">
          <p className="mb-4">Account</p>
        </div>
        <div className="container pl-[7.5rem] my-4">
          {/* Value of dropdown will be captured into state OptionValue */}
          <DropdownAccount selectValue={setOptionValue}/>
        </div>
        <div className="container pl-[7.5rem] my-4">
          {/* Components will be mounted depends on option value */}
          { optionValue === 'profile' && <Profile/> }
          { optionValue === 'pemesanan' && <OrderList optionValue={optionValue} />}
          { optionValue === 'alamat' && <Address addressData={addressData} setOption={setOptionValue} setShowForm={setShowForm} />}
        </div>
        </>
      ) : (
        <div className="container pl-[7.5rem] xs:pt-48 lg:pt-20">
          <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
            <span className="font-medium">No user exist!</span> Please sign in first to show your account details
          </div>
        </div>
      )}
    </div>
  )
};