import * as Styled from './styles';
import { Curriculum } from '../../components/Curriculum';
import headerBg from '../../assets/imgs/header_bg.png';

export const Header = () => {
  return (
    <Styled.Header>
      <h1 >
        Olá, Eu sou Andre Alves!
      </h1>
      <div className="text-animate">
        <h3>Fullstack Developer.</h3>
      </div>

      <img src={headerBg} alt="Imagem abstrata" />

      <Curriculum />
    </Styled.Header>
  );
};
