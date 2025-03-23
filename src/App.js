import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './hospitalCode/index.jsx';
import Portfolio from "./hospitalCode/Portfolio.jsx";
import Blog from "./hospitalCode/Blog.jsx";
import Service from "./hospitalCode/Service";
import Dentists from "./hospitalCode/Dentists.js";
import About from "./hospitalCode/About.jsx";
import Appointment from "./hospitalCode/Appointment.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/service" element={<Service />} />
        <Route path="/dentists" element={<Dentists />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </Router>
  );
}

export default App;
