import * as Styled from './styles';

interface ButtonProps {
  children: React.ReactNode | string;
  type: 'button' | 'submit' | 'reset';
}

export const Button = ({ children, type }: ButtonProps) => {
  return (
    <Styled.Button type={type}>
      {children}
    </Styled.Button>
  );
};
