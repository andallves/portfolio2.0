import { Button } from '../../components/Button';
import * as Styled from './styles';

export const Header = () => {
  return (
    <Styled.Header>
      <h1>I'm Andre Alves Web Developer</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed culpa quos
        tempora odit rerum id, consequatur temporibus aliquam quam quae officia
      </p>
      <Button type={'button'} width={'17rem'} height={'5rem'}>
        Let's begin
      </Button>
    </Styled.Header>
  );
};
