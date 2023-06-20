import { Button } from '../Button';
import * as Styled from './styles';

interface ProjectProps {
  projectImg: string;
  title: string;
  description: string;
  link: string
}
export const Project = ({ projectImg, title, description, link }: ProjectProps) => {
  return (
    <Styled.Project>
      <Styled.Image src={projectImg} alt="Imagem do project" />
      <Styled.H3>{title}</Styled.H3>
      <Styled.Div></Styled.Div>
      <Styled.P>{description}</Styled.P>
      <Styled.ContainerButton>
        <Button type={'button'} link={link}>Ir</Button>
      </Styled.ContainerButton>
    </Styled.Project>
  );
};
