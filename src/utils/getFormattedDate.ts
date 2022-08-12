import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import enUS from 'date-fns/locale/en-US';
import es from 'date-fns/locale/es';
import { capitalizeFirstLetter } from './capitalizeFirstLetter';

export function getFormattedDate(unix: number, lang: 'pt' | 'en' | 'es') {
  let locale;

  if (lang === 'pt') {
    locale = ptBR;
  } else if (lang === 'en') {
    locale = enUS;
  } else if (lang === 'es') {
    locale = es;
  }

  const date = format(new Date(unix * 1000), 'ccc, dd LLL', { locale });

  const dayOfWeek = capitalizeFirstLetter(date.slice(0, 3));
  const day = date.split(', ')[1].slice(0, 2);
  const month = capitalizeFirstLetter(date.slice(date.length - 3));

  const formatted = `${dayOfWeek}, ${day} ${month}`;

  return formatted;
}
