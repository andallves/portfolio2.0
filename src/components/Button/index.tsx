import * as Styled from './styles';

interface ButtonProps {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  width: string;
  height: string;
}
export const Button = ({ children, type }: ButtonProps) => {
  return (
    <Styled.Button type={type}>
      {children}
    </Styled.Button>
  );
};
