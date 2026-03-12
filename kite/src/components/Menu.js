import React from "react";

import { NavLink } from "react-router-dom";

const Menu = () => {
  const menuItems = [
    { label: "Dashboard", path: "/" },
    { label: "Orders", path: "/orders" },
    { label: "Holdings", path: "/holdings" },
    { label: "Positions", path: "/positions" },
    { label: "Funds", path: "/funds" },
    { label: "Apps", path: "/apps" },
  ];

  return (
    <aside className="menu-container">
      <div className="brand">
        <img src="logo.png" alt="Kite logo" className="logo" />
        <h3>Kite Neo</h3>
      </div>

      <nav className="menus">
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  isActive ? "menu selected" : "menu"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="profile">
        <div className="avatar">ZU</div>
        <div className="username">
          <strong>USERID</strong>
          <span>Equity</span>
        </div>
      </div>
    </aside>
  );
};

export default Menu;
