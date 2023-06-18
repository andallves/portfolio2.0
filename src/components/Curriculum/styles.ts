import styled, { css } from 'styled-components';

export const Div = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5rem;

    width: 17rem;
    height: 5rem;

    background: #24c6dc;
    background: -webkit-linear-gradient(to right, #494a9d, #24c6dc);
    background: linear-gradient(to right, #514a9d, #24c6dc);

    &:hover {
      background: rgba(0, 205, 255, 0.8);
    }

    a {
      > p {
        font-family: ${theme.fontFamily.default};
        font-style: normal;
        font-weight: 600;
        font-size: ${theme.sizes.xsmall};
        line-height: 4.2rem;

        color: ${theme.colors.whiteColor};
      }
    }
  `}
`;
