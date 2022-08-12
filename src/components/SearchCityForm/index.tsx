import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { useWeather } from '../../contexts/WeatherContext';
import { Spinner } from '../Spinner';

import * as S from './styles';

export function SearchCityForm() {
  const { t } = useTranslation();

  const { fetchData, isLoading } = useWeather();

  const [address, setAddress] = useState('');
  const [noResultsFound, setNoResultsFound] = useState(false);

  async function handleSelectCity(value: any) {
    if (isLoading) {
      return;
    }

    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);

    setAddress(value);

    fetchData(latLng);
  }

  function handleSearchByGeolocation() {
    if (isLoading) {
      return;
    }
    navigator.geolocation.getCurrentPosition(position => {
      const latLng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      fetchData(latLng);
    });
  }

  function onError(status: string, clearSuggestions: () => void) {
    if (status === 'ZERO_RESULTS') {
      setNoResultsFound(true);
    }

    clearSuggestions();
  }

  return (
    <S.SearchCityFormContainer>
      <h1>{t('howIsWeatherToday')}</h1>

      <PlacesAutocomplete
        value={address.split(',')[0].split(' -')[0]}
        onChange={value => {
          setAddress(value);
          setNoResultsFound(false);
        }}
        onSelect={handleSelectCity}
        onError={onError}
        searchOptions={{
          componentRestrictions: {
            country: ['br'],
          },
        }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          const limitedSuggestions =
            suggestions.length > 3
              ? [...suggestions.slice(0, 3)]
              : [...suggestions];

          const noCitiesFound =
            !!limitedSuggestions.length &&
            limitedSuggestions.every(
              suggestion => suggestion.terms.length !== 3,
            );

          return (
            <S.InputWrapper
              hasBorderBottom={
                !address ||
                (!limitedSuggestions.length && !loading && !noResultsFound)
              }
            >
              <input
                {...getInputProps({ placeholder: t('enterTheCityName') })}
              />

              <S.SuggestionsBox>
                {loading && !limitedSuggestions.length && (
                  <span>{t('loading')}...</span>
                )}

                {noResultsFound || noCitiesFound ? (
                  <span>{t('noResultsFound')}</span>
                ) : (
                  address &&
                  limitedSuggestions.map(suggestion => {
                    if (suggestion.terms.length !== 3) {
                      return null;
                    }
                    const style = {
                      color: suggestion.active ? 'var(--pink)' : 'var(--blue)',
                    };

                    return (
                      <span
                        {...getSuggestionItemProps(suggestion, { style })}
                        key={suggestion.placeId}
                      >
                        {suggestion.terms[0].value}
                      </span>
                    );
                  })
                )}
              </S.SuggestionsBox>
            </S.InputWrapper>
          );
        }}
      </PlacesAutocomplete>

      {isLoading && <Spinner />}

      <button type="button" onClick={handleSearchByGeolocation}>
        {t('searchUsingMyLocale')}
      </button>
    </S.SearchCityFormContainer>
  );
}
