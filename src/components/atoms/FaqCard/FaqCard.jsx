import {
  FaqCardBodyStyled,
  FaqCardHeadStyled,
  FaqCardPointerStyled,
  FaqCardStyled,
} from './FaqCard.styled';
import { ReactComponent as Pointer } from '../../../assets/icons/pointer-icon.svg';

const FaqCard = ({ text, isActive, handleSelect }, ref) => {
  return (
    <FaqCardStyled isActive={isActive}>
      <FaqCardHeadStyled
        isActive={isActive}
        onClick={() => handleSelect(text.id)}
      >
        <p>{text.question}</p>
        <FaqCardPointerStyled isActive={isActive}>
          <Pointer />
        </FaqCardPointerStyled>
      </FaqCardHeadStyled>
      {isActive && <FaqCardBodyStyled>{text.answer}</FaqCardBodyStyled>}
    </FaqCardStyled>
  );
};

export default FaqCard;
