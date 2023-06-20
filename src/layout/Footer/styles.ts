import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${() => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 2rem 0;
  `}
`;

export const ContainerContato = styled.div`
  ${() => css`
    width: 50rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const ContainerField = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    > p {
      font-size: ${theme.sizes.small};
    }
  `}
`;
