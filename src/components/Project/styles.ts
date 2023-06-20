import styled, { css } from 'styled-components';

export const Project = styled.div`
  ${({ theme }) => css`
    box-sizing: border-box;
    width: 30rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    border-top-left-radius: 3rem;
    border-bottom-right-radius: 3rem;
    box-shadow: 0 0 0.9rem 0.1rem #00d2ff;
    padding: 2rem;

    > img {
      width: 25rem;
      border-radius: 0.5rem;
    }

    > h3 {
      font-family: ${theme.fontFamily.default};
      font-style: normal;
      font-weight: 500;
      font-size: ${theme.sizes.large};
      line-height: 88.5%;
    }

    > div {
      width: 20rem;
      height: 0.4rem;
      background: #24c6dc;
      background: -webkit-linear-gradient(to right, #514a9d, #24c6dc);
      background: linear-gradient(to right, #514a9d, #24c6dc);
      border-radius: 8.3rem;
    }

    > p {
      font-size: ${theme.sizes.xsmall};
    }

    > button {
      left: 0;
    }
  `}
`;
