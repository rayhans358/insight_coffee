// Import All needed dependencies, Validation Rules and API Register
import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../../app/api/auth";
import Swal from "sweetalert2";
import rules from "./ValidationRegister";


const statusList = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error'
};

export default function Register({ setRegister, setModal, showModal }) {
  // State of status fetching
  const [status, setStatus] = useState(statusList.idle);

  // Hooks for managing firm
  const { register, handleSubmit, formState: { errors }, setError } = useForm();

  // If click button submit of register form
  async function handleSubmitForm(fromData) {
    // Get data password and passwordConfirm
    const { password, passwordConfirm } = fromData;

    // If password is not same as passwordConfirm
    if (password !== passwordConfirm) {
      return setError (
        'passwordConfirm', {
          type: 'equality', message: 'Password konfirmasi harus sama dengan password'
        }
      )
    };

    // Begin fetch API register
    setStatus(statusList.process);

    // Get data from API
    const { data } = await registerUser(fromData);

    // If fetching has error
    if (data.error) {
      let fields = Object.keys(data.fields);
      fields.forEach((fields) => {
        setError(fields, {
          type: 'server',
          message: data.fields[fields]?.properties?.message
        })
      })
      setStatus(statusList.error);
    } else {
      Swal.fire({
        title: "Successfully Registered!",
        text: "Please Login",
        icon: "success"
      });
      setRegister(false)
    };
  };

  const handleClickX = () => {
    setModal(!showModal)
    setRegister(false)
  };

  return (
    <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-sm">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex justify-end p-2">
            <button onClick={handleClickX} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit(handleSubmitForm)} className="w-[22rem] px-6 pb-3 space-y-1 lg:px-8 sm:pb-6 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Welcome to <span className="text-[#149BFC]">InsightCoffee</span></h3>
            <h1 className="text-[45px] font-bold">Register</h1>
            {/* Full Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Full Name</label>
              <input {...register('full_name', rules.full_name)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Please type your full name here" />
              {errors.full_name && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.full_name?.message}</p>
              )}
            </div>
            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
              <input {...register('email', rules.email)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="please type your email here" />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.email?.message}</p>
              )}
            </div>
            {/* Password */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
              <input {...register('password', rules.password)} type="password" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
              {errors.password && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.password?.message}</p>
              )}
            </div>
            {/* Confirm Password */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm Your Password</label>
              <input {...register('passwordConfirm', rules.passwordConfirm)} type="password" placeholder="Repeat your password here"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
              {errors.passwordConfirm && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.passwordConfirm?.message}</p>
              )}
            </div>
            {/* Button submit */}
            <button disabled={status === statusList.process} type="submit" className="w-full mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {status === statusList.process ? "Loading..." : "Create a new account"}
            </button>
            {/* Already registered */}
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already registered? 
              <button onClick={() => setRegister(false)} type="button" className="text-blue-700 hover:underline dark:text-blue-500">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* Opacity */}
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
};