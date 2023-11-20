import { CardStyled } from "./styled/CardStyled"
import RicardoPhoto from "../assets/users/ricardo.jpg"
import { ButtonStyled } from "./styled/ButtonStyled"
export const UserCard = ()=>{
    return(
        <CardStyled>
            <img src={RicardoPhoto} alt="" />
            <h2>Ricardo Halmoguera</h2>
            <p>halmoguerar@gmail.com</p>
            <ButtonStyled $bg="#EBF1EF" $fc="#135846">
                Edit
            </ButtonStyled>
        </CardStyled>
    )
}