import React from "react";
import "./App.css";
import Nav from "./nav";
import Carousel from "./carousel.jsx";
import Landing from "./Landing.jsx";
import { findDOMNode } from "react-dom";
import $ from "jquery";

function App() {
  return (
    <div>
      <Landing />

      <Carousel
        data-aos="fade-up"
        link="https://github.com/Cris-Chan"
        type=""
        title="CODING"
        body="I like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk the cat was chasing the mouse but eat the fat cats food. Sit on human they not getting up ever loves cheeseburgers burrow under covers"
      >
        <img src="https://www.omgubuntu.co.uk/wp-content/uploads/2018/06/github-logo.jpeg" />
      </Carousel>

      <Carousel
        link="https://adobe.ly/2yQA1Tp"
        data-aos="fade-up"
        type="invert"
        title="PHOTOGRAPHY"
        body="I like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk the cat was chasing the mouse but eat the fat cats food. Sit on human they not getting up ever loves cheeseburgers burrow under covers"
      >
        <img src="https://i.imgur.com/dXBKvXY.jpg" />
      </Carousel>

      <Carousel
        link="https://dribbble.com/chris-bub"
        data-aos="fade-up"
        type=""
        title="DESIGN"
        body="I like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk the cat was chasing the mouse but eat the fat cats food. Sit on human they not getting up ever loves cheeseburgers burrow under covers"
      >
        <img src="https://s3.amazonaws.com/www-inside-design/uploads/2015/06/Dribbble-InVision-feature-983x740.jpg" />
      </Carousel>
    </div>
  );
}

export default App;
