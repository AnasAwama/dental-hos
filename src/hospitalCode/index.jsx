import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/homePage.css";
import {NavBar} from "./NavBar.jsx";
import {Footer} from "./Footer.jsx";
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

const doctorimages = [
  "https://placehold.co/300x168",
  "https://placehold.co/300x168",
  "https://placehold.co/300x168",
  "https://placehold.co/300x168",
  "https://placehold.co/300x168",
];
const doctorNames = ["Dr. A", "Dr. B", "Dr. C", "Dr. D", "Dr. E"];
const doctordegree = ["BDS", "MDS", "BDS", "MDS", "BDS"];
const doctorspecialization = [
  "Oral & Maxillofacial surgery",
  "Oral & Maxillofacial surgery",
  "Oral & Maxillofacial surgery",
  "Oral & Maxillofacial surgery",
  "Oral & Maxillofacial surgery",
];

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSwip: new Array(images.length).fill(1),
      doctorimageSwip: new Array(doctorimages.length).fill(1),
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

  doctorSlider = () => {
    return (
      <div className="swiperpositions">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {this.state.doctorimageSwip.map((_, index) => (
            <SwiperSlide key={index}>
              <div className="doctorBox">
                <div className="doctorImage">
                  <img src={doctorimages[index]} alt="doctor" />
                </div>
                <div className="doctorInfo">
                  <p>
                    {doctorNames[index]}
                    <span> {doctordegree[index]}</span>
                  </p>
                  <p>{doctorspecialization[index]}</p>
                  <div className="doctorSocialMedia">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
   };
  render() {
    return (
      <body>
        <NavBar />
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
        {/* doctors */}
        <div>
          <div>
            <h1>
              Our Staff&nbsp;<span>Members</span>
            </h1>
            <div>{this.doctorSlider()}</div>
          </div>
        </div>
        <div>
          {/* Working Hours and appointment*/}
          <div className="workingAndAppointment">
            <div className="workingHours">
              <h1>
                working&nbsp;<span>Hours</span>
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
                Book an&nbsp;<span>Appointment</span>
              </h1>
              <form className="appointmentForm">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Phone" />
                <select placeholder="Type of service" className="option1">
                  <option value="" disabled selected>
                    Type of service
                  </option>
                  <option value="actual value 1">Display Text 1</option>
                  <option value="actual value 2">Display Text 2</option>
                  <option value="actual value 3">Display Text 3</option>
                </select>
                <select placeholder="staff" className="option1">
                  <option value="" disabled selected>
                    Staff
                  </option>
                  <option value="actual value 1">Display Text 1</option>
                  <option value="actual value 2">Display Text 2</option>
                  <option value="actual value 3">Display Text 3</option>
                </select>
                <input type="date" className="option1" placeholder="Date" />
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
            <h1>
              Take&nbsp;<span>Care</span>
            </h1>
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
                <p>Doctor</p>
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
                <p>Clinical Room</p>
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
                <p>Happy Patient</p>
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
        <Footer />
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