// Import All needed dependencies
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Import API Login, authAction and rules
import { loginUser } from "../../app/api/auth";
import { userLogin } from "../../app/features/actions/authActions";
import { rules } from "./ValidationLogin";

export default function Login({showModal, setModal, setRegister}) {
  // Initial the useDispatch from react-redux. Dispatch an action, so that it triggers a global state change
  const dispatch = useDispatch();

  // useNavigate is used for going to another page
  const navigate = useNavigate();

  // Hooks for managing form
  const { register, handleSubmit, formState: {errors}, setError } = useForm();

  // If click button submit of login form
  async function handleSubmitForm(fromData) {
    const { data } = await loginUser(fromData);
    if (data.error) {
      setError('password', {
        type: 'invalidCredential',
        message: data.message
      })
    } else {
      const { user, token } = data
      Swal.fire({
        title: "Login Success!",
        text: "You have successfully login into your account",
        icon: "success"
      })
      dispatch(userLogin({ user, token }))
      localStorage.getItem("auth")
      setModal(false)
      navigate('/')
    }
  };

  return (
    <>
    {
      // If Login modal is active, render that
      showModal ? (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-sm">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-end p-2">
                <button onClick={() => setModal(!showModal)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toogle="authentication-modal">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </div>

              <form onSubmit={handleSubmit(handleSubmitForm)} action="#" className="w-[22rem] px-6 pb-3 space-y-3 lg:px-8 sm:pb-6 xl:pb-8">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Welcome to <span className="text-[#149BFC]">InsightCoffee</span></h3>
                <h1 className="text-[55px] font-bold">Login</h1>
                
                {/* Email */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                  <input {...register('email', rules.email)} type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your email" />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.email?.message}</p>
                  )}
                </div>
                
                {/* Password */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                  <input {...register('password', rules.password)} type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your password" />
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.password?.message}</p>
                  )}
                </div>

                {/* Forgot password */}
                <div className="float-right justify-between">
                  <p className="cursor-pointer text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot password?</p>
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>

                {/* Create new account */}
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?
                  <button onClick={() => setRegister(true)} type="button" className="text-blue-700 hover:underline dark:text-blue-500">Create account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Opacity */}
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null
    }
    </>
  )
};