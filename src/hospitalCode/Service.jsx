import React, { Component } from "react";
import "../style/Service.css";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { TitleBaner } from "./TitleBaner";

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openAccordionIndex: null, // Track which accordion item is open
    };
  }

  // Function to toggle accordion visibility
  toggleAccordion = (index) => {
    this.setState((prevState) => ({
      openAccordionIndex: prevState.openAccordionIndex === index ? null : index,
    }));
  };

  dorpdownContent = () => {
    const { openAccordionIndex } = this.state;
    return (
      <div class="accordion">
        <ul>
          {[
            "What type of Dental care is best for you?",
            "Aenean posuere sem imperdiet",
          ].map((title, index) => (
            <li className="dropCircle ">
              <div class="accordion-item" key={index}>
                <button
                  class="accordion-header"
                  onClick={() => this.toggleAccordion(index)}
                >
                  <h3 className="dropContent">{title}</h3>
                </button>
                {openAccordionIndex === index && (
                  <div
                    className={`accordion-content ${
                      openAccordionIndex === index ? "open" : ""
                    }`}
                  >
                    <p>
                      This section expands when clicked, showing additional
                      details.
                    </p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    
    const element = document.querySelector(".titleBaner"); // Replace with your selector
    if (element) {
      const rect = element.getBoundingClientRect();
      console.log("Element Rect:", rect); // Output the entire DOMRect object
      console.log("Element Top:", rect.top);
      console.log("Element Left:", rect.left);
      // ... other properties of rect
    } else {
      console.log("Element not found.");
    }

    return (
      <body>
        <div>
          <NavBar />
        </div>
        <>
          <TitleBaner />
        </>
        <div className="service-container">
          <aside className="side-navigation">
            <div className="side-nav-container">
              <ul className="side-nav">
                <li className="current_page_item">
                  <a href="https://dtdental.wpengine.com/dental-service/medical-advices/">
                    Medical Advices
                  </a>
                </li>
                <li class="">
                  <a href="https://dtdental.wpengine.com/dental-service/teeth-whitening/">
                    Teeth Whitening
                  </a>
                </li>
                <li class="">
                  <a href="https://dtdental.wpengine.com/dental-service/veneers/">
                    Veneers
                  </a>
                </li>
                <li class="">
                  <a href="https://dtdental.wpengine.com/dental-service/invisalign/">
                    Invisalign
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          {/* Main Content */}
          <main className="main-content">
            <div>
              <img
                className="imageWidth"
                src={"https://placehold.co/1920x1080"}
              />
            </div>
            <h3 className="HeaderTextStyle">medical Advices</h3>
            <p>
              Here you can find detailed information about our services,
              including teeth whitening, Invisalign, veneers, and more.
            </p>
            <h3 className="HeaderTextStyle">Planning for Health Treatment</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              id est sed lacus volutpat lobortis. Lorem ipsum dolor sit amet.
              Going to use a passage of Lorem Ipsum, you need to be sure there
              isn’t anything embarrassing hidden in the middle of text.
            </p>
            <div className="serviceIconBox">
              <img
                className="iconWidth"
                src={require("../style/images/tooth.png")}
                alt=""
              />
              <p className="IconTextStyle"> Day 1 </p>
            </div>
            <div className="serviceContainer">
              <div className="serviceImgalingment">
                <div className="serviceImgBox">
                  <img src="https://placehold.co/300x168" alt="" />
                </div>
                <div className="serviceBodyTextBox">
                  <h3>service Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin tincidunt nunc lorem, nec faucibus mi facilisis eget.
                    Mauris laoreet, nisl id faucibus pellentesque, mi...
                  </p>
                </div>
              </div>
              <div className="serviceImgalingment">
                <div className="serviceImgBox">
                  <img src="https://placehold.co/300x168" alt="" />
                </div>
                <div className="serviceBodyTextBox">
                  <h3>service Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin tincidunt nunc lorem, nec faucibus mi facilisis eget.
                    Mauris laoreet, nisl id faucibus pellentesque, mi...
                  </p>
                </div>
              </div>
            </div>
            <div className="serviceDay1Class">
              <p>
                <span>How to take care during Dental:</span> Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Maecenas id est sed lacus
                volutpat lobortis. Lorem ipsum dolor sit amet. Going to use a
                passage of Lorem Ipsum, you need to be sure there isn’t anything
                embarrassing hidden in the middle of text.
              </p>
              <p>
                <span>When to Visit your Doctor?</span> Consectetur adipiscing
                elit. Maecenas id est sed lacus volutpat lobortis. Lorem ipsum
                dolor sit amet. Going to use a passage of Lorem Ipsum, you need
                to be sure there isn’t anything embarrassing hidden in the
                middle of text.
              </p>
              <p>
                <span>Dental Options:</span> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Maecenas id est sed lacus volutpat
                lobortis. Lorem ipsum dolor sit amet. Going to use a passage of
                Lorem Ipsum, you need to be sure there isn’t anything
                embarrassing hidden in the middle of text.
              </p>
            </div>
            <div className="serviceIconBox">
              <img
                className="iconWidth"
                src={require("../style/images/tooth.png")}
                alt=""
              />
              <p className="IconTextStyle"> Day 2 </p>
            </div>

            {this.dorpdownContent()}

          </main>
        </div>
        <Footer />
      </body>
    );
  }
}export default Service;