import React, { useState, useEffect } from "react";
import "../style/Footer.css";

export const Footer = () => {
    return (
      <>
        <footer>
          <div className="quickLinks">
            <div className="FooterContainer">
              <div className="hospitalLogo">
                <h4>
                  Hospital&nbsp;<span>Logo</span>
                </h4>
                <p>
                  Quisque at magna eu augue semper euismod. Fusce commodo
                  molestie luctus. Donec mollis nulla ipsum, vitae faucibus dui
                  dapibus at. Cras ullamcorper eget ipsum vel volutpat.
                  Phasellus rhoncus in sapien tincidunt mollis.
                </p>
                <div>
                  <p>
                    Trusted by <span>15000 </span> people
                  </p>
                </div>
              </div>
              <div className="usefullLinks">
                <h4>
                  usefull&nbsp;<span>links</span>
                </h4>
                <div className="usefullLinksOrder">
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>health info</li>
                    <li>appointment</li>
                  </ul>
                  <ul>
                    <li>Dental Care</li>
                    <li>Cleaning Facilities</li>
                    <li>Whitening Care</li>
                    <li>Dental Implants</li>
                  </ul>
                </div>
              </div>
              <div className="contactAddress">
                <div>
                  <h4>
                    Contact &nbsp;<span> Address</span>
                  </h4>
                  <p>Location</p>
                </div>
                <div>
                  <h4>
                    call&nbsp;<span>us</span>
                  </h4>
                  <p>number</p>
                </div>
                <div className="socialMediaIcon">
                  <a href="?">
                    <i className="fi fi-brands-instagram"></i>{" "}
                  </a>
                  <a href="?">
                    <i className="fi fi-brands-twitter-alt-square"></i>{" "}
                  </a>
                  <a href="?">
                    <i className="fi fi-brands-linkedin"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="newsletter">
              <h1>
                newsletter&nbsp;<span>Subscription</span>
              </h1>
              <form>
                <input type="text" placeholder="Enter your email" />
                <button type="submit">
                  <img src={require("../style/images/email.png")} alt="email" />
                </button>
              </form>
            </div>
            <div className="copyRight">
              <p>
                &copy; 2024 All rights reserved | Designed by &nbsp;
                <span>Anas Awama</span>
              </p>
            </div>
          </div>
        </footer>
      </>
    );
}