import { render } from '../../utils/test-utils';
import { waitFor, screen, fireEvent } from '@testing-library/react';
import { Footer } from '.';

describe('<Footer />', () => {
  it('renders correctly', () => {
    render(<Footer />);

    expect(
      screen.getByText('Idioma selecionado: Português'),
    ).toBeInTheDocument();
  });

  it('should be able to change the language', async () => {
    render(<Footer />);

    const changeToPTButton = screen.getByTestId('pt');
    const changeToENButton = screen.getByTestId('en');
    const changeToESButton = screen.getByTestId('es');

    fireEvent.click(changeToENButton);

    await waitFor(() =>
      expect(
        screen.getByText('Selected language: English'),
      ).toBeInTheDocument(),
    );

    fireEvent.click(changeToESButton);

    await waitFor(() =>
      expect(
        screen.getByText('Lengua seleccionada: Español'),
      ).toBeInTheDocument(),
    );

    fireEvent.click(changeToPTButton);

    await waitFor(() =>
      expect(
        screen.getByText('Idioma selecionado: Português'),
      ).toBeInTheDocument(),
    );
  });
});
