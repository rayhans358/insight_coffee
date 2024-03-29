import { useCallback, useEffect, useState } from "react";

import { getAddress } from "../api/address";

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error"
};

export function useAddressData() {
  let [data, setData] = useState([]);
  let [count, setCount] = useState(0);
  let [status, setStatus] = useState(statusList.idle);
  let [page, setPage] = useState(1);
  let [limit, setLimit] = useState(9);

  let fetchAddress = useCallback(
    async function() {
      setStatus(statusList.process)
      let { data, count, error } = await getAddress({ page, limit })

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
    fetchAddress()
  }, [fetchAddress]);

  return {
    data,
    count,
    status,
    page,
    limit,
    setPage,
    setLimit,
    fetchAddress
  };
};