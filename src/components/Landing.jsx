import React, { Component } from "react";
import "./Landing-style.css";
import "./landing.js";

const Landing = () => {
  return (
    <div className="landing-editorTheme flex-container">
      <div className="flex-container linecounter">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <p>11</p>
        <p>12</p>
        <p>13</p>
        <p>14</p>
        <p>15</p>
      </div>

      <div className="landing-flex">
        <h1 className="landing-text" id="mainText">
          {" "}
          &#123;CRISTIAN VILLANUEVA&#125;
          <input type="text" value="" />
        </h1>
        <a href="" id="link1">
          Coding{" "}
        </a>
        <a href="" id="link2">
          Photography{" "}
        </a>
        <a href="" id="link3">
          Design{" "}
        </a>
        <p id="aboutme">
          About me: I am a college student at Abilene Christian University
          studying computer science with a love for app development and design.
        </p>
        <p id="aboutme">Email: cgv15a@acu.edu</p>
      </div>
    </div>
  );
};

export default Landing;
