import styled, { css } from 'styled-components';

interface LevelPorcentBar {
  readonly porcent: string;
}

export const Div = styled.div<LevelPorcentBar>`
  ${({ theme, porcent }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 70%;
    height: 100%;
    margin: auto;

    > div {
      width: 97%;
      display: flex;
      flex-direction: row;
      align-items: baseline;
      justify-content: space-between;
      margin: 0 auto;

      > h3 {
        font-family: ${theme.fontFamily.default};
        font-style: normal;
        font-weight: 500;
        font-size: ${theme.sizes.medium};
        line-height: 5rem;
        color: ${theme.colors.whiteColor};
      }

      > p {
        font-family: ${theme.fontFamily.default};
        font-style: normal;
        font-weight: 400;
        font-size: ${theme.sizes.xsmall};
        line-height: 3.6rem;
      }
    }

    > div.rectangle2 {
      position: absolute;
      width: ${porcent};
      height: 2rem;
      top: 3.8rem;
      left: 0;

      background: #24c6dc;
      background: -webkit-linear-gradient(to right, #514a9d, #24c6dc);
      background: linear-gradient(to right, #514a9d, #24c6dc);
      border-radius: 8.3rem;
      z-index: 10;
    }

    > div.rectangle1 {
      position: absolute;
      width: 100%;
      height: 2rem;
      top: 3.8rem;
      background: ${theme.colors.blueColor};
      border-radius: 8.3rem;
    }
  `}
`;
