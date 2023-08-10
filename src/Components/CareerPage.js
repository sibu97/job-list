import React from 'react';
import { NavLink,Outlet } from 'react-router-dom';
import "./CareerPage.css";
import img from "../media/peppermint-logo.png"

function CareerPage() {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img alt="Logo" src={img} />
        </div>

        <div className="navlinks">
          <NavLink
            to="/"
            className="link"
            style={({ isActive }) =>
              isActive ? { color: "#7a7979", fontWeight: 600 } : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            to="Career"
            className="link"
            style={({ isActive }) =>
              isActive ? { color: "#7a7979", fontWeight: 600 } : undefined
            }
          >
            Careers
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default CareerPage