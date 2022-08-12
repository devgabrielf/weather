import { useWeather } from '../../contexts/WeatherContext';

import * as S from './styles';

export function TemperatureSwitch() {
  const { tempFormat, toggleTempFormat } = useWeather();

  return (
    <S.SwitchContainer>
      <span>°F</span>
      <S.Switch>
        <input
          type="checkbox"
          checked={tempFormat === 'C'}
          onChange={toggleTempFormat}
          data-testid="toggle-temp-format"
        />
        <S.Slider className="slider" />
      </S.Switch>
      <span>°C</span>
    </S.SwitchContainer>
  );
}
