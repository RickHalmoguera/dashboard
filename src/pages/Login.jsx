import { useNavigate } from "react-router-dom"
import Logo from "../assets/logo/logo.png"
import { ButtonStyled } from "../components/common/ButtonStyled"
import { CardStyled } from "../components/common/CardStyled"
import { FormStyled } from "../components/common/FormStyled"




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
                <label>User</label>
                <input type="text" placeholder="Ricardo"/>
                <label >Password</label>
                <input type="password" name="password" placeholder="test" />
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