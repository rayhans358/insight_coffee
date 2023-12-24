import React from "react";
import "./categoryListStyling.css";

function CategoryList() {
  return (
    <div className="tag-list">
      <h3>Category</h3>
      {/* Coffee */}
      <div className="dropdown">
        <button className="dropbtn">Coffee</button>
        <div className="dropdown-content">
          <div className="coffee">
            <p>Beans</p>
            <p>Cold</p>
            <p>Hot</p>
          </div>
        </div>
      </div>

      {/* Non Coffee */}
      <div className="dropdown">
        <button className="dropbtn">Non Coffee</button>
        <div className="dropdown-content">
          <div className="non-coffee">
            <p>Blend</p>
            <p>Tea</p>
          </div>
        </div>
      </div>

      {/* Snack */}
      <div className="dropdown">
        <button className="dropbtn">Snack</button>
        <div className="dropdown-content">
          <div className="snack">
            <p>Bakery</p>
            <p>Pastry</p>
          </div>
        </div>
      </div>
      <p>Dessert</p>
    </div>
  )
};

export default CategoryList;