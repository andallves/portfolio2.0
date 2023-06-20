import styled, { css } from 'styled-components';

export const Section = styled.section`
  ${() => css`
    width: 90%;
    height: 100%;
    margin: 5rem auto;
    padding: 2rem;
  `}
`;

export const ContainerSkills = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 3rem 5rem;
    gap: 4rem;
  `}
`;

export const ContainerAdditionalSkills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-items: flex-start;
  margin: 5rem auto;

  > h3 {
    margin-left: 10rem;
    font-size: ${({ theme }) => theme.sizes.large};
    font-weight: 500;
  }

  > ul {
    margin: 3rem auto;
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 20rem;

    > li {
      font-size: ${({ theme }) => theme.sizes.medium};
    }
  }
`;
