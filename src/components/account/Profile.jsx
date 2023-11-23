// Import All needed dependencies
import React from "react";
import { useSelector } from "react-redux";
import LogoutAccount from "./LogoutAccount";

export default function Profile() {
  // useSelector is function to read value from the global state and then return that result
  const auth = useSelector(state => state.auth);

  return (
    <div>
      <div className="bg-[#149BFC] lg:w-[68rem] xs:min-w-[20rem] ml-4">
        <div className="flex ml-10 pt-5">
          <div className="lg:w-[6rem] xs:w-[4rem] bg-white mr-20 p-3">
            <p className="font-bold">Name</p>
          </div>

          <div className="lg:w-[50rem] sm:w-[16rem] xs:w-[6rem] bg-white p-3">
            {/* If user has logged in, show the name */}
            <p>{auth.user !== null && auth.user.full_name}</p>
          </div>
        </div>

        <div className="flex ml-10 py-5">
          <div className="lg:w-[6rem] xs:w-[4rem] bg-white mr-20 p-3">
            <p className="font-bold">Email</p>
          </div>

          <div className="overflow-x-auto lg:w-[50rem] sm:w-[16rem] xs:w-[6rem] bg-white p-3">
            {/* If user has logged in, show the email */}
            <p>{auth.user !== null && auth.user.email}</p>
          </div>
        </div>

        <div className="container pl-[7.5rem] my-4">
          <LogoutAccount />
        </div>
      </div>
    </div>
  )
}