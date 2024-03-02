import React from 'react';

import "./dashboardStyling.css";

function Dashboard() {
  const auth = localStorage.getItem("auth") 
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return (
    <section id="dashboard-container" className="dashboard-container">
      <h3 className="text-dashboard">Dashboard</h3>
      <table className="table-dashboard">
        <tbody>
          <tr>
            <td>Full Name</td>
            <td>{auth.user !== null && auth.user.fullName}</td>
            <td className="edit-dashboard">[<span>edit</span>]</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{auth.user !== null && auth.user.email}</td>
            <td className="edit-dashboard">[<span>edit</span>]</td>
          </tr>
          <tr>
            <td>Nomor Handphone</td>
            <td>{auth.user !== null && auth.user.phoneNumber}</td>
            <td className="edit-dashboard">[<span>edit</span>]</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Dashboard;