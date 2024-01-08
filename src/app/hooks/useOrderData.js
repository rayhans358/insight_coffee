// import react
import { useCallback, useEffect, useState } from "react";

// import API order
import { getOrder } from "../api/order";

// List of fetching status
const statusList = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error'
};

export function useOrderData() {
  // States
  let [data, setData] = useState([]);
  let [status, setStatus] = useState(statusList.idle);
  let [page, setPage] = useState(1);
  let [limit, setLimit] = useState(9);
  let [count, setCount] = useState(0);

  // Fetch order API
  let fetchOrderData = useCallback(
    async function() {
      setStatus(statusList.process)
      let { data, count, error } = await getOrder({ page, limit })

      if (error) {
        setStatus(statusList.error)
        return
      };

      setData(data);
      setStatus(statusList.success);
      setCount(count);
    }, [page, limit]
  );

  useEffect(() => {
    fetchOrderData()
  }, [fetchOrderData]);

  return {
    data,
    count,
    status,
    page,
    limit,
    setPage,
    setLimit
  }
};