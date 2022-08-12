import { renderWithWeatherContext } from '../../utils/test-utils';
import { screen, fireEvent } from '@testing-library/react';
import { TemperatureSwitch } from '.';

describe('<TemperatureSwitch />', () => {
  it('changes the temperature format', () => {
    renderWithWeatherContext(<TemperatureSwitch />);

    const toggleTempFormatInput = screen.getByTestId('toggle-temp-format');

    expect(toggleTempFormatInput).not.toBeChecked();

    fireEvent.click(toggleTempFormatInput);

    expect(toggleTempFormatInput).toBeChecked();
  });
});
