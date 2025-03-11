import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">The Jungle Honey</h1>
        <p className="app-subtitle">Pure, Organic, and Wild Honey</p>
      </header>
      <main className="app-main">
        <section className="contact-section">
          <h2 className="section-title">Contact Us</h2>
          <p className="contact-item">
            <strong>Phone:</strong> 7006071712, 7051553488
          </p>
          <p className="contact-item">
            <strong>Email:</strong>{" "}
            <a href="mailto:lakshaymahajan932@gmail.com">
              lakshaymahajan932@gmail.com
            </a>
          </p>
          <p className="contact-item">
            <strong>Address:</strong> Gole Pulli, Talab Tillo, Jammu - 180002
          </p>
        </section>
      </main>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} The Jungle Honey. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
