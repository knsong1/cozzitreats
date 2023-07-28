import React from 'react';
import '/Users/kristinagiannoutsos/cozzitreats/cozzitreats/src/App.css';
import { NavLink } from 'react-router-dom';
import logo from '/Users/kristinagiannoutsos/cozzitreats/cozzitreats/src/logocozzis.jpg';

function WebTab() {
  return (
    <div>
      <ul className="tabSticky">
        <div className="tabWrap">
          <div className="tabItems">
            <NavLink to="/">CONTACT</NavLink>
          </div>
          <div className="tabItems">
            <NavLink to="/about">ABOUT</NavLink>
          </div>
          <div className="tabItems">
            <NavLink to="/treats">
              <a>
                <img src={logo} className="menuLogo"></img>
              </a>
            </NavLink>
            <span className="treat">MENU</span>
          </div>

          <div className="tabItems">
            <NavLink to="/order">ORDER</NavLink>
          </div>
          <div className="tabItems">
            <NavLink to="/login">REVIEWS</NavLink>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default WebTab;
