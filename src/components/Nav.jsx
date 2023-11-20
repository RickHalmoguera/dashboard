import { NavStyled } from "./styled/NavStyled"
import Logo from "../assets/logo/logo.png"
import { LogoStyled } from "./styled/LogoStyled"
import { UserCard } from "./UserCard"

import { MenuUl } from "./MenuUl"

export const Nav = ({isVisible }) =>{
    return(

        isVisible && <NavStyled>
            <LogoStyled>
                <img src={Logo} alt="Logo" />
                <h2>travl <br/> <span>Hotel Admin Dashboard</span></h2>
            </LogoStyled>
            <MenuUl/>
            
            <UserCard/>

            <div>
                <h2>Travl Hotel Admin Dashboard</h2>
                <p>© 2020 All Rights Reserved</p>
            </div>
            <p>Made with ♥ by Peterdraw</p>
            
        </NavStyled>
    )
}