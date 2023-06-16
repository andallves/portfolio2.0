import * as Styled from './styles';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

export const SocialMidia = () => {
  return (
    <Styled.Ul>
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
