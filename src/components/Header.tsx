import React from "react";
import { Link } from "react-router-dom";

import KButton from "./Button";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="nav-menu">
        <div className="brand-container">
          <Link to="/">KINSPIRE</Link>
        </div>
        <div className="nav-container">
          <div className="page-title">
            <Link to="/">HOME</Link>
          </div>
          <div className="page-title">
            <Link to="/story">STORY</Link>
          </div>
          <div className="page-title">
            <Link to="/impact">IMPACT</Link>
          </div>
          <div className="page-title">
            <Link to="/orphanages">ORPHANAGES</Link>
          </div>
          <div className="page-title">
            <Link to="/team">TEAM</Link>
          </div>
          <div className="page-title">
            <Link to="/join">JOIN</Link>
          </div>
          <div className="page-title">
            <KButton
              title="DONATE"
              source="/donate"
              bgColor="#E0F2F1"
              width="125px"
              height="40px"
            />
          </div>
        </div>
      </div>
    );
  }
}
