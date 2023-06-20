import { Heading } from '../../components/Heading';
import { Project } from '../../components/Project';
import * as Styled from './styles';

export const Projects = () => {
  return (
    <Styled.Section id='projects'>
      <Heading>Projects</Heading>

      <div>
        <Project />
        <Project />
        <Project />
      </div>
    </Styled.Section>
  );
};
