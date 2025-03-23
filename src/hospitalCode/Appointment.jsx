import React, { Component } from "react";
import "../style/Appointment.css";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { TitleBaner } from "./TitleBaner";

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      department: "",
      staff: "",
      date: "",
      name: "",
      email: "",
      phone: "",
      showModal: false,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  nextStep = () => {
    this.setState((prevState) => ({ step: prevState.step + 1 }));
  };

  prevStep = () => {
    this.setState((prevState) => ({ step: prevState.step - 1 }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false, step: 1 }); // Close modal and reset form
  };

  render() {
    const { step, department, staff, date, name, email, phone, showModal } =
      this.state;

    return (
      <body>
        <div>
          <NavBar />
        </div>
        <>
          <TitleBaner />
        </>

        <div className="container mt-5 mb-5">
          <h2 className="text-center">Book an Appointment</h2>
          <div className="card shadow p-4">
            {/* Step Indicators */}
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <span className={`nav-link ${step === 1 ? "active" : ""}`}>
                  1. Select Date & Time
                </span>
              </li>
              <li className="nav-item">
                <span className={`nav-link ${step === 2 ? "active" : ""}`}>
                  2. Fill Contact Details
                </span>
              </li>
              <li className="nav-item">
                <span className={`nav-link ${step === 3 ? "active" : ""}`}>
                  3. Check Details
                </span>
              </li>
            </ul>

            {/* Step 1: Select Department & Date */}
            {step === 1 && (
              <div>
                <div className="mb-3">
                  <label className="form-label">Select Department</label>
                  <select
                    className="form-select"
                    name="department"
                    value={department}
                    onChange={this.handleChange}
                    required
                  >
                    <option value="">Choose...</option>
                    <option value="Fixing Implants">Fixing Implants</option>
                    <option value="General Checkup">General Checkup</option>
                    <option value="Orthodontics">Orthodontics</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Select Staff</label>
                  <select
                    className="form-select"
                    name="staff"
                    value={staff}
                    onChange={this.handleChange}
                    required
                  >
                    <option value="">Choose...</option>
                    <option value="Dr. Smith">Dr. Smith</option>
                    <option value="Dr. Johnson">Dr. Johnson</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Select Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={date}
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <button
                  className="btn btn-primary w-100"
                  onClick={this.nextStep}
                >
                  Next: Fill Contact Details
                </button>
              </div>
            )}

            {/* Step 2: Fill Contact Details */}
            {step === 2 && (
              <div>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={phone}
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <button
                  className="btn btn-secondary w-100 mb-2"
                  onClick={this.prevStep}
                >
                  Back
                </button>
                <button
                  className="btn btn-primary w-100"
                  onClick={this.nextStep}
                >
                  Next: Check Details
                </button>
              </div>
            )}

            {/* Step 3: Review & Confirm */}
            {step === 3 && (
              <div>
                <h4>Review Your Details</h4>
                <ul className="list-group mb-3">
                  <li className="list-group-item">
                    <strong>Department:</strong> {department}
                  </li>
                  <li className="list-group-item">
                    <strong>Staff:</strong> {staff}
                  </li>
                  <li className="list-group-item">
                    <strong>Date:</strong> {date}
                  </li>
                  <li className="list-group-item">
                    <strong>Name:</strong> {name}
                  </li>
                  <li className="list-group-item">
                    <strong>Email:</strong> {email}
                  </li>
                  <li className="list-group-item">
                    <strong>Phone:</strong> {phone}
                  </li>
                </ul>

                <button
                  className="btn btn-secondary w-100 mb-2"
                  onClick={this.prevStep}
                >
                  Back
                </button>
                <button
                  className="btn btn-success w-100"
                  onClick={this.handleSubmit}
                >
                  Confirm Appointment
                </button>
              </div>
            )}
          </div>
          {showModal && (
            <div className="modal fade show d-block" tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Appointment Confirmed!</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={this.closeModal}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>
                      <strong>Name:</strong> {name}
                    </p>
                    <p>
                      <strong>Email:</strong> {email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {phone}
                    </p>
                    <p>Your appointment has been successfully booked.</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      className="btn btn-primary"
                      onClick={this.closeModal}
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <>
          <Footer />
        </>
      </body>
    );
  }
}
export default Appointment;
