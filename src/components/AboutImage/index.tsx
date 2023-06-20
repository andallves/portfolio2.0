import profilePhoto from '../../assets/imgs/about.png';
import * as Styled from './styles.ts';

export const AboutImage = () => {
  return (
    <Styled.Container className="about-img">
      <Styled.Img src={profilePhoto} alt="Profile Photo" />
      <Styled.Span className="circle-spin"></Styled.Span>
    </Styled.Container>
  );
};
