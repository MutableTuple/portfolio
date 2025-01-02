import React from "react";
import "./globals.css"; // Make sure to import the CSS file for the animation

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="loading-container">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}
