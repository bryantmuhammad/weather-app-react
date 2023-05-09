import React from "react";
import classes from "./WeatherBox.module.css";
import rain from "./../../Asset/rain.png";
import mist from "./../../Asset/mist.png";
import clear from "./../../Asset/clear.png";
import snow from "./../../Asset/snow.png";
import cloud from "./../../Asset/cloud.png";

const WeatherBox = (props) => {
  return (
    <div className={classes.box}>
      <div>
        <img src={rain} alt="Weather-image" />
      </div>
      <div className={classes.temperature}>
        1<span>c</span>
      </div>
      <div className={classes.weather}>Snow</div>
    </div>
  );
};

export default WeatherBox;
