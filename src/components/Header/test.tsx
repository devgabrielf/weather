import { render } from '../../utils/test-utils';
import { screen } from '@testing-library/react';
import { useWeather } from '../../contexts/WeatherContext';
import { Header } from '.';

jest.mock('../../contexts/WeatherContext');

describe('<Header />', () => {
  it('does not show back button if there is no data for weather', () => {
    const useWeatherMocked = jest.mocked(useWeather);

    useWeatherMocked.mockReturnValue({
      weatherData: null,
      resetSearch: jest.fn(),
      toggleTempFormat: jest.fn(),
    } as any);

    render(<Header />);

    expect(screen.queryByTestId('back-button')).not.toBeInTheDocument();
  });

  it('shows back button if there is data for weather', () => {
    const useWeatherMocked = jest.mocked(useWeather);

    useWeatherMocked.mockReturnValue({
      weatherData: {
        city: 'Belo Horizonte',
        weatherId: 800,
        icon: '01n',
        temp: 22,
        maxTemp: 12,
        minTemp: 24,
      },
      resetSearch: jest.fn(),
      toggleTempFormat: jest.fn(),
    } as any);

    render(<Header />);

    expect(screen.getByTestId('back-button')).toBeInTheDocument();
  });
});
