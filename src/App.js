import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Banner Section */}
      <div className="banner">
        <img
          src={`${process.env.PUBLIC_URL}/backPhoto.jpg`}
          alt="Banner"
          className="banner-img"
        />
      </div>

      {/* Products Section */}
      <section className="products">
        <h2>Our Honey Varieties</h2>
        <div className="product-grid">
          <div className="product-card">
            <img
              src={`${process.env.PUBLIC_URL}/acaqia.jpg`}
              alt="Acacia Honey"
            />
            <h3>Acacia Honey</h3>
            <p>Smooth and light, with a delicate floral taste.</p>
          </div>
          <div className="product-card">
            <img
              src={`${process.env.PUBLIC_URL}/wildflower.jpg`}
              alt="Wildflower Honey"
            />
            <h3>Wildflower Honey</h3>
            <p>Rich and robust, harvested from diverse wild blooms.</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      {/* <section className="video-section">
        <h2>Experience the Jungle</h2>
        <video className="promo-video" controls>
          <source src={`${process.env.PUBLIC_URL}/honeyVideo.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section> */}

      {/* Footer Section */}
      <footer className="footer">
        <h2>Contact Us</h2>
        <p>Email: info@thejunglehoney.com</p>
        <p>Phone: 70060717172</p>
      </footer>
    </div>
  );
}

export default App;
