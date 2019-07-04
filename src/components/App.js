import React from "react";
import "./App.css";
import Nav from "./nav";
import Carousel from "./carousel";
import Landing from "./Landing";

function App() {
  return (
    <div>
      <Landing />
      <Carousel
        type=""
        title="Photography"
        body="I like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk the cat was chasing the mouse but eat the fat cats food. Sit on human they not getting up ever loves cheeseburgers burrow under covers"
      >
        <img src="https://images.unsplash.com/photo-1441239372925-ac0b51c4c250?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
      </Carousel>
    </div>
  );
}

export default App;
