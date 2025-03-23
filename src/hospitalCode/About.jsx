import React, { Component } from "react";
import "../style/About.css";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { TitleBaner } from "./TitleBaner";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
}

  render() {

    return (
      <body>
        <div>
          <NavBar />
        </div>
        <>
          <TitleBaner />
        </>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>Our Mission</h2>
              <p>
                Our mission is to provide the best possible care for our
                patients in a comfortable and friendly environment.
              </p>
            </div>
            <div className="col-lg-6">
              <h2>Our Vision</h2>
              <p>Our vision is to be the best dental clinic in the country.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h2>Our Values</h2>
              <p>
                Our values are to provide the best possible care for our
                patients, to be honest and transparent, and to treat our
                patients with respect and dignity.
              </p>
            </div>
            <div className="col-lg-6">
              <h2>Our Services</h2>
              <p>
                We offer a wide range of dental services, including general
                dentistry, cosmetic dentistry, and orthodontics.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h2>Our Facilities</h2>
              <p>
                Our clinic is equipped with state-of-the-art facilities and
                equipment to ensure that our patients receive the best possible
                care.
              </p>
            </div>
            <div className="col-lg-6">
              <h2>Our Hours</h2>
              <p>
                We are open Monday to Friday from 9am to 5pm, and on Saturdays
                from 9am to 1pm.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h2>Our Location</h2>
              <p>
                Our clinic is located in the heart of the city, making it easily
                accessible to our patients.
              </p>
            </div>
            <div className="col-lg-6">
              <h2>Our Contact</h2>
              <p>
                You can contact us by phone at (123) 456-7890, or by email at
              </p>
            </div>
          </div>
        </div>
        <>
          <Footer />
        </>
      </body>
    );
  }
}export default About;