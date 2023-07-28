import React from 'react';
import AuthenticationNavbar from './AuthenticatedNavbar';
import Footer from './footer';
import { SocialIcon } from 'react-social-icons';
import blondie from '/Users/kristinagiannoutsos/cozzitreats/cozzitreats/src/blondie.jpg';
import boxes from '/Users/kristinagiannoutsos/cozzitreats/cozzitreats/src/boxes.jpg';
import buntcake from '/Users/kristinagiannoutsos/cozzitreats/cozzitreats/src/buntcakt.jpg';
import jellycookies from '/Users/kristinagiannoutsos/cozzitreats/cozzitreats/src/cookiesjelly.jpg';
import buttercookies from '/Users/kristinagiannoutsos/cozzitreats/cozzitreats/src/buttercookie.jpg';
import packaged from '/Users/kristinagiannoutsos/cozzitreats/cozzitreats/src/packaged.png';
import swirlcake from '/Users/kristinagiannoutsos/cozzitreats/cozzitreats/src/swirlcake.png';
import lemoncookie from '/Users/kristinagiannoutsos/cozzitreats/cozzitreats/src/lemoncookies.jpg';

import WebTab from './webtab';
function Medias() {
  return (
    <>
      <WebTab></WebTab>
      <p>
        We greatly appreciate our costumers, please do leave a like, a review,
        or tag us on IG.
      </p>
      <p>
        We hope you enjoy our treats as much as we enjoyed baking them for you!
      </p>
      <h1>Follow! </h1>
      <SocialIcon
        className="mediaIcons"
        url="https://www.instagram.com/cozzishandmadetreats/?hl=en"
        target="_blank"
      />
      <div className="container">
        <h2 className="heading-text">
          Treats <span>made with Love</span>
        </h2>
        <ul className="image-gallery">
          <li>
            <img className="imgSrc" src={packaged} alt="" />
            <div className="overlay">
              <span>Chocolate Overload Blondie 4ct</span>
            </div>
          </li>
          <li>
            <img className="imgSrc" src={buntcake} alt="" />
            <div className="overlay">
              <span>Keto Friendly Poppyseed Bundt Cake 1ct</span>
            </div>
          </li>
          <li>
            <img className="imgSrc" src={jellycookies} alt="" />
            <div className="overlay">
              <span>
                Keto Friendly Lemon-Blueberry Bars 4ct (almond, coonut floud,
                monkfruit sweetner
              </span>
            </div>
          </li>
          <li>
            <img src={buttercookies} alt="" />
            <div className="overlay">
              <span>Butter Cookies </span>
            </div>
          </li>
          <li>
            <img src={swirlcake} alt="" />
            <div className="overlay">
              <span>Apple Cider Doughnut Cake Medium/Large</span>
            </div>
          </li>
          <li>
            <img src={lemoncookie} alt="" />
            <div className="overlay">
              <span>Lemon Loaf 1ct</span>
            </div>
          </li>

          <li>
            <img className="imgSrc" src={buntcake} alt="" />
            <div className="overlay">
              <span>Keto Friendly Poppyseed Bundt Cake 1ct</span>
            </div>
          </li>
          <li>
            <img className="imgSrc" src={jellycookies} alt="" />
            <div className="overlay">
              <span>
                Keto Friendly Lemon-Blueberry Bars 4ct (almond, coonut floud,
                monkfruit sweetner
              </span>
            </div>
          </li>
          <li>
            <img src={buttercookies} alt="" />
            <div className="overlay">
              <span>Butter Cookies </span>
            </div>
          </li>
          <li>
            <img src={swirlcake} alt="" />
            <div className="overlay">
              <span>Apple Cider Doughnut Cake Medium/Large</span>
            </div>
          </li>
          <li>
            <img src={lemoncookie} alt="" />
            <div className="overlay">
              <span>Lemon Loaf 1ct</span>
            </div>
          </li>
        </ul>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Medias;
