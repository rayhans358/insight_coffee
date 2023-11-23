import { useCallback, useEffect, useState } from "react";

// Import API order
import { getOrder } from "../../../app/api/order";
import List from "./List";

// Order List receives props from Account Page
const OrderList = ({optionValue}) => {
  // State
  const [daftarPesanan, setDaftarPesanan] = useState([]);
  const [status, setStatus] = useState("idle");
  const [page] = useState(1);
  const [limit] = useState(30);

  // Fetching Order
  const fetchPesanan = useCallback(async () => {
    setStatus("process");

    let { data } = await getOrder({ limit, page });

    if (data.error) {
      setStatus("error")
      return
    };

    setDaftarPesanan(data.data)
    setStatus("success")
  }, [page, limit]);

  useEffect(() => {
    fetchPesanan()
  }, [fetchPesanan, optionValue]);

  return (
    <div>
      {/* If fetching status is success the render the order list */}
      {status === "success" && daftarPesanan.map((pesanan, i) => {
        return (
          <List
            key={i}
            orderNumber={pesanan.order_number}
            total={pesanan.order_items.map(daftar => daftar.price * daftar.qty).reduce((partialSum, a) => partialSum + a, 0)}
            StatusPesanan={pesanan.status}
            ListItem={pesanan.order_items}
            orderId={pesanan.id}
          />
        )
      })}
    </div>
  )
};

export default OrderList;