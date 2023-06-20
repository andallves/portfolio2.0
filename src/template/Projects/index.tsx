import { Heading } from '../../components/Heading';
import { Project } from '../../components/Project';
import TodoImage from '../../assets/imgs/project-todo.png';
import MultiStepFormImage from '../../assets/imgs/project-multistepform.png';
import AgendaImage from '../../assets/imgs/project-agenda.png';
import * as Styled from './styles';

export const Projects = () => {
  return (
    <Styled.Section id="projects">
      <Heading>Projetos</Heading>

      <div>
        <Project
          projectImg={TodoImage}
          title={'Todo'}
          description={
            'Uma lista de afazeres, onde é possível fazer um CRUD completo.'
          }
          link={'https://github.com/andallves/todo'}
        />
        <Project
          projectImg={MultiStepFormImage}
          title={'Formulário MultiStep'}
          description={
            'Um formulário com várias etapas e só no final ele é enviado.'
          }
          link={'https://github.com/andallves/challenge_MultStepForm'}
        />
        <Project
          projectImg={AgendaImage}
          title={'Agenda de Contatos'}
          description={
            'Uma agenda onde você faz o cadastro, depois acessa seu login para poder fazer o CRUD.'
          }
          link={'https://github.com/andallves/projetoagenda'}

        />
      </div>
    </Styled.Section>
  );
};
