import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/homePage.css";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
  EffectCreative,
  Zoom,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import "swiper/css/zoom";

const images = [
  "https://placehold.co/1920x1000",
  "https://placehold.co/1920x1001",
  "https://placehold.co/1920x1002",
  "https://placehold.co/1920x1003",
];

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSwip: new Array(images.length).fill(1),
    };
  }

  ImageSlider = () => {
    return (
      <Swiper
        effect={"fade"}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation={true}
        zoom={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Navigation, Zoom]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {this.state.imageSwip.map((_, index) => (
          <SwiperSlide key={index}>
            <img
              src={images[index]}
              alt={`Slide ${index + 1}`}
              className="ZoomOut"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  ClintReview = () => {
    return (
      <Swiper
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCreative, Autoplay, Navigation, Pagination]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {this.state.imageSwip.map((_, index) => (
          <SwiperSlide key={index}>
            <img
              src={images[index]}
              alt={`Slide ${index + 1}`}
              className="ZoomOut"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  render() {
    return (
      <body>
        {/* Slider Image */}
        <div>
          <div className="wrapper">
            {/* <div className="banner">
                <p>
                  Get in touch with us today<span>number</span>
                </p>
                <button type="button" label="Get In Touch" />
                <button type="button" label="calender" />
              </div> */}
            <div className="slider">{this.ImageSlider()}</div>
          </div>
        </div>
        <div>
          {/* Treatment code */}
          <div>
            <div>
              <h1>treatment</h1>
            </div>
            <div className="treatmentBoxAlignment">
              <div className="treatmentBoxIcon">
                <img
                  src={require("../style/images/dental-surgery.svg").default}
                  alt="Dental Surgery"
                />
              </div>
              <div className="treatmentBox">
                <p>Oral & Maxillofacial surgery</p>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                <img
                  src={require("../style/images/dental-surgery-gray.png")}
                  alt="Dental Surgery gray"
                  className="treatmentImageAnimated"
                />
              </div>
              <div className="treatmentBoxIcon">
                <img
                  src={require("../style/images/dental-surgery.svg").default}
                  alt="Dental Surgery"
                />
              </div>
              <div className="treatmentBox">
                <p>Oral & Maxillofacial surgery</p>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
              </div>
              <div className="treatmentBoxIcon">
                <img
                  src={require("../style/images/dental-surgery.svg").default}
                  alt="Dental Surgery"
                />
              </div>
              <div className="treatmentBox">
                <p>Oral & Maxillofacial surgery</p>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img className="imageWidth" src={"https://placehold.co/1920x760"} />
          </div>
        </div>
        <div>
          <div>
            <h1>doctors</h1>
          </div>
        </div>
        <div>
          {/* Working Hours and appointment*/}
          <div className="workingAndAppointment">
            <div className="workingHours">
              <h1>
                working <span>Hours</span>
              </h1>
              <table className="workingHoursTable">
                <tr>
                  <td>
                    {" "}
                    <p>Monday:</p>
                  </td>
                  <td>
                    {" "}
                    <p>10:00 am - 4:00 pm</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <p>Tuesday:</p>
                  </td>
                  <td>
                    {" "}
                    <p>10:00 am - 4:00 pm</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <p>Wednesday:</p>
                  </td>
                  <td>
                    {" "}
                    <p>10:00 am - 4:00 pm</p>
                  </td>
                </tr>
              </table>
            </div>
            <div className="appointment">
              <h1>
                Book an <span>Appointment</span>
              </h1>
              <form className="appointmentForm">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Phone" />
                <select placeholder="Type of service">
                  <option className="option1" value="" disabled selected>
                    Type of service
                  </option>
                  <option value="actual value 1">Display Text 1</option>
                  <option value="actual value 2">Display Text 2</option>
                  <option value="actual value 3">Display Text 3</option>
                </select>
                <select placeholder="staff">
                  <option className="option1" value="" disabled selected>
                    Staff
                  </option>
                  <option value="actual value 1">Display Text 1</option>
                  <option value="actual value 2">Display Text 2</option>
                  <option value="actual value 3">Display Text 3</option>
                </select>
                <input type="date" placeholder="Date" />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
        {/* Services */}
        <div>
          <div>
            <h1>Services</h1>
            <div className="servicesContainer">
              <div className="servicesBox">
                <div className="servicesBoxImage">
                  <img src="https://placehold.co/300x168" alt="service1" />
                </div>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
              </div>
              <div className="servicesBox">
                <div className="servicesBoxImage">
                  <img src="https://placehold.co/300x168" alt="service1" />
                </div>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
              </div>
              <div className="servicesBox">
                <div className="servicesBoxImage">
                  <img src="https://placehold.co/300x168" alt="service1" />
                </div>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1>TakeCare</h1>
            <img className="imageWidth" src={"https://placehold.co/1920x760"} />
          </div>
        </div>
        {/* hospital information */}
        <div>
          <div>
            <div className="HospitalInfoContainer">
              <div className="HospitalInfoBox">
                <img
                  src={require("../style/images/dentist.png")}
                  alt="dentist"
                  className="HospitalInfoIcon"
                />
                <p>20</p>
                <img
                  src={require("../style/images/dentist.png")}
                  alt="Dentist"
                  className="HospitalInfoAnimated"
                />
              </div>
              <div className="HospitalInfoBox">
                <img
                  src={require("../style/images/dentist-chair.png")}
                  alt="Dental chair"
                  className="HospitalInfoIcon"
                />
                <p>100</p>
                <img
                  src={require("../style/images/dentist-chair.png")}
                  alt="Dental chair"
                  className="HospitalInfoAnimated"
                />
              </div>
              <div className="HospitalInfoBox">
                <img
                  src={require("../style/images/dental-record.png")}
                  alt="Dental record"
                  className="HospitalInfoIcon"
                />
                <p>300</p>
                <img
                  src={require("../style/images/dental-record.png")}
                  alt="Dental record"
                  className="HospitalInfoAnimated"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ClinteReviewBG">
          <div className="clinteReviewContainer">
            <div className="clinteReview">
              <blockquote>
                <q>
                  Quisque at magna eu augue semper euismod. Fusce commodo
                  molestie luctus. Donec mollis nulla ipsum, vitae faucibus dui
                  dapibus at. Cras ullamcorper eget ipsum vel volutpat.
                  Phasellus rhoncus in sapien tincidunt mollis.
                </q>
              </blockquote>
              <cite>
                Clinte Name <small> career</small>
              </cite>
            </div>
          </div>
        </div>
        <footer>
          <div className="quickLinks">
            <div className="FooterContainer">
              <div className="hospitalLogo">
                <h4>Hopital Logo</h4>
                <p>
                  Quisque at magna eu augue semper euismod. Fusce commodo
                  molestie luctus. Donec mollis nulla ipsum, vitae faucibus dui
                  dapibus at. Cras ullamcorper eget ipsum vel volutpat.
                  Phasellus rhoncus in sapien tincidunt mollis.
                </p>
                <div>
                  <p>Trusted by 15000 people</p>
                </div>
              </div>
              <div className="usefullLinks">
                <h4>usefull links</h4>
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
                  <h4>Contact Address</h4>
                  <p>Location</p>
                </div>
                <div>
                  <h4>call us</h4>
                  <p>number</p>
                </div>
                <div>
                  <h4>email us</h4>
                  <p>email</p>
                </div>
              </div>
            </div>
            <div className="newsletter">
              <h1>newsletter Subscription</h1>
              <form>
                <input type="text" placeholder="Enter your email" />
                <button type="submit">
                  <img
                    src={require("../style/images/email.png")}
                    alt="email"/>
                </button>
              </form>
            </div>
          </div>
        </footer>
      </body>
    );
  }
}

export default HomePage;

//image size is : 1920X1000 px and rendered aspect ratio is 48:25
//Rendered size:	1920 × 760 px Rendered aspect ratio:	48∶19
// className={`slide-image ${
//                  this.state.activeIndex === index ? "zoomOutAnimation" : ""
//                }`}