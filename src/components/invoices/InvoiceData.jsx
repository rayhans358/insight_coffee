// Import needed dependencies and dotenv from config
import { Link } from "react-router-dom";
import { config } from "../../config";

// InvoiceData gets props from page Invoice
export default function InvoiceData({ status, orderId, total, userName, email, addressDetail, kelurahan, kecamatan, kabupaten, provinsi }) {
  return (
    <div className="lg:w-[70rem] xs:min-w-[20rem]">
      <h3 className="my-5 text-2xl font-semibold">Invoices</h3>
      <hr className="border-black" />
      <div className="flex justify-between">
        <div className="w-28">
          <p className="pl-3 py-3">Status</p>
        </div>
        <p className="py-2">{status}</p>
      </div>
      <hr className="border-black" />
      <div className="flex justify-between">
        <div className="w-28">
          <p className="pl-3 py-3">Order ID</p>
        </div>
        <p className="py-2">#{orderId}</p>
      </div>
      <hr className="border-black" />
      <div className="flex justify-between">
        <div className="w-56">
          <p className="pl-3">Total Amount (incl. Shipping)</p>
        </div>
        <p className="py-2">{`Rp. ${total}`}</p>
      </div>
      <hr className="border-black" />
      <div className="flex my-4 lg:flex-row xs:flex-col lg:justify-around xs:justify-between">
        <div>
          <div className="ml-3">
            <p>Billed to :</p>
          </div>
          <div className="py-4 ml-3 text-sm">
            <p className="font-semibold text-gray-900 dark:text-gray-300 uppercase">{userName}</p>
            <div className="text-gray-600">
              <span className="text-xs font-normal">{email}</span>
            </div>
          </div>
          <div className="py-4 ml-3 text-sm">
            <p className="font-medium text-gray-900 dark:text-gray-300">{addressDetail}</p>
            <div className="text-gray-600">
              <span className="text-xs font-normal">
                {provinsi}, {kabupaten}, {kecamatan}, {kelurahan}, {addressDetail}
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="ml-3">
            <p>Payment to :</p>
          </div>
          <div className="py-4 ml-3 text-sm">
            <p className="font-semibold text-gray-900 uppercase">{config.owner}</p>
            <div className="text-gray-600">
              <span className="text-xs font-normal">{config.contact}</span>
            </div>
            <div className="text-gray-600">
              <span className="text-xs font-normal">{config.billing.bank_name}</span>
            </div>
            <div className="text-gray-600">
              <span className="text-xs font-normal">{config.billing.account_no}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="float-right my-4">
        {/* Button to home */}
        <Link to='/'>
          <button type="button" className="w-[10rem] focus:outline-none text-white bg-[#149BFC] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mb-2 rounded">Back To Home</button>
        </Link>
      </div>
    </div>
  )
};