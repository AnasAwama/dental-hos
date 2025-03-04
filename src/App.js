import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './hospitalCode/index';
import Portfolio from "./hospitalCode/Portfolio";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
      </Routes>
    </Router>
    // {/* <HomePage/> */}
  );
}

export default App;
