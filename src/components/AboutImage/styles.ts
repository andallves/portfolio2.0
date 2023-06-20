import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 90%;
  border-radius: 50%;
  border: 0.2rem solid ${({theme}) => theme.colors.gradientColor};
`;

export const Span = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-top: 0.2rem solid ${({theme}) => theme.colors.backgroundColor};
  border-bottom: 0.2rem solid ${({theme}) => theme.colors.backgroundColor};
  border-left: 0.2rem solid ${({theme}) => theme.colors.gradientColor};
  border-right: 0.2rem solid ${({theme}) => theme.colors.gradientColor};
  animation: aboutSpinner 8s linear infinite;

  @keyframes aboutSpinner {
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
