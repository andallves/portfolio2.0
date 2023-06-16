import styled, { css } from 'styled-components';

export const Ul = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 10.1rem;
    list-style: none;

    > li {
      margin: 0 1rem;

      > a {
        > svg {
          fill: ${theme.colors.whiteColor};
          font-size: ${theme.sizes.small};
          cursor: pointer;
          transition: all 0.4s;

          &:hover {
            fill: ${theme.colors.gradientColor}; /* fallback for old browsers */
          }
        }
      }
    }
  `}
`;
