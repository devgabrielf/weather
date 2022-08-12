import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { WeatherProvider } from '../contexts/WeatherContext';

function renderWithI18n(comp: ReactElement, renderOptions: RenderOptions = {}) {
  return render(
    <I18nextProvider i18n={i18n}>{comp}</I18nextProvider>,
    renderOptions,
  );
}

function renderWithWeatherContext(
  comp: ReactElement,
  renderOptions: RenderOptions = {},
) {
  return render(<WeatherProvider>{comp}</WeatherProvider>, renderOptions);
}

export { renderWithI18n as render, renderWithWeatherContext };
