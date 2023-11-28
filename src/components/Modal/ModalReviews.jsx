import { ButtonStyled } from "../Button/ButtonStyled"
import { ModalReviewsStyled, ModalText, ModalTitle } from "./ModalReviewsStyled"


export const ModalReviews = ({ isOpen, onRequestClose, title, text })=>{
  
    return(
        <ModalReviewsStyled  
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          contentLabel="Comment Modal"
        >
            <ModalTitle>{title}</ModalTitle>
            <ModalText>{text}</ModalText>
            <ButtonStyled onClick={onRequestClose} >Close</ButtonStyled>
        </ModalReviewsStyled>
    )

}