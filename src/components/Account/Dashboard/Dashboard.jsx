import React from 'react';

import "./dashboardStyling.css";

function Dashboard() {
  return (
    <section id="dashboard-container" className="dashboard-container">
      <h3 className="text-dashboard">Dashboard</h3>
      <table className="table-dashboard">
        <tr>
          <td>Full Name</td>
          <td>Khidir karawita</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>khidirkarawita@gmail.com</td>
        </tr>
        <tr>
          <td>Nomor Handphone</td>
          <td>+62-859-555-091</td>
        </tr>
      </table>
    </section>
  );
};

export default Dashboard;