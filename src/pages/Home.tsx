import React from "react";

import KButton from "../components/Button";
import "./Home.css";

// heading 1: 100px, tt case, black, color: grey
// heading 2: 80px, TT, black, color: grey
// home-page-text: 30px, Tt, light, color: grey

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="cover">
          <div className="heading-1">
            Every child should have the resources to achieve their dreams
          </div>
        </div>
        <div className="mission">
          <div className="home-container-1">
            <div className="heading-parent">
              <img
                className="mission-img"
                src="../images/home-mission-1.png"
                alt="Education"
              />
              <div className="heading-2">EDUCATION</div>
            </div>
            <div className="home-page-text">
              By connecting them to tutors and volunteers across the world. By
              connecting them to tutors and volunteers across the world.
            </div>
            <div className="mission-links">
              <KButton
                source="/"
                title="EVENTS"
                bgColor="#FEFA95"
                width="125px"
                height="40px"
              />
            </div>
            <div className="missionLinks">
              <KButton
                source="/"
                title="WORKSHOPS"
                bgColor="#FEFA95"
                width="135px"
                height="40px"
              />
            </div>
          </div>
          <div className="home-container-2">
            <div className="heading-parent">
              <img
                className="mission-img-2"
                src="../images/home-mission-2.png"
                alt="Inspiration"
              />
              <div className="heading-2">INSPIRATION</div>
            </div>
            <div className="home-page-text">
              By connecting them to tutors and volunteers across the world. By
              connecting them to tutors and volunteers across the world.
            </div>
            <div className="mission-link"> BUTTON </div>
            <div className="mission-link"> BUTTON </div>
          </div>
          <div className="home-container-1">
            <div className="heading-parent">
              <img
                className="mission-img"
                src="../images/home-mission-3.png"
                alt="Awareness"
              />
              <div className="heading-2">AWARENESS</div>
            </div>
            <div className="home-page-text">
              By connecting them to tutors and volunteers across the world. By
              connecting them to tutors and volunteers across the world.
            </div>
            <div className="mission-link"> BUTTON </div>
            <div className="mission-link"> BUTTON </div>
          </div>
        </div>
      </div>
    );
  }
}
