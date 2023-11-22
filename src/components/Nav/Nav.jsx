import { NavStyled } from "./NavStyled"
import { UserCard } from "./UserCard"
import { NavUl } from "../NavUl/NavUl"
import { Logo } from "../Logo/Logo"

export const Nav = ({isVisible }) =>{
    return(

        isVisible && <NavStyled>
            <Logo/>
            <NavUl/>
            <UserCard/>
            <div>
                <h2>Travl Hotel Admin Dashboard</h2>
                <p>© 2020 All Rights Reserved</p>
            </div>
            <p>Made with ♥ by Ricardo</p>
            
        </NavStyled>
    )
}