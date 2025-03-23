import React, { Component } from "react";
import "../style/Dentists.css";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { TitleBaner } from "./TitleBaner";

class Dentists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedButtons: {},
    };

  }

  handleClick = (index) => {
    this.setState((prevState) => ({
      clickedButtons: {
        ...prevState.clickedButtons,
        [index]: !prevState.clickedButtons[index], // Toggle specific button
      },
    }));
  };

  render() {
    const dentists = [
      { name: "Dr. A", specialty: "General" },
      { name: "Dr. B", specialty: "Dental Surgery" },
      { name: "Dr. C", specialty: "Orthodontist" },
    ];

    return (
      <body>
        <div>
          <NavBar />
        </div>
        <>
          <TitleBaner />
        </>

        <div className="container">
          <form className="form-inline">
            <select name="Specialist" className="SpecialistSelect">
              <option value="All">All</option>
              <option value="General">General</option>
              <option value="Dental Surgery">Dental Surgery</option>
              <option value="Orthodontist">Orthodontist</option>
            </select>
            <div className="container">
              <button type="button" className="LetterButton">
                A
              </button>
              <button type="button" className="LetterButton">
                B
              </button>
              <button type="button" className="LetterButton">
                C
              </button>
              <button type="button" className="LetterButton">
                D
              </button>
            </div>
          </form>
        </div>
        <div className="container mt-5 mb-1 cardWrapperHight">
          <div className="row">
            {dentists.map((dentist, index) => (
              <div key={index} className="col mt-5 cardWrapper">
                <div className="cardBox">
                  <div className="card-body card-body-position">
                    <button
                      className={`SocialButton ${
                        this.state.clickedButtons[index] ? "clicked" : ""
                      }`}
                      onClick={() => this.handleClick(index)}
                    >
                      <span className="icon">
                        {this.state.clickedButtons[index] ? "→" : "+"}
                      </span>
                      {this.state.clickedButtons[index] && (
                        <div className="socialMediaSlider">
                          <a href="?">
                            <i className="fi fi-brands-instagram"></i>
                          </a>
                          <a href="?">
                            <i className="fi fi-brands-twitter-alt-square"></i>
                          </a>
                          <a href="?">
                            <i className="fi fi-brands-linkedin"></i>
                          </a>
                        </div>
                      )}
                    </button>
                    <h5 className="card-title">{dentist.name}</h5>
                    <p className="card-text">{dentist.specialty}</p>
                  </div>
                </div>
                <div className="cardImage">
                  <img
                    src={"https://placehold.co/300x300"}
                    alt="Dentist"
                    className="cardImgTop"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </body>
    );
  }
}export default Dentists;