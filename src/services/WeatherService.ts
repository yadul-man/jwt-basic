import axios from "axios";
import { WeatherForecastResponse } from "../models/WeatherForecast";

const API_URL = process.env.REACT_APP_API_BASE_URL + "/WeatherForecast";

export default class WeatherService {
    // Get the list of weather forecasts
    static async getWeather(token: string) {
        const response = await axios.get<WeatherForecastResponse[]>(API_URL, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    }
}
