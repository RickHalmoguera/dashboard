import { CardStyled } from "../common/CardStyled"
import RicardoPhoto from "../../assets/users/ricardo.jpg"
import { ButtonStyled } from "../common/ButtonStyled"
import { useNavigate } from "react-router-dom"


export const UserCard = ()=>{

    const navigate= useNavigate()

    const handleClick = ()=>{
        navigate("/root/edituser")
    }

    return(
        <CardStyled>
            <img src={RicardoPhoto} alt="" />
            <h2>Ricardo Halmoguera</h2>
            <p>halmoguerar@gmail.com</p>
            <ButtonStyled $bg="#EBF1EF" $fc="#135846" onClick={handleClick}>
                Edit
            </ButtonStyled>
        </CardStyled>
    )
}