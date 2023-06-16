import styled,  { css } from 'styled-components';

export const Div = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 12.1rem;

    > span {
      font-size: ${theme.sizes.small};
      color: ${theme.colors.whiteColor}
    }
  `}
`;
