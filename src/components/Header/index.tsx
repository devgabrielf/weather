import { useWeather } from '../../contexts/WeatherContext';
import { TemperatureSwitch } from '../TemperatureSwitch';

import { useTranslation } from 'react-i18next';

import * as S from './styles';

export function Header() {
  const { t } = useTranslation();

  const { weatherData, resetSearch } = useWeather();

  return (
    <S.HeaderContainer>
      {!!weatherData && (
        <S.BackButton
          onClick={resetSearch}
          title={t('return')}
          data-testid="back-button"
        >
          <img src="/src/assets/back-arrow.svg" alt={t('leftArrow')} />
        </S.BackButton>
      )}

      <TemperatureSwitch />
    </S.HeaderContainer>
  );
}
