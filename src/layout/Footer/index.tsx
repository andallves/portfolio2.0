import { SocialMidia } from '../../components/SocialMidia';
import * as Styled from './styles';

export const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.ContainerContato>
      <Styled.ContainerField>
        <p>Call me:</p>
        <p>(85) 9927-94032</p>
      </Styled.ContainerField>
      <Styled.ContainerField>
        <p>Email:</p>
        <p>andrealves10a@gmail.com</p>
      </Styled.ContainerField>
      </Styled.ContainerContato>

      <SocialMidia isBigger={true}/>
    </Styled.Footer>
  );
};
