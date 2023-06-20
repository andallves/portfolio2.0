import { Button } from '../Button';
import * as Styled from './styles';
import projectImg from '../../assets/imgs/project_img.png';

export const Project = () => {
  return (
    <Styled.Project>
      <img src={projectImg} alt="Imagem do project" />
      <h3>Project</h3>
      <div></div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa sequi ab mollitia nemo ex distinctio, ratione harum optio qui fugiat tenetur cupiditate consectetur esse accusamus ipsum delectus soluta. Vero.</p>
      <Button type={'button'}>Look it up</Button>
    </Styled.Project>
  );
};
