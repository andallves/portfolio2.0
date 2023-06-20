import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 80vh;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    justify-items: start;
    align-items: center;
    gap: 2rem;

    > h1 {
      position: absolute;
      top: 15rem;
      left: 10rem;
      font-size: ${theme.sizes.xhuge};
      font-family: ${theme.fontFamily.default};
      font-style: normal;
      font-weight: 600;
      line-height: 4rem;
      color: ${theme.colors.whiteColor};
    }

    > .text-animate {
      position: absolute;
      left: 13rem;
      top: 20rem;
      width: 35rem;
    }

    > .text-animate h3 {
      font-size: 3.2rem;
      font-weight: 700;
      font-style: italic;
      letter-spacing: .1rem;
      color: transparent;
      -webkit-text-stroke: 0.7px ${theme.colors.gradientColor};
      background-image: linear-gradient(${theme.colors.gradientColor}, ${theme.colors.gradientColor});
      background-repeat: no-repeat;
      background-clip: text;
      -webkit-background-clip: text;
      background-position: -33rem 0;

      -webkit-text-stroke: 0.7px ${theme.colors.gradientColor};
      animation: homeBgText 6s linear infinite;
      animation-delay: 2s;
    }

    > .text-animate h3::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      border-right: 2px solid ${theme.colors.gradientColor};
      animation: homeCursorText 6s linear infinite;
      animation-delay: 2s;
    }

    > p {
      position: absolute;
      width: 70rem;
      top: 22rem;
      left: 15rem;
      font-family: ${theme.fontFamily.default};
      font-style: normal;
      font-weight: 500;
      font-size: ${theme.sizes.medium};
      line-height: 3rem;
      color: ${theme.colors.grayColor};
    }

    > img {
      position: absolute;
      width: 51rem;
      top: -1rem;
      right: 12rem;
      opacity: 0.8;

    }

    > div {
      position: absolute;
      top: 37rem;
      left: 20rem;
    }

    /* KEYFRAMES ANIMATIONk */
    @keyframes homeBgText {
      0%,
      10%,
      100% {
        background-position: -35rem 0;
      }

      65%,
      85% {
        background-position: 0 0;
      }
    }

    @keyframes homeCursorText {
      0%,
      10%,
      100% {
        width: 0;
      }

      65%,
      78%,
      85% {
        width: 100%;
        opacity: 1;
      }

      75%,
      81% {
        opacity: 0;
      }
    }
  `}
`;
