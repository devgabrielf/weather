import styled from 'styled-components';

export const FooterContainer = styled.footer`
  height: 75px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LanguageBox = styled.div`
  height: 35px;
  width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    width: 100%;
    font-size: 10px;
    margin-top: 3px;
    text-align: center;
    letter-spacing: 0.5px;
  }
`;

export const FlagsBox = styled.div`
  display: flex;
  gap: 12px;

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
  }

  img {
    height: 20px;
    width: 20px;
    pointer-events: none;
  }
`;
