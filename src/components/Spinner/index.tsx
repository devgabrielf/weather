import * as S from './styles';

export function Spinner() {
  return (
    <S.SpinnerContainer viewBox="0 0 50 50">
      <S.Circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></S.Circle>
    </S.SpinnerContainer>
  );
}
