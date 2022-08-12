import styled from 'styled-components';

export const WeatherInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 48px;
    font-weight: bold;
    letter-spacing: 5.8px;
    text-align: center;

    margin-bottom: 5px;

    @media (max-width: 760px) {
      font-size: 36px;
    }

    @media (max-width: 480px) {
      font-size: 29px;
    }
  }

  > span {
    font-size: 20px;
    margin-bottom: 5px;

    @media (max-width: 480px) {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }

  button {
    color: var(--white);
    font-size: 12px;
    line-height: 15px;
    background: transparent;
    border: 0;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 1px;
    }
  }
`;

export const DayList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 15px;
  margin-top: 90px;

  @media (max-width: 760px) {
    margin-top: 15px;
  }
`;

export const DayItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: stretch;

  img {
    height: 40px;
    width: 40px;
    margin: 0 25px;

    @media (max-width: 480px) {
      height: 20px;
      width: 20px;
      margin: 0 10px;
    }
  }

  span:not(:first-child) {
    min-width: 27px;
    margin: 0 20px;
    line-height: 20px;

    @media (max-width: 480px) {
      font-size: 12px;
      margin: 0 10px;
    }
  }

  span:last-child {
    @media (max-width: 760px) {
      display: none;
    }
  }
`;

export const Date = styled.span`
  min-width: 134px;
  max-width: 134px;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 760px) {
    min-width: 100px;
    max-width: 100px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    min-width: 84px;
    max-width: 84px;
    font-size: 12px;
  }
`;

export const Bar = styled.div`
  height: 4px;
  min-width: 176px;
  max-width: 176px;
  background: linear-gradient(to right, #b5c69b, rgba(224, 151, 42, 0.53));

  @media (max-width: 760px) {
    min-width: 97px;
    max-width: 97px;
  }
`;

export const Temperature = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  @media (max-width: 480px) {
    height: 59px;
    margin-left: 40px;
  }

  span {
    width: 112px;
    font-size: 64px;
    line-height: 59px;
    letter-spacing: 0.5px;

    @media (max-width: 480px) {
      width: 80px;
      font-size: 48px;
    }
  }

  img {
    height: 100px;
    width: 100px;

    @media (max-width: 480px) {
      height: 54px;
      width: 54px;
    }
  }
`;

export const MinMaxTemps = styled.div`
  height: 24px;
  margin-bottom: 20.5px;

  strong,
  span {
    font-size: 20px;
  }
`;
