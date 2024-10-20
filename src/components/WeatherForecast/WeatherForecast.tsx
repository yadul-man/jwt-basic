import React, { useState, useEffect } from "react";
import WeatherService from "../../services/WeatherService";
import { tokenHelper } from "../../utils/tokenHelper";
import ErrorDisplay from "../Shared/ErrorDisplay";

export const WeatherForecast = () => {
    const [forecast, setForecast] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const token = tokenHelper.getToken();
            if (!token) return;

            try {
                const data = await WeatherService.getWeather(token);
                setForecast(data);
            } catch (err) {
                setError("Unable to fetch weather data");
            }
        };

        fetchWeather();
    }, []);

    return (
        <div>
            <h2>Weather Forecast</h2>
            {error && <ErrorDisplay message={error} />}
            {forecast.length > 0 ? (
                <ul>
                    {forecast.map((item, index) => (
                        <li key={index}>
                            {item.date}: {item.temperatureC} °C - {item.summary}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};
