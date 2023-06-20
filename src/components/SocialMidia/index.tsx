import * as Styled from './styles';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

interface SocialMidiaProps {
  isBigger: boolean;
}

export const SocialMidia = ({isBigger}: SocialMidiaProps) => {
  return (
    <Styled.Ul isBigger={isBigger}>
      <li>
        <a href='https://github.com/andallves' target='_blank'>
          <BsGithub />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/andre-alves-pereira-02738114b/' target='_blank'>
          <BsLinkedin />
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/andallves/' target='_blank'>
          <BsInstagram />
        </a>
      </li>
    </Styled.Ul>
  );
};
