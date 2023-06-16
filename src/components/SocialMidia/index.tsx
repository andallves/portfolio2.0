import * as Styled from './styles';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';


export const SocialMidia = () => {
  return(
    <Styled.Div>
      <span><BsGithub /></span>
      <span><BsLinkedin /></span>
      <span><BsInstagram /></span>
    </Styled.Div>
  )
}
