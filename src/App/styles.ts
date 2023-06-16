import styled, { css } from '../styles/styled-components';

export const Main = styled.main`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    background: ${theme.colors.backgroundColor};
`}
`;
