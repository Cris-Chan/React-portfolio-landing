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
        body="I'm a third year software engineering student and have been working with tech and development since my early highschool days! I've been working with technologies like: full stack web development, NodeJS, PHP, Python, c++, HTML, JS, and swift"
      >
        <img src="https://www.omgubuntu.co.uk/wp-content/uploads/2018/06/github-logo.jpeg" />
      </Carousel>

      <Carousel
        link="https://adobe.ly/2yQA1Tp"
        data-aos="fade-up"
        type="invert"
        title="PHOTOGRAPHY"
        body="Since my Mission trips around south america with my parents during my childhood, I've always been mesmerized by new places and people. Since those first few trips I began to fall in love with photography and LOVE to go around with friends and snap some photos to keep the memories. The equipment I use is my IphoneX and my Canon T5i"
      >
        <img src="https://i.imgur.com/dXBKvXY.jpg" />
      </Carousel>

      <Carousel
        link="https://dribbble.com/chris-bub"
        data-aos="fade-up"
        type=""
        title="DESIGN"
        body="My most recent university classes have opened my eyes to the world of HCI principals and design iterations. Here are a few designs I've done for classes or friends app ideas"
      >
        <img src="https://s3.amazonaws.com/www-inside-design/uploads/2015/06/Dribbble-InVision-feature-983x740.jpg" />
      </Carousel>
    </div>
  );
}

export default App;
