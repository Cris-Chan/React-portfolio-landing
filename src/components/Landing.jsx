import React, { Component } from "react";
import "./Landing-style.css";

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
        <h1 className="landing-text"> &#123; CRISTIAN VILLANUEVA &#125; </h1>
        <a href="/">Software </a>
        <a href="/">Videography </a>
        <a href="/">Design </a>
      </div>
    </div>
  );
};

export default Landing;
