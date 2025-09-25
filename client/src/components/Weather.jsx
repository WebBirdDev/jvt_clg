import React, { useEffect, useState } from "react";

const Weather = () => {
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
        const city = "Jaffna";
        const country = "LK";

        if (!apiKey) {
          throw new Error("API key is missing! Check your .env file.");
        }

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`
        );

        const data = await response.json();
        // console.log("Weather API response:", data);

        if (response.ok && data.main) {
          setTemperature(data.main.temp);
        } else {
          throw new Error(data.message || "Weather data not found");
        }
      } catch (err) {
        console.error("Error fetching weather:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="text-center">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-600">❌ {error}</p>
      ) : (
        <p className="text-2xl font-semibold">{temperature}°C</p>
      )}
    </div>
  );
};

export default Weather;
