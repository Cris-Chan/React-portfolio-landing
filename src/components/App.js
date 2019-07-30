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
        type=""
        title="PHOTOGRAPHY"
        body="I like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk the cat was chasing the mouse but eat the fat cats food. Sit on human they not getting up ever loves cheeseburgers burrow under covers"
      >
        <img src="https://i.imgur.com/dXBKvXY.jpg" />
      </Carousel>

      <Carousel
        data-aos="fade-up"
        type="invert"
        title="CODING"
        body="I like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk the cat was chasing the mouse but eat the fat cats food. Sit on human they not getting up ever loves cheeseburgers burrow under covers"
      >
        <img src="https://i.imgur.com/UeTwGns.png" />
      </Carousel>

      <Carousel
        data-aos="fade-up"
        type=""
        title="VIDEOGRAPHY"
        body="I like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk the cat was chasing the mouse but eat the fat cats food. Sit on human they not getting up ever loves cheeseburgers burrow under covers"
      >
        <img src="https://i.imgur.com/2HhW6X0.png" />
      </Carousel>
    </div>
  );
}

export default App;
