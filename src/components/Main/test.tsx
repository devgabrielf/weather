import { render } from '../../utils/test-utils';
import { screen } from '@testing-library/react';
import { Main } from '.';

jest.mock('../../contexts/WeatherContext', () => {
  return {
    useWeather() {
      return {
        weatherData: {
          city: 'Belo Horizonte',
          weatherId: 800,
          icon: '01n',
          temp: 22,
          maxTemp: 12,
          minTemp: 24,
        },
        forecastData: [
          {
            unix: 1659193200,
            weatherId: 800,
            icon: '01d',
            maxTemp: 26,
            minTemp: 14,
          },
          {
            unix: 1659279600,
            weatherId: 800,
            icon: '01d',
            maxTemp: 27,
            minTemp: 15,
          },
        ],
        format: (temp: number) => temp,
      };
    },
  };
});

describe('<Main />', () => {
  it('shows weather info component if there is data for weather', () => {
    render(<Main />);

    expect(screen.getByText('BELO HORIZONTE')).toBeInTheDocument();
  });
});
