const { useState } = require("react");
const { default: AddressForm } = require("./AddressForm");

const Address = ({ addressData, setOption, setShowForm }) => {
  // State
  // This state is used for showing address form
  const [showAddressForm, setShowAddressForm] = useState(false);

  return (
    <div>
      {/* If the state address form is active, then react will render component address form */}
      {showAddressForm && (
        <AddressForm
          option={setOption}
          setShowForm={setShowAddressForm}
          isFormNotShowing={setShowForm}
        />
      )}
      {/* If the state address form is inactive, react just render button add address and table of address data */}
      {!showAddressForm && (
        <>
        <button 
          onClick={() => setShowAddressForm(true)}
          type="button"
          className="w-[10rem] focus:outline-none text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mb-2 rounded"
        >Tambah Alamat</button>

        <div className="m-3">
          <table className="lg:w-[68rem] xs:min-w-[18rem] text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-blue-300">
              <tr>
                <th scope="col" className="px-3 py-3">
                  Nama
                </th>
                <th scope="col" className="pl-16 py-3">
                  Detail
                </th>
              </tr>
            </thead>

            {/* Address Data */}
            {addressData.map((data, i) => {
              return (
                <tbody key={i}>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap">{data.nama}</th>
                    <td className="pl-16 py-3">
                      {data.provinsi}, {data.kabupaten}, {data.kecamatan}, {" "}
                      {data.kelurahan}, {data.detail}
                    </td>
                  </tr>
                </tbody>
              )
            })}
          </table>
        </div>
        </>
      )}
    </div>
  )
};

export default Address;