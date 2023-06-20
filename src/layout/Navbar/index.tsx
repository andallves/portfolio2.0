import * as Styled from './styles';
import { Logo } from '../../components/Logo';
import { MenuLink } from '../../components/MenuLink';
import { SocialMidia } from '../../components/SocialMidia';

export const Navbar = () => {
   return (
      <Styled.Nav>
         <Logo />
         <MenuLink />
         <SocialMidia isBigger={false} />
      </Styled.Nav>
   );
};
