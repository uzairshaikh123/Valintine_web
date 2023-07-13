import React, { useState } from "react";
import "../Styles/admin.css";

function AdminPanel() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const handleMenuClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="admincontainer">
      <aside className="sidebar">
        <h2 className="sidebar-heading">Admin Panel</h2>
        <ul className="sidebar-menu">
          <li
            className={`sidebar-menu-item ${
              currentPage === "dashboard" ? "active" : ""
            }`}
            onClick={() => handleMenuClick("dashboard")}
          >
            Dashboard
          </li>
          <li
            className={`sidebar-menu-item ${
              currentPage === "users" ? "active" : ""
            }`}
            onClick={() => handleMenuClick("users")}
          >
            Users
          </li>
          <li
            className={`sidebar-menu-item ${
              currentPage === "products" ? "active" : ""
            }`}
            onClick={() => handleMenuClick("products")}
          >
            Products
          </li>
          <li
            className={`sidebar-menu-item ${
              currentPage === "orders" ? "active" : ""
            }`}
            onClick={() => handleMenuClick("orders")}
          >
            Orders
          </li>
          <li
            className={`sidebar-menu-item ${
              currentPage === "settings" ? "active" : ""
            }`}
            onClick={() => handleMenuClick("settings")}
          >
            Settings
          </li>
        </ul>
      </aside>
      <main className="content">
        <h2 className="page-heading">{currentPage}</h2>
        {/* Render dynamic content based on the current page */}
        {currentPage === "dashboard" && (
          <div className="page-content">
            <p>Welcome to the Dashboard page!</p>
          </div>
        )}
        {currentPage === "users" && (
          <div className="page-content">
            <p>This is the Users page.</p>
          </div>
        )}
        {currentPage === "products" && (
          <div className="page-content">
            <p>Explore the Products page.</p>
          </div>
        )}
        {currentPage === "orders" && (
          <div className="page-content">
            <p>Manage your Orders here.</p>
          </div>
        )}
        {currentPage === "settings" && (
          <div className="page-content">
            <p>Adjust your settings on this page.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default AdminPanel;
