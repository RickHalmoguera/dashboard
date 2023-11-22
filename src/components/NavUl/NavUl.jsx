import { NavLinkStyled } from "../styled/NavLinkStyled"
import { BookingStyledIcon, ContactStyledIcon, DashBoardStyledIcon, RoomsStyledIcon, UsersStyledIcon } from "../Icons/IconsStyled"
export const NavUl = ()=>{
    return(
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

    )
}