import styled from 'styled-components';

export const SpinnerContainer = styled.svg`
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }

  animation: rotate 2s linear infinite;
  z-index: 2;
  width: 30px;
  height: 30px;
`;

export const Circle = styled.circle`
  stroke: var(--white);
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
`;
