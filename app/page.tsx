// app/page.tsx
"use client"
import React from 'react';

const HomePage = () => {
  return (
    <div className="banner">
      <nav className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
            <li className="nav-item"><a className="nav-link" href="/planet">About planets</a></li>
          </ul>
        </div>
      </nav>

      <div className="home-header">
        <div className="banner-text">
          <p>PlanetTech</p>
          <p>Explore, learn, and innovate<br /> in the world of technology and digital culture</p>
          <a className="btn btn-primary">Learn more</a>
        </div>
      </div>

      {/* Add your custom CSS here or in a separate file */}
      <style jsx>{`
        .home-header {
          background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('/image/image1.jpg'); /* Updated path */
          background-position: center;
          background-size: cover;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
