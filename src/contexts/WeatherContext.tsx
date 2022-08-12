import { createContext, ReactNode, useContext, useState } from 'react';
import axios from 'axios';
import { usePersistedState } from '../utils/usePersistedState';

export interface Weather {
  city: string;
  weatherId: number;
  icon: string;
  temp: number;
  maxTemp: number;
  minTemp: number;
}

export interface Forecast {
  unix: number;
  weatherId: string;
  icon: string;
  maxTemp: number;
  minTemp: number;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface WeatherContextData {
  weatherData: Weather | null;
  forecastData: Forecast[] | null;
  isLoading: boolean;
  tempFormat: 'F' | 'C';

  format: (temp: number) => number;
  toggleTempFormat: () => void;
  fetchData: (coordinates: Coordinates) => void;
  resetSearch: () => void;
}

const WeatherContext = createContext<WeatherContextData>(
  {} as WeatherContextData,
);

interface WeatherProviderProps {
  children: ReactNode;
}

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);
  const [forecastData, setForecastData] = useState<Forecast[] | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [tempFormat, setTempFormat] = usePersistedState(
    '@weather:temp-format-1.0.0',
    'F',
  );

  function format(temp: number) {
    let formatted;

    if (tempFormat === 'F') {
      formatted = Math.round((temp - 273.15) * 1.8 + 32);
    } else {
      formatted = Math.round(temp - 273.15);
    }

    return formatted;
  }

  function toggleTempFormat() {
    setTempFormat(tempFormat === 'F' ? 'C' : 'F');
  }

  async function fetchData({ lat, lng }: Coordinates) {
    setIsLoading(true);

    try {
      const { data: current } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lang=pt&lat=${lat}&lon=${lng}&appid=${
          import.meta.env.VITE_PUBLIC_WEATHER_API_KEY
        }`,
      );

      const { data: forecast } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lang=pt&lat=${lat}&lon=${lng}&appid=${
          import.meta.env.VITE_PUBLIC_WEATHER_API_KEY
        }`,
      );

      setIsLoading(false);

      const currentInfo: Weather = {
        city: current.name,
        weatherId: current.weather[0].id,
        icon: current.weather[0].icon,
        temp: current.main.temp,
        maxTemp: current.main.temp_max,
        minTemp: current.main.temp_min,
      };

      const forecastDays = [];

      for (let i = 0; i < 40; i = i + 8) {
        forecastDays.push(forecast.list.slice(i, i + 7));
      }

      const forecastInfo: Forecast[] = forecastDays.map(day => {
        let maxTemp = 0;
        let minTemp = 1000;

        day.forEach((hour: any) => {
          if (hour.main.temp_max > maxTemp) {
            maxTemp = hour.main.temp_max;
          }

          if (hour.main.temp_min < minTemp) {
            minTemp = hour.main.temp_min;
          }
        });

        // day[4] = 12:00 AM
        const data: Forecast = {
          unix: day[4].dt,
          weatherId: day[4].weather[0].id,
          icon: day[4].weather[0].icon,
          maxTemp,
          minTemp,
        };

        return data;
      });

      setWeatherData(currentInfo);
      setForecastData(forecastInfo);
    } catch (e) {
      console.log(e);
    }
  }

  function resetSearch() {
    setWeatherData(null);
  }

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        forecastData,
        isLoading,
        tempFormat,
        format,
        toggleTempFormat,
        fetchData,
        resetSearch,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);

  return context;
}
