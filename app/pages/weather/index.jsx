import React, { useState } from "react";
import { Box, Input, Button, Image } from "@chakra-ui/react";

/**
 * Renders a weather component that allows the user to search for weather data by city name.
*/

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  
    /**
     * Handles the search button click event and fetches weather data for the entered city.
     */

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=aa80c54b7fb20c9af2d1cc6bb38e14a1`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setWeatherData(data);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  // Function to get the message and background color based on weather
  const getMessage = (weather) => {
    switch (weather) {
      case "Clouds":
        return {
          message: "It's a cloudy day. It might be a good time to read a book. 📖",
          backgroundColor: "#7F7F7F", // Gray background
        };
      case "Clear":
        return {
          message: "It's a sunny day! Go out and enjoy! 🌞",
          backgroundColor: "#FEE75C", // Yellow background
        };
      case "Rain":
        return {
          message: "It's a rainy day. Don't forget your umbrella! ☔️",
          backgroundColor: "#68A3D9", // Blue background
        };
      case "Snow":
        return {
          message: "It's a snowy day. Enjoy the snowflakes! ❄️",
          backgroundColor: "#FFFFFF", // White background
        };
      default:
        return {
          message: "It's a beautiful day! Enjoy! 😊",
          backgroundColor: "#F8F8F8", // Light gray background
        };
    }
  };

  // Define the weather style based on the current weather data
  const weatherStyle = weatherData
    ? getMessage(weatherData.weather[0].main)
    : { message: "", backgroundColor: "#F8F8F8" }; // Default to light gray background

  return (
    <Box
      p="4"
      bg={weatherStyle.backgroundColor}
      mx="auto"
      mt="4"
      maxW="400px"
      borderRadius="lg"
    >
      <Input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        mb="2"
      />
      <Button colorScheme="teal" onClick={handleSearch}>
        Search
      </Button>
      {error && <Box color="red">Error: {error}</Box>}
      {weatherData && (
        <Box mt="4">
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>
            {weatherStyle.message} {(weatherData.main.temp - 273.15).toFixed(1)}°C
          </p>
          <Image
            boxSize="100px"
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].description}
          />
        </Box>
      )}
    </Box>
  );
};

export default Weather;
