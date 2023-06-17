import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ;
    gap: 2rem;

    > h2 {
      width:17.4rem;
      height:4.5rem;
      left: calc(50% - 12.4rem/2) - 70.6rem;
      color: ${theme.colors.whiteColor};

      font-family: 'Satisfy', cursive;
      font-style: normal;
      font-weight: 500;
      font-size: ${theme.sizes.xlarge};
      line-height: 4.5rem;
      color: ${theme.colors.grayColor};
    }
  `}
`;
