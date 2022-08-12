import { render } from '../../utils/test-utils';
import { screen, fireEvent } from '@testing-library/react';
import { WeatherInfo } from '.';

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

describe('<SearchCityForm />', () => {
  it('renders correct weather data', async () => {
    render(<WeatherInfo />);

    expect(screen.getByText('BELO HORIZONTE')).toBeInTheDocument();
    expect(screen.getByText('Céu limpo')).toBeInTheDocument();
    expect(screen.getByText('22°')).toBeInTheDocument();
    expect(screen.getByText('12°')).toBeInTheDocument();
    expect(screen.getByText('24°')).toBeInTheDocument();
  });

  it('show forecast data when button is clicked', () => {
    render(<WeatherInfo />);

    const seeForecastButton = screen.getByTestId('see-forecast');

    fireEvent.click(seeForecastButton);

    expect(screen.getByText('Sáb, 30 Jul')).toBeInTheDocument();
    expect(screen.getByText('14°')).toBeInTheDocument();
    expect(screen.getByText('26°')).toBeInTheDocument();
    expect(screen.getByText('Dom, 31 Jul')).toBeInTheDocument();
    expect(screen.getByText('15°')).toBeInTheDocument();
    expect(screen.getByText('27°')).toBeInTheDocument();
  });
});
