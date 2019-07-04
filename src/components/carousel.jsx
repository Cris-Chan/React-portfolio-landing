import React, { Component } from "react";
import "./carousel.css";

const Showcase = props => {
  return (
    <div
      className={
        props.type === "invert" ? "showcase-body-invert" : "showcase-body"
      }
    >
      <div className="showcase-img-div">{props.children}</div>
      <div className="showcase-text">
        <h1 className="showcase-title">{props.title}</h1>
        <p>{props.body}</p>
      </div>
    </div>
  );
};

export default Showcase;
