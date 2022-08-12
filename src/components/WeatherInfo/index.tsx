import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useWeather } from '../../contexts/WeatherContext';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import { getFormattedDate } from '../../utils/getFormattedDate';

import * as S from './styles';

export function WeatherInfo() {
  const { t, i18n } = useTranslation();

  const { weatherData, forecastData, format } = useWeather();
  const [isForecastActive, setIsForecastActive] = useState(false);

  if (!weatherData || !forecastData) {
    return <></>;
  }

  const selectedLanguage = i18n.language as 'pt' | 'en' | 'es';

  return (
    <S.WeatherInfoContainer>
      <h1>{weatherData.city.toUpperCase()}</h1>

      {isForecastActive ? (
        <>
          <span>{t('fiveDayForecast')}</span>

          <S.DayList>
            {forecastData.map(data => (
              <S.DayItem key={data.unix}>
                <S.Date>{getFormattedDate(data.unix, selectedLanguage)}</S.Date>

                <img
                  src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
                  alt={t(`weatherDescriptions.${data.weatherId}`)}
                />

                <span>{format(data.minTemp)}°</span>

                <S.Bar />

                <span>{format(data.maxTemp)}°</span>

                <span>{t(`weatherDescriptions.${data.weatherId}`)}</span>
              </S.DayItem>
            ))}
          </S.DayList>
        </>
      ) : (
        <>
          <span>
            {capitalizeFirstLetter(
              t(`weatherDescriptions.${weatherData.weatherId}`),
            )}
          </span>

          <S.Temperature>
            <span>{format(weatherData.temp)}°</span>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
              alt={t(`weatherDescriptions.${weatherData.weatherId}`)}
            />
          </S.Temperature>

          <S.MinMaxTemps>
            <strong>MAX: </strong>
            <span>{format(weatherData.maxTemp)}°</span>

            <strong> MIN: </strong>
            <span>{format(weatherData.minTemp)}°</span>
          </S.MinMaxTemps>

          <button
            onClick={() => setIsForecastActive(true)}
            data-testid="see-forecast"
          >
            {t('viewNextFiveDaysForecast')}
          </button>
        </>
      )}
    </S.WeatherInfoContainer>
  );
}
