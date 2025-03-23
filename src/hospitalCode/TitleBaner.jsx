import React, { useState, useEffect } from "react";
import "../style/TitleBaner.css";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

export const TitleBaner = () => {

  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const pageTitle = pathSegments.length > 0 ? pathSegments[0] : "Home";
  
    return (
      <>
        <div className="titleBanerBoX">
          <div className="titleBaner">
            <h1>{pageTitle.replace("-", " ")}</h1>
            <div>
              <Link to="/">Home</Link>
              <span className="flip-horizontal"> / </span>
              <span className="">{pageTitle.replace("-", " ")}</span>
            </div>
          </div>
        </div>
      </>
    );
}