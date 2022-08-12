import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

import { WeatherProvider } from './contexts/WeatherContext';
import { Footer } from './components/Footer';
import { Main } from './components/Main';

export function App() {
  return (
    <WeatherProvider>
      <Header />

      <Main />

      <Footer />

      <GlobalStyle />
    </WeatherProvider>
  );
}
