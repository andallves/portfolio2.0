import * as Styled from './styles';

interface SkillProps {
  technology: string;
  level: string;
  porcent: string;

}
export const Skill = ({ technology, level, porcent }: SkillProps) => {
  return (
    <Styled.Div porcent={porcent}>
      <div>
        <h3>{technology}</h3>
        <p>{level}</p>
      </div>

      <div className="rectangle2"></div>
      <div className="rectangle1"></div>
    </Styled.Div>
  );
};
