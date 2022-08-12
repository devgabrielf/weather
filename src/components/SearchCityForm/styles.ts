import styled from 'styled-components';

export const SearchCityFormContainer = styled.form`
  width: 100%;
  max-width: 710px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  h1 {
    font-size: 43px;
    letter-spacing: 5.8px;
    text-align: center;

    @media (max-width: 480px) {
      font-size: 30px;
      letter-spacing: 0.4px;
    }
  }

  svg {
    position: absolute;
    bottom: -60px;
  }

  button {
    color: var(--white);
    font-size: 12px;
    line-height: 15px;
    background: transparent;
    border: 0;
    cursor: pointer;

    position: absolute;
    bottom: -100px;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 1px;
    }
  }
`;

interface InputWrapperProps {
  hasBorderBottom: boolean;
}
export const InputWrapper = styled.div<InputWrapperProps>`
  height: 50px;
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;

  input {
    height: 100%;
    width: 100%;
    border-radius: 10px 10px
      ${props => (props.hasBorderBottom ? '10px 10px' : '0 0')};
    border: 0;
    outline: 0;
    padding: 0 15px;

    background: rgba(255, 255, 255, 0.77);
    font-size: 20px;
    color: var(--blue);
    caret-color: var(--pink);

    &::placeholder {
      font-size: 20px;
      color: var(--blue);
    }

    @media (max-width: 480px) {
      font-size: 16px;

      &::placeholder {
        font-size: 16px;
      }
    }
  }
`;

export const SuggestionsBox = styled.div`
  margin-top: 1px;
  background: rgba(255, 255, 255, 0.77);
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  span {
    padding: 15px;
    color: var(--blue);
    cursor: pointer;
    display: block;
  }
`;
