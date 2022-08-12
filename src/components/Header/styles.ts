import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 100px;
  padding-top: 50px;

  position: relative;

  @media (max-width: 480px) {
    padding-top: 20px;
  }

  div {
    position: absolute;
    right: 50px;

    @media (max-width: 480px) {
      right: 20px;
    }
  }
`;

export const BackButton = styled.button`
  height: 44px;
  width: 44px;
  background: transparent;
  border: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 50px;

  &:hover {
    img {
      transform: scale(0.9);
    }
  }

  @media (max-width: 480px) {
    height: 24px;
    width: 24px;
    left: 20px;
  }

  img {
    height: 100%;
    width: 100%;
    transition: transform 0.3s;
    pointer-events: none;
  }
`;
