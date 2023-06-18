import * as Styled from './styles';


interface HeadingProps {
  children: React.ReactNode | string,
};
export const Heading = ({ children }: HeadingProps) => {
  return (
    <Styled.H2>
      {children}
    </Styled.H2>
  );
};
