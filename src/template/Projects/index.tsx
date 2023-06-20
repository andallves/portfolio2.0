import { Heading } from '../../components/Heading';
import { Project } from '../../components/Project';
import TodoImage from '../../assets/imgs/project-todo.png';
import MultiStepFormImage from '../../assets/imgs/project-multistepform.png';
import AgendaImage from '../../assets/imgs/project-agenda.png';
import * as Styled from './styles';

export const Projects = () => {
  return (
    <Styled.Section id="projects">
      <Heading>Projects</Heading>

      <div>
        <Project
          projectImg={TodoImage}
          title={'Todo'}
          description={
            'No projeto Todo é uma lista de afazeres, onde é possível fazer um CRUD'
          }
          link={'https://github.com/andallves/todo'}
        />
        <Project
          projectImg={MultiStepFormImage}
          title={'Formulário MultiStep'}
          description={
            'Um formulário com várias etapas onde é possível pegar um questionário extenso e dividir-lo de acordo com as perguntas e só no final ele é enviado.'
          }
          link={'https://github.com/andallves/challenge_MultStepForm'}
        />
        <Project
          projectImg={AgendaImage}
          title={'Agenda de Contatos'}
          description={
            'Nessa agenda, você precisa fazer o cadastro, depois acessa seu login para poder salvar contatos, excluir, editar... CRUD'
          }
          link={'https://github.com/andallves/projetoagenda'}

        />
      </div>
    </Styled.Section>
  );
};
