import styled, { css } from 'styled-components';

export const Section = styled.section`
  ${() => css`
    width: 90%;
    height: 100%;
    margin: 5rem auto;
    padding: 2rem;

  > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 5rem;
    gap: 4rem;
  }
`}
`;
