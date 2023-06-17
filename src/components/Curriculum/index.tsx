import * as Styled from './styles';

export const Curriculum = () => {
  return (
    <Styled.Div>
      <a
        href='../../assets/Andre_Alves_Pereira_CV.pdf'
        download='André_Alves_Pereira._CV.pdf'
        type='application.pdf'
      >
        <p className='btnText'>Let's begin</p>
      </a>
    </Styled.Div>
  );
};
