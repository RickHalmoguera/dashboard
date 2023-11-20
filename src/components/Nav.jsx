import { NavStyled } from "./styled/NavStyled"
import Logo from "../assets/logo/logo.png"
import { LogoStyled } from "./styled/LogoStyled"
import { BookingStyledIcon, ContactStyledIcon, DashBoardStyledIcon, RoomsStyledIcon, UsersStyledIcon } from "./styled/IconsStyled"
import { UserCard } from "./UserCard"
import { NavLinkStyled } from "./styled/NavLinkStyled"


export const Nav = () =>{
    return(
        <NavStyled>
            <LogoStyled>
                <img src={Logo} alt="Logo" />
                <h2>travl <br/> <span>Hotel Admin Dashboard</span></h2>
            </LogoStyled>

            <ul>
                <li>
                    <NavLinkStyled 
                    to="/root/dashboard"
                    >
                        <DashBoardStyledIcon/>
                        Dashboard
                    </NavLinkStyled>
                </li>
                <li>
                    <NavLinkStyled 
                    to="/root/booking"
                    >
                    <BookingStyledIcon />
                        Booking
                    </NavLinkStyled>
                </li>
                <li>
                    <NavLinkStyled 
                    to="/root/rooms"
                    >
                    <RoomsStyledIcon />
                        Rooms
                    </NavLinkStyled>
                </li>
                <li>
                    <NavLinkStyled 
                    to="/root/contact"
                    >
                    <ContactStyledIcon />
                        Contact
                    </NavLinkStyled>
                </li>
                <li>
                    <NavLinkStyled 
                    to="/root/users"
                    >
                    <UsersStyledIcon />
                        Users
                    </NavLinkStyled>
                </li>
            </ul>
            <UserCard/>

            <div>
                <h2>Travl Hotel Admin Dashboard</h2>
                <p>© 2020 All Rights Reserved</p>
            </div>
            <p>Made with ♥ by Peterdraw</p>
            
        </NavStyled>
    )
}