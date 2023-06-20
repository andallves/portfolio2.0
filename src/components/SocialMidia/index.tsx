import * as Styled from './styles';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

interface SocialMidiaProps {
  isBigger: boolean;
}

export const SocialMidia = ({isBigger}: SocialMidiaProps) => {
  return (
    <Styled.Ul isBigger={isBigger}>
      <li>
        <a>
          <BsGithub />
        </a>
      </li>
      <li>
        <a>
          <BsLinkedin />
        </a>
      </li>
      <li>
        <a>
          <BsInstagram />
        </a>
      </li>
    </Styled.Ul>
  );
};
