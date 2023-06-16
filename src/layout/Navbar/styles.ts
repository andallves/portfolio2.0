import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  ${() => css`
    position: relative;
    width: 90%;
    height: 10.7rem;
    left: 0;
    top: 0;
    
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-items: center;
    align-items: center;

  `}
`;
