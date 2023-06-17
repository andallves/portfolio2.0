import * as Styled from './styles';
import { Curriculum } from '../../components/Curriculum';
import headerBg from '../../assets/imgs/header_bg.png';

export const Header = () => {
  return (
    <Styled.Header>
      <h1 >
        Hi, I'm Andre Alves!
      </h1>
      <div className="text-animate">
        <h3>Fullstack Developer.</h3>
      </div>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed culpa quos
        tempora odit rerum id, consequatur temporibus aliquam quam quae officia
      </p>

      <img src={headerBg} alt="abstract image" />

      <Curriculum />
    </Styled.Header>
  );
};
