import { useTranslation } from 'react-i18next';

import * as S from './styles';

export function Footer() {
  const { t, i18n } = useTranslation();

  function handleSelectLanguage(lng: string) {
    i18n.changeLanguage(lng);
    localStorage.setItem('@weather:language-1.0.0', lng);
    document.documentElement.setAttribute('lang', lng);
  }

  const selectedLanguage =
    i18n.language === 'en'
      ? 'english'
      : i18n.language === 'es'
      ? 'spanish'
      : 'portuguese';

  return (
    <S.FooterContainer>
      <S.LanguageBox>
        <S.FlagsBox>
          <button
            onClick={() => handleSelectLanguage('pt')}
            title="Português"
            data-testid="pt"
          >
            <img src="/src/assets/flags/brazil.svg" alt={t('brazilianFlag')} />
          </button>
          <button
            onClick={() => handleSelectLanguage('en')}
            title="English"
            data-testid="en"
          >
            <img src="/src/assets/flags/usa.svg" alt={t('unitedStatesFlag')} />
          </button>
          <button
            onClick={() => handleSelectLanguage('es')}
            title="Español"
            data-testid="es"
          >
            <img src="/src/assets/flags/spain.svg" alt={t('spainFlag')} />
          </button>
        </S.FlagsBox>

        <span>
          {t('selectedLanguage')}: {t(selectedLanguage)}
        </span>
      </S.LanguageBox>
    </S.FooterContainer>
  );
}
