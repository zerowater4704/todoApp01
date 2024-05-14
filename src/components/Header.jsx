import { css } from "@emotion/react";
import axios from "axios";
import { useEffect, useState } from "react";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
export default function Header() {
  const [weather, setWeather] = useState(null);

  
  const City = "Tokyo";

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${City}&APPID=${API_KEY}
  `;

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data", error);
      });
  }, []);

  function getWeatherIcon() {
    if (!weather) return null;
    const weatherMain = weather.weather[0].main;
    switch (weatherMain) {
      case "Clear":
        return <WbSunnyIcon style={{ fontSize: 28, color: "#ff5722" }} />;
      case "Clouds":
        return <CloudIcon style={{ fontSize: 28, color: "#546e7a" }} />;
      case "Snow":
        return <AcUnitIcon style={{ fontSize: 28, color: "#eeeeee" }} />;
      case "Rain":
        return <UmbrellaIcon style={{ fontSize: 28, color: "##1e88e5" }} />;
    }
  }

  return (
    <>
      <div className=" border-4 border-sky-300 text-4xl font-bold m-3 rounded-md">
        <header className="flex justify-center space-x-10">
          <h1 className="mb-2">Todo</h1>
          {weather ? <span>{getWeatherIcon()}</span> : <p>Loading ...</p>}
        </header>
      </div>
    </>
  );
}
