import styled, { css } from 'styled-components';

interface ulWidth {
  readonly isBigger: boolean
}

export const Ul = styled.ul<ulWidth>`
  ${({ theme, isBigger = false }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: ${isBigger ? '25rem' : '10.1rem'};
    list-style: none;

    > li {
      margin: 0 1rem;

      > a {
        > svg {
          fill: ${theme.colors.whiteColor};
          font-size: ${isBigger ? theme.sizes.huge : theme.sizes.small};
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
