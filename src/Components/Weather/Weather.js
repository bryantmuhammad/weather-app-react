import React from "react";
import WeatherInput from "./WeatherInput";
import WeatherBox from "./WeatherBox";
import WeatherDetail from "./WeatherDetail";

const Weather = (props) => {
  return (
    <div>
      <WeatherInput />
      <WeatherBox />
      <WeatherDetail />
    </div>
  );
};

export default Weather;
