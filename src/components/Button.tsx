import * as React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

interface MyProps {
  source: string;
  title: string;
  bgColor: string;
  width: string;
  height: string;
}

interface MyState {}

export default class KButton extends React.Component<MyProps, MyState> {
  render() {
    return (
      <div className="button-container">
        <div
          className="button-background"
          style={{
            backgroundColor: this.props.bgColor,
            width: this.props.width,
            height: this.props.height,
          }}
        ></div>
        <div
          className="button-outline"
          style={{ width: this.props.width, height: this.props.height }}
        ></div>
        <Link
          className="button-text"
          to={this.props.source}
          style={{ width: this.props.width, lineHeight: this.props.height }}
        >
          {this.props.title}
        </Link>
      </div>
    );
  }
}
