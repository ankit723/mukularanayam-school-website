import React from "react";
import instagram from "./about-icons/instagram.png";
import twitter from "./about-icons/twitter.png";
import whatsapp from "./about-icons/whatsapp.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-details">
      <div className="footer-top">
        <ul>
          <li>Home</li>
          <li>Pricing</li>
          <li>Services</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
      </div>
        <div className="footer-details-left">
            <p>c 2022 DiluteIt.com All rights reserved</p>
        </div>
        <div className="footer-details-right">
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={whatsapp} alt="" />
        </div>
      </div>
    </footer>
  );
}
