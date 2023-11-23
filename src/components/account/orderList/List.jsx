// Import All needed dependencies
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatRupiah } from "../../../app/utils/currencyFormatter";

const List = ({ orderNumber, total, StatusPesanan, ListItem, orderId }) => {
  // State to showing detail of order
  const [showDetail, setShowDetail] = useState(false);

  // Navigate is used for going to another pages
  const navigate = useNavigate();

  return (
    <div>
      {/* Button to showing detail of order */}
      <button onClick={() => setShowDetail(!showDetail)} className="cursor-pointer text-black bg-transparent focus:ring-4 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button"><svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>#{orderNumber}</button>
      {/* If state of showDetail is true, then render order detail */}
      {showDetail === true ? (
        <div className="bg-[#149BFC] w-[68rem] ml-4">
          <div className="flex ml-10 pt-5">
            <div className="w-[6rem] bg-white mr-20 p-3">
              <p className="font-bold">Total</p>
            </div>
            <div className="w-[50rem] bg-white p-3">
              <p>{`Rp. ${formatRupiah(total)}`}</p>
            </div>
          </div>

          <div className="flex ml-10 py-5">
            <div className="w-[6rem] bg-white mr-20 p-3">
              <p className="font-bold">Status</p>
            </div>
            <div className="w-[50rem] bg-white p-3">
              <p>{StatusPesanan}</p>
            </div>
          </div>

          <div className="flex ml-10 py-5 space-x-80">
            <div className="w-[7rem] bg-white p-3">
              <p className="font-bold text-center">Barang</p>
            </div>
            <div className="w-[7rem] bg-white p-3">
              <p className="font-bold text-center">Jumlah</p>
            </div>
            <div className="w-[7rem] bg-white ml-1 p-3">
              <p className="font-bold text-center">Total Harga</p>
            </div>
          </div>

          <hr className="border-black w-[65rem] ml-3"/>
          <div className="w-[61rem] bg-white ml-10 my-4">
            {/* List of item */}
            {ListItem.map((item, i) => {
              return (
                <div key={i} className="flex ml-10 py-5 space-x-[22rem]">
                  <div className="w-[7rem]">
                    <p>{item.name}</p>
                  </div>
                  <p>{item.qty}</p>
                  <p>{`Rp. ${formatRupiah(item.price * item.qty)}`}</p>
                </div>
              )
            })}
          </div>

          <div className="ml-[56rem]">
            {/* Go to invoice by order id */}
            <button onClick={() => navigate(`/invoice/${orderId}`)} type="button" className="w-[8rem] focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 rounded-full">Invoice</button>
          </div>
        </div>
      ) : null}
    </div>
  )
};

export default List;