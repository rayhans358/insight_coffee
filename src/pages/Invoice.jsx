// Import all needed dependencies
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

// Import API from invoice, all needed components and utility format rupiah
import { getInvoiceByOrderId } from "../app/api/invoice";
import Navbar from "../components/navbar/Navbar";
import InvoiceData from "../components/invoices/InvoiceData";
import { formatRupiah } from "../app/utils/currencyFormatter";

export default function Invoice() {
  // order_id as parameter
  const { order_id } = useParams();

  // State
  const [invoice, setInvoice] = useState({});
  const [error, setError] = useState("");
  const [status, setStatus] = useState("process");

  // useNavigate
  const navigate = useNavigate();

  // Each order item change, fetch API of getInvoiceByOrderId
  useEffect(() => {
    getInvoiceByOrderId(order_id)
      .then(({ data }) => {
        if (data.error) {
          setError(data.message)
          Swal.fire({
            title: "No invoice available",
            text: "",
            icon: "error"
          });
          setTimeout(() => {
            navigate('/')
          }, 2500)
        };
        setInvoice(data)
      })
      .catch((err) => setError(err.message))
      .finally((_) => setStatus('success'));
  }, [order_id, navigate]);

  return (
    <div>
      <Navbar/>
      <div className="container pl-[7.5rem] xs:pt-48 lg:pt-20">
        {status === 'process' && (
          <p>Loading...</p>
        )}
        {/* If fetching status is success and no error, invoice component will be rendered */}
        {(status === 'success' && error === '') && (
          <InvoiceData
            status={invoice?.payment_status}
            orderId={invoice?.order?.order_number}
            total={formatRupiah(invoice?.total)}
            userName={invoice?.user?.full_name}
            email={invoice?.user?.email}
            addressDetail={invoice?.delivery_address?.detail}
            kelurahan={invoice?.delivery_address?.kelurahan}
            kecamatan={invoice?.delivery_address?.kecamatan}
            kabupaten={invoice?.delivery_address?.kabupaten}
            provinsi={invoice?.delivery_address?.provinsi}
          />
        )}
      </div>
    </div>
  )
};