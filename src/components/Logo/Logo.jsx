import { LogoStyled } from "./LogoStyled"
import LogoPic from "../../assets/logo/logo.png"
export const Logo = () => {
    return(
        <LogoStyled>
        <img src={LogoPic} alt="Logo" />
        <h2>travl <br/> <span>Hotel Admin Dashboard</span></h2>
        </LogoStyled> 
    )
}
