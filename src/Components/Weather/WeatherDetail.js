import React from "react";
import classes from "./WeatherDetail.module.css";
import { faWater, faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeatherDetail = (props) => {
  return (
    <div className={classes.detail}>
      <div className={classes.humidity}>
        <FontAwesomeIcon icon={faWater} className={classes.icon} />
        <div className={classes.text}>
          <span>99</span>
          <p>Humidity</p>
        </div>
      </div>
      <div className={classes.wind}>
        <FontAwesomeIcon icon={faWind} className={classes.icon} />
        <div className={classes.text}>
          <span>99</span>
          <p>Humidity</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetail;
