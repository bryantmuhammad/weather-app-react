import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import classes from "./WeatherInput.module.css";

const WeatherInput = (props) => {
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <FontAwesomeIcon icon={faLocationDot} className={classes.icon} />
        <input placeholder="Enter Your Location" />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

export default WeatherInput;
