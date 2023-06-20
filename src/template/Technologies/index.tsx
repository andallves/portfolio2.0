import { Heading } from '../../components/Heading';
import { Skill } from '../../components/Skill';
import * as Styled from './styles';

export const Technologies = () => {
  return (
    <Styled.Section id='technologies'>
      <Heading>Technologies</Heading>

      <Styled.ContainerSkills>
        <Skill technology={'Html'} level={'Advanced'} porcent={'90%'} />
        <Skill technology={'CSS'} level={'Advanced'} porcent={'80%'} />
        <Skill technology={'JavaScript'} level={'Advanced'} porcent={'60%'} />
        <Skill technology={'Jest'} level={'started'} porcent={'9%'} />
        <Skill technology={'React'} level={'Advanced'} porcent={'70%'} />
        <Skill technology={'TypeScript'} level={'Advanced'} porcent={'40%'} />
      </Styled.ContainerSkills>

      <Styled.ContainerAdditionalSkills>
        <h3>Additional technologies and skills</h3>
        <ul>
          <li>Git</li>
          <li>npm</li>
          <li>storybook</li>
          <li>Testing-library</li>
          
        </ul>
      </Styled.ContainerAdditionalSkills>
    </Styled.Section>
  );
};
