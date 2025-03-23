import React, { Component } from "react";
import "../style/Portfolio.css";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { TitleBaner } from "./TitleBaner";

class Portfolio extends Component {
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
            <div className="PortoflioContainer">
              <div>
                <button className=" btnCatCustomize">All</button>
                <button className=" btnCatCustomize ms-4">Category 1</button>
                <button className=" btnCatCustomize ms-4">Category 2</button>
                <button className=" btnCatCustomize ms-4">Category 3</button>
              </div>
            </div>
            <div className="PortfolioImgContainer">
              <div className="PortfolioImgalingment">
                <div className="PortfolioImgBox">
                  <img src="https://placehold.co/300x168" alt="" />
                </div>
                <div className="PortfolioImgBox">
                  <img src="https://placehold.co/300x168" alt="" />
                </div>
                <div className="PortfolioImgBox">
                  <img src="https://placehold.co/300x168" alt="" />
                </div>
              </div>
              <div className="PortfolioImgalingment">
                <div className="PortfolioImgBox">
                  <img src="https://placehold.co/300x168" alt="" />
                </div>
                <div className="PortfolioImgBox">
                  <img src="https://placehold.co/300x168" alt="" />
                </div>
                <div className="PortfolioImgBox">
                  <img src="https://placehold.co/300x168" alt="" />
                </div>
              </div>
            </div>
            <Footer />
          </body>
        );
    }
}export default Portfolio;