import styled, { css } from 'styled-components';

export const Section = styled.section`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-items: flex-start;
    margin: 5rem auto;
  `}
`;
