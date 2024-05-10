import React from "react";
import "./styles.css";
import DoorKeys from "../../../Images/Services/door-keys.webp";
import CarKeys from "../../../Images/Services/car-keys.webp";
import IseoLogo from "../../../Images/Services/iseo-logo.webp";
import Launch from "../../../Images/Services/launch.webp";
import About from "../../../Images/about.webp";

const Home = () => {
  return (
    <div id="home">
      <div id="landing-img-div" loading="lazy">
        <h1>Locksmith NENO</h1>
        <p>
          Professional Locksmith Services, working, improving and expanding 2007
        </p>
      </div>
      <div id="services-container">
        <h2>SERVICES</h2>
        <div id="service-container">
          <div className="service-card">
            <img src={DoorKeys} alt="DoorKeys" />
            <p>Keys for inside doors, locks, safes and more</p>
          </div>
          <div className="service-card">
            <img src={CarKeys} alt="CarKeys" />
            <p>
              Car keys, remotes for garage doors, aftermarket car remotes,
              batteries and shells
            </p>
          </div>
          <div className="service-card">
            <img src={IseoLogo} alt="ISEO" />
            <p>High-end Italian cylinders, padlocks, locks etc.</p>
          </div>
          <div className="service-card">
            <img src={Launch} alt="Launch " />
            <p>DTC reading, fixing DPF, EGR, chip tunning</p>
          </div>
        </div>
      </div>
      <div id="about-container">
          <h2>ABOUT US</h2>
          <div id="about-info-container"> 
              <img src={About} alt="about img" />
              <div>
                <h3>Keymaker NENO works and improves since 2007</h3>
                <ul>
                  <li>Making door keys</li>
                  <li>Making car keys</li>
                  <li>ECU coding</li>
                  <li>IMMO coding</li>
                  <li>IC replacing and coding</li>
                </ul>
              </div>
          </div>
      </div>
      <div id="news-container">
          <h2>NEWS</h2>
          <div></div>
      </div>
    </div>
  );
};

export default Home;
