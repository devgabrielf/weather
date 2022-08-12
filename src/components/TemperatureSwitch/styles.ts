import styled from 'styled-components';

export const SwitchContainer = styled.div`
  height: 30px;
  width: 95px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    height: 20px;
    width: 79px;
  }

  > span {
    width: 17px;
    line-height: 18px;
    font-size: 15px;
    color: var(--gray-light);

    @media (max-width: 480px) {
      width: 14px;
      line-height: 15px;
      font-size: 12px;
    }
  }
`;

export const Switch = styled.label`
  height: 30px;
  width: 50px;
  position: relative;
  display: inline-block;

  @media (max-width: 480px) {
    height: 20px;
    width: 40px;
  }

  input {
    height: 0;
    width: 0;
    opacity: 0;

    &:checked + .slider {
      background: var(--pink);
    }

    &:checked + .slider:before {
      transform: translateX(20px);

      @media (max-width: 480px) {
        transform: translateX(16px);
      }
    }
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  border-radius: 30px;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(28, 36, 40, 0.49);
  transition: background-color 0.4s;

  &:before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 5px;
    bottom: 5px;
    background: var(--gray-light);
    opacity: 1;
    border-radius: 20px;

    transition: transform 0.4s;

    @media (max-width: 480px) {
      height: 14px;
      width: 14px;
      bottom: 3px;
    }
  }
`;
