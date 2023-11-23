import { useNavigate } from "react-router-dom"
import Logo from "../assets/logo/logo.png"
import { ButtonStyled } from "../components/common/ButtonStyled"
import { CardStyled } from "../components/common/CardStyled"
import { FormStyled } from "../components/Form/FormStyled"
import { InputStyled } from "../components/Form/InputStyled"
import { LabelStyled } from "../components/Form/LabelStyled"




export const Login = ()=>{
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("hola")
        navigate("./root/dashboard")
    }

    return(
        <CardStyled>
            <img src={Logo} alt="Logo"/>
            <FormStyled >
                <LabelStyled>User</LabelStyled>
                <InputStyled type="text" placeholder="Ricardo"/>
                <LabelStyled>Password</LabelStyled>
                <InputStyled type="password" name="password" placeholder="test" />
            </FormStyled>
            <ButtonStyled 
            type="submit" 
            onClick={handleSubmit}
            $bg="#135846"
            $fc="#FFF">
                Login
            </ButtonStyled>

        
        </CardStyled>
    )
}