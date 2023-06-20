import { AboutImage } from '../../components/AboutImage';
import { Heading } from '../../components/Heading';
import * as Styled from './styles';

export const AboutMe = () => {
  return (
    <Styled.Section id="about">
      <Heading>Sobre mim</Heading>

      <Styled.Container>
        <AboutImage />

        <Styled.P>
          Olá, Eu me chamo Andre, tenho 23 anos, sou estudande de Ciência da
          Computação no IFCE - Instituto Federal do Ceará, e com estudos
          paralelo em desenvolvimento web fullstack, quando eu tive o primeiro
          contato com a programação foi 'amor a primeira vista' rsrs, me
          identifiquei muito, e desde então venho buscando aprender novas
          tecnologias e praticando diariamente, no meu perfil do Github há
          diversos projetos desenvolvidos por mim ou inspirados em cursos que
          participei.
        </Styled.P>
      </Styled.Container>
    </Styled.Section>
  );
};
