import styled, { css } from 'styled-components';

export const Section = styled.section`
  ${() => css`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-items: flex-start;
    margin: 5rem auto;
    padding: 2rem;
  `}
`;

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin: 5rem auto;
`;

export const P = styled.p`
  position: relative;
  font-size: 1.8rem;
  margin: 2rem 0 3rem;
  padding: 4rem;
  color: ${({theme}) => theme.colors.grayColor};
`;
