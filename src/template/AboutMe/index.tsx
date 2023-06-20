import { AboutImage } from '../../components/AboutImage';
import { Heading } from '../../components/Heading';
import * as Styled from './styles';

export const AboutMe = () => {
  return (
    <Styled.Section id='about'>
      <Heading>About me</Heading>

      <Styled.Container>
        <AboutImage />

        <Styled.P>
          Quando eu tive o primeiro contato com a programação me identifiquei
          muito, e desde então venho buscando aprender novas tecnologias e
          praticando diariamente, dessa forma sinto-me opto para contribuir,
          assim busco minha primeira oportunidade. Sou um pouco tímido mas gosto
          de trabalhar em equipe e prezo por uma boa comunicação, pois acredito
          que a troca de experiência é sempre valida.
        </Styled.P>
      </Styled.Container>
    </Styled.Section>
  );
};
