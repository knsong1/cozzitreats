import React from 'react';
import WebTab from './webtab';
import About from './about';
import Footer from './footer';
import '/Users/kristinagiannoutsos/cozzitreats/cozzitreats/src/App.css';
import glutenfree from '/Users/kristinagiannoutsos/cozzitreats/cozzitreats/src/glutenfree.jpg';
import treats from '/Users/kristinagiannoutsos/cozzitreats/cozzitreats/src/cozimenu.jpg';

function FrontPage() {
  return (
    <div>
      <WebTab></WebTab>
      <div className="menuWrap">
        <img className="menuImg" src={glutenfree}></img>
        <img className="menuImg" src={treats}></img>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default FrontPage;
