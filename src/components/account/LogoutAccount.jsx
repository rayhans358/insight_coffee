// Import All needed dependencies
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Impprt action
import { userLogout } from "../../app/features/actions/authActions";

export default function LogoutAccount () {
  // Initial the useDispatch from react-redux. Dispatch an action, so that it triggers a global state change
  const dispatch = useDispatch();

  // Initial the useNavigate from react-router-dom. Navigate is used for going to another pages
  const navigate = useNavigate();

  // Event handler to click logout button and use sweetalert2
  function handleLogout () {
    Swal.fire({
      title: "Are you sure to Logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "btn btn-primary",
      confirmButtonText: "Yes",
      cancelButtonText: "Maybe Later"
    })
    .then((okay) => {
      if (okay) {
        dispatch(userLogout());
        Swal.fire("Logout Success!", "", "success")
        navigate('/')
      }
    })
  };

  return (
    <div className="float-right">
      <button onClick={handleLogout} type="button" className="w-[10rem] focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 mb-2 rounded">Logout</button>
    </div>
  )
};