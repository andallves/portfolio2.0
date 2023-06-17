import styled, { css } from 'styled-components';


export const Button = styled.button`
  ${({ theme }) => css`
    

    background: #00d2ff; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #928dab,
      #00d2ff
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #928dab,
      #00d2ff
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    border-radius: 5rem;

    font-family: ${theme.fontFamily.default};
    font-style: normal;
    font-weight: 600;
    font-size: ${theme.sizes.small};
    line-height: 4.2rem;

    color: ${theme.colors.whiteColor};
  `}
`;
