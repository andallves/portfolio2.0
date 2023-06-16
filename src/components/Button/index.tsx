import * as Styled from './styles';

interface ButtonProps {
  children: string;
  type: 'button' | 'submit' | 'reset';
  width: string;
  height: string;
}
export const Button = ({ children, type, width, height }: ButtonProps) => {
  return (
    <Styled.Button type={type} width={width} height={height}>
      {children}
    </Styled.Button>
  );
};
