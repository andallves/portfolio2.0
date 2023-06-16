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
        top: 10rem;
        left: 10rem;
        font-size: ${theme.sizes.xhuge};
        font-family: ${theme.fontFamily.default};
        font-style: normal;
        font-weight: 600;
        line-height: 9.6rem;

        color: ${theme.colors.whiteColor};
      }

      > p {
        position: absolute;
        width: 70rem;
        top: 20rem;
        left: 15rem;
        font-family: ${theme.fontFamily.default};
        font-style: normal;
        font-weight: 600;
        font-size: ${theme.sizes.medium};
        line-height: 3rem;

        color: #BCBCBC
      }

      > button {
        position: absolute;
        top: 33rem;
        left: 20rem;

      }
   `}
`;
