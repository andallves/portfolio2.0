import styled, { css } from 'styled-components';

export const Menu = styled.div`
  ${({ theme }) => css`
      width: 45rem;
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      > a {
        font-family: ${theme.fontFamily.default};
        font-style: normal;
        font-weight: 500;
        font-size: ${theme.sizes.small};
        line-height: 4.5rem;

        color: ${theme.colors.whiteColor};
        transition: all .3s;

        &:hover {
          color: ${theme.colors.gradientColor};
        }
      }
   `}
`;
