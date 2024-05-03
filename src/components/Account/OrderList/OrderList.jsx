import React, { useEffect, useState } from 'react';
import { FadeLoader } from 'react-spinners';

import "./orderListStyling.css";

import orderEmpty from "../../../assets/images/orderEmpty.png";
import { getOrder } from '../../../app/api/order';
import { formatRupiah } from '../../../app/utils/currencyFormatter';

function OrderList() {
  const [orderListed, setOrderListed] = useState([]);
  const [loadingDataOrder, setLoadingDataOrder] = useState(false);

  async function fetchOrderList() {
    setLoadingDataOrder(true);
    try {
      const response = await getOrder();
      setOrderListed(response.data.data);

    } catch (error) {
      console.error("Error fetching Order List:", error);
    } finally {
      setLoadingDataOrder(false);
    };
  };

  useEffect(() => {
    fetchOrderList();
  }, []);

  return (
    <section id="orderList-container" className="orderList-container">
      <h3 className="text-orderList">Pemesanan</h3>
      {loadingDataOrder ? (
        <div className="loadingOrder-container">
          <div className="loadingOrder-content">
            <FadeLoader color={"#b6895b"} loading={true} size={30} /> 
          </div>
          <p className="loadingOrder-text">Loading Order History . . .</p>
        </div>
      ) : (
        <table className="table-orderList">
          <thead>
            <tr>
              <th style={{width: '5%'}}>Order ID</th>
              <th>Detail</th>
              <th>Jumlah Barang</th>
              <th>Total Belanja</th>
              <th>Status Pembayaran</th>
              <th>Invoice</th>
            </tr>
          </thead>
          <tbody>
            {orderListed.length === 0 ? (
              <tr>
                <td colSpan="6" className="order-empty">
                  <img src={orderEmpty} alt={orderEmpty} /> <br /> No order history <br /> Please order first
                </td>
              </tr>
            ) : (
              orderListed.map((order, index) => (
                <tr key={index} className="fill-orderContent">
                  <td style={{width: '5%'}}>{order.order_number}</td>
                  <td style={{textAlign: "justify"}}>{order.delivery_address.fullName}, {order.delivery_address.phoneNumber}</td>
                  <td>{order.totalQty}</td>
                  <td>{formatRupiah(order.totalShopping)}</td>
                  <td>{order.status}</td>
                  <td className="invoice">Invoice</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default OrderList;