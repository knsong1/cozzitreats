import React from 'react';

import { NavLink } from 'react-router-dom';

function AuthenticationNavbar() {
  return (
    <ul className="tabSticky">
      <div className="tabWrap">
        <div className="tabItems">
          <NavLink to="/">CONTACT</NavLink>
        </div>
        <div className="tabItems">
          <NavLink to="/about">ABOUT</NavLink>
        </div>
        <div className="tabItems">
          <NavLink to="/treats">MENU</NavLink>
        </div>
        <div className="tabItems">
          <NavLink to="/order">ORDERS</NavLink>
        </div>
        <div className="tabItems">
          <NavLink to="/login">LOGIN</NavLink>
        </div>
      </div>
    </ul>
  );
}

export default AuthenticationNavbar;
