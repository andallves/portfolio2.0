import styled, { css } from 'styled-components';

export const H2 = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.sizes.xlarge};
    margin-bottom: 4rem;
    margin-left: 13rem;
    font-weight: 500;
  `}
`;
