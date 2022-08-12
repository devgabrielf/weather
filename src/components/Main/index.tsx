import { useWeather } from '../../contexts/WeatherContext';
import { SearchCityForm } from '../SearchCityForm';
import { WeatherInfo } from '../WeatherInfo';

import * as S from './styles';

export function Main() {
  const { weatherData } = useWeather();

  return (
    <S.MainContainer>
      {!weatherData ? <SearchCityForm /> : <WeatherInfo />}
    </S.MainContainer>
  );
}
