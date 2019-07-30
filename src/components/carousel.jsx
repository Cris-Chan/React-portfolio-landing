import React, { Component } from "react";
import "./carousel.css";
import "./carousel.js";
import AOS from "aos";
import "aos/dist/aos.css";

class Showcase extends Component {
  render() {
    AOS.init();
    return (
      <div
        data-aos-anchor-placement="top-center"
        className={
          this.props.type === "invert"
            ? "showcase-body-invert"
            : "showcase-body"
        }
        data-aos={this.props.type === "invert" ? "fade-left" : "fade-right"}
      >
        <div className="showcase-img-div show-on-scroll" id="img-div">
          {this.props.children}
        </div>
        <div className="showcase-text">
          <h1 className="showcase-title">{this.props.title}</h1>
          <p>{this.props.body}</p>
        </div>
      </div>
    );
  }
}
export default Showcase;
