// Import all needed dependencies
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

// Fetching API from createOrder
import { createOrder } from "../app/api/order";

// Dotenv Config
import { config } from "../config";

// Hooks from useAddressData
import { useAddressData } from "../app/hooks/useAddressData";

// Actions
import { clearItem } from "../app/features/actions/cartActions";
import { set_null } from "../app/features/actions/counterActions";

// All needed Components
import Navbar from "../components/navbar/Navbar";
import ReviewOrder from "../components/cart/ReviewOrder";
import DeliveryAddress from "../components/cart/DeliveryAddress";

// Utilities
import { formatRupiah, sumPrice } from "../app/utils/currencyFormatter";

export default function Cart() {
  // status of fetching address data will be sent to component DeliveryAddress
  const { status } = useAddressData();
  
  // State
  // selected address will have value of address id
  const [selectedAddress, setSelectedAddress] = useState(null);

  // There are 2 steps
  // Step (0): Cart
  // Step (1): Payment Confirmation
  const [step, setStep] = useState(0);

  // navigate is used for going to another pages
  const navigate = useNavigate();

  // dispatch an action, so that it triggers a global state change
  const dispatch = useDispatch();
  
  // useSelector is function to read value from the global state and then return that result
  const cart = useSelector((state) => state.cart);

  // Event handle next or prev step
  const handleNext = () => {
    setStep(step + 1)
  };
  const handlePrev = () => {
    setStep(step - 1)
  };

  // Each step is 0, the selected address state is null. So that we can choose again the delivery address
  useEffect(() => {
    if (step === 0) {
      setSelectedAddress(null)
    }
  }, [step]);

  // Event handle to create new order
  async function handleCreateNewOrder() {
    let payload = {
      delivery_address: selectedAddress,
      delivery_fee: config.global_ongkir
    };

    // Confirm to creating order
    await Swal.fire({
      title: "Are you sure to create new order?",
      text: "Once created, you will not be able to undo your order!",
      icon: "question",
      buttons: true,
      dangerMode: true
    })
    .then(async(ok) => {
      // If Click ok
      if (ok) {
        // Fetch API of Create Order
        const { data } = await createOrder(payload);

        // If fetching API has error and delivery address is not choosen
        if (data.error && selectedAddress === null) {
          Swal.fire({
            title: "Something wrong!",
            icon: "error"
          })
        };

        // If fetching API success, there's a success message, clear cart item, set cart count to 0, go to invoice
        if (!data.error) {
          dispatch(clearItem())
          dispatch(set_null())
          navigate(`/invoice/${data._id}`)
          Swal.fire({
            title: "Invoice success created",
            icon: "success"
          });
        };
      } else {
        Swal.fire({
          title: "Please try again",
          text: "Create new order failed!",
          icon: "error"
        });
      };
    })
    .catch(() => {
      // if delivery address is not chosen, display message and go to step 0
      Swal.fire({
        title: "Something wrong!",
        text: "Please choose your adress before",
        icon: "error"
      });
    });
  };

  return (
    <div>
      <Navbar/>
      {/* If step is 0 */}
      {step === 0 && (
      <>
      <div className="container pl-[7.5rem] pt-20 xs:pt-48 lg:pt-20">
        <p className="mb-4">Cart</p>
      </div>
      <div className="flex">
        <div className="flex lg:flex-row xs:flex-col space-x-4 container pl-[7.5rem] my-4">
          <div>
            <ReviewOrder/>
          </div>
          <div>
            <DeliveryAddress status={status} setSelectedAddress={setSelectedAddress} />
          </div>
        </div>
      </div>
      <div className="container pl-[7.5rem] my-4">
        <div className="lg:w-[40rem] xs:min-w-[20rem]">
          <hr className="border-black" />
          <div className="flex justify-between">
            <p className="ml-4 font-bold">Total</p>
            {/* Sum of Price will be formatted in Rupiah */}
            <p className="font-bold">{`Rp. ${formatRupiah(sumPrice(cart))}`}</p>
          </div>
          <hr className="border-black" />
        </div>
      </div>
      <div className="container pl-[7.5rem] my-4">
        <button onClick={handleNext} type="button" className="lg:w-[70rem] md:w-[41rem] sm:w-[33rem] xs:w-[20rem] focus:outline-none text-white bg-[#149BFC] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mb-2 rounded-full">Next</button>
      </div>
      </>
      )}
      {/* If step is 1 */}
      {step === 1 && (
        <div className="container pl-[7.5rem] xs:pt-48 lg:pt-20">
          <div className="lg:w-[70rem] xs:min-w-[20rem]">
            <h3 className="my-5 text-2xl font-semibold">Confirm</h3>
            <hr className="border-black" />
            <div className="flex  justify-between">
              <p className="pl-3 py-3">Subtotal</p>
              {/* Subtotal will be formatted in Rupiah */}
              <p className="py-2 pr-2">{`Rp. ${formatRupiah(sumPrice(cart))}`}</p>
            </div>
            <hr className="border-black" />
            <div className="flex  justify-between">
              <p className="pl-3 py-3">Ongkir</p>
              {/* Shipping cost will be formatted in Rupiah */}
              <p className="py-2 pr-2">{`Rp. ${formatRupiah(2000)}`}</p>
            </div>
            <hr className="border-black" />
            <div className="flex justify-between">
              <p className="pl-3 py-3 text-xl font-bold">Total</p>
              {/* Total of payment will be formatted in Rupiah */}
              <p className="py-2 text-xl font-bold">{`Rp. ${formatRupiah(sumPrice(cart) + 2000)}`}</p>
            </div>
            <hr className="border-black" />
            <div className="flex my-4 lg:justify-between lg:flex-row xs:flex-col">
              <button onClick={handlePrev} type="button" className="lg:w-[10rem] xs:w-full focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium text-sm px-5 py-2.5 mb-2 rounded-full">Previous</button>
              <button onClick={handleCreateNewOrder} type="button" className="lg:w-[10rem] xs:w-full focus:outline-none text-white bg-[#149BFC] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mb-2 rounded-full">Payment</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
};