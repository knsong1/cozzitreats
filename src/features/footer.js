import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div>
      <div class="footer-basic">
        <footer>
          <div class="social">
            <SocialIcon url="https://www.instagram.com/cozzishandmadetreats/?hl=en" />
          </div>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="/">Contact</a>
            </li>
            <li class="list-inline-item">
              <a href="/treats">Menu</a>
            </li>
            <li class="list-inline-item">
              <a href="/about">About</a>
            </li>
            <li class="list-inline-item">
              <a href="/instructions">How to Order</a>
            </li>
            <li class="list-inline-item">
              <a href="/orderpolicy">Order Policy</a>
            </li>
          </ul>
          <p class="copyright">Cozzi's Handmade Treats © 2023</p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
