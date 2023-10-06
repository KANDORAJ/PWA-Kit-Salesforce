import React, { useState } from "react";
import { Box, Input, Button } from "@chakra-ui/react";

/**
 * Renders a weather component that allows the user to search for weather data of a city.
 */

const Weather = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/3.0/weather?q=${city}&appid=cdfda99bd5060f1854ddf08e686776f5`
            );
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error(error);
        }
    };

    const getIcon = (weather) => {
        switch (weather) {
            case "Clouds":
                return "☁️";
            case "Clear":
                return "☀️";
            case "Rain":
                return "🌧️";
            case "Snow":
                return "❄️";
            default:
                return "🌤️";
        }
    };

    return (
        <Box>
            <Input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
            {weatherData && (
                <Box>
                    <h2>
                        {weatherData.name}, {weatherData.sys.country}
                    </h2>
                    <p>
                        {getIcon(weatherData.weather[0].main)}{" "}
                        {(weatherData.main.temp - 273.15).toFixed(1)}°C
                    </p>
                </Box>
            )}
        </Box>
    );
};

export default Weather;
