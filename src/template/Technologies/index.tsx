import { Heading } from '../../components/Heading';
import { Skill } from '../../components/Skill';
import * as Styled from './styles';

export const Technologies = () => {
  return (
    <Styled.Section id='technologies'>
      <Heading>Tecnologias</Heading>

      <Styled.ContainerSkills>
        <Skill technology={'HTML5'} level={'Advanced'} porcent={'90%'} />
        <Skill technology={'CSS3'} level={'Advanced'} porcent={'80%'} />
        <Skill technology={'JavaScript'} level={'Intermediate'} porcent={'70%'} />
        <Skill technology={'TypeScript'} level={'Intermediate'} porcent={'50%'} />
        <Skill technology={'React'} level={'Intermediate'} porcent={'70%'} />
        <Skill technology={'Styled-Components'} level={'Intermediate'} porcent={'50%'} />
        <Skill technology={'Jest'} level={'Intermediate'} porcent={'50%'} />
        <Skill technology={'Node'} level={'Intermediate'} porcent={'40%'} />
        <Skill technology={'BootStrap'} level={'Intermediate'} porcent={'60%'} />
        <Skill technology={'Python'} level={'Beginner'} porcent={'30%'} />
        <Skill technology={'MySQL'} level={'Beginner'} porcent={'30%'} />
      </Styled.ContainerSkills>

      <Styled.ContainerAdditionalSkills>
        <h3>Habilidades e Tecnologias adicionais</h3>
        <ul>
          <li>Git</li>
          <li>npm</li>
          <li>Storybook</li>
          <li>Testing-library</li>
        </ul>
      </Styled.ContainerAdditionalSkills>
    </Styled.Section>
  );
};
