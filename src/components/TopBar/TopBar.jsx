import { TopBarStyled } from "./TopBarStyled";
import { ArrowLeftStyledIcon, ArrowRightStyledIcon, MailStyledIcon, BellStyledIcon, LogoutStyledIcon } from "../Icons/IconsStyled";
import { TopBarIconsContainerStyled } from "./TopBarIconsContainerStyled";
import { useLocation, useNavigate } from "react-router-dom";

const routePageMapping = {
  '/': 'Login',
  '/root/dashboard': 'Dashboard',
  '/root/booking': 'Booking',
  '/root/rooms': 'Rooms',
  '/root/contact': 'Contact',
  '/root/users': 'Users',
  '/root/edituser': 'Users > Edit Info',
  '/root/createroom': 'Rooms > Create Room',
};

export const TopBar = ({ onToggleMenu, isMenuOpen }) => {
    const navigate = useNavigate()
    const location = useLocation();
    const { pathname } = location;
    const currentPage = routePageMapping[pathname] || 'Unknown Page';
    const handleLogOut = ()=>{

        navigate("/")
    }
    
    return (
      <TopBarStyled>
        <button onClick={onToggleMenu}>
          {isMenuOpen ? <ArrowLeftStyledIcon /> : <ArrowRightStyledIcon/>}
        </button>
        <h1>{currentPage}</h1>
        <TopBarIconsContainerStyled>
          <MailStyledIcon />
          <BellStyledIcon />
          <button onClick={handleLogOut}>
            <LogoutStyledIcon/>
          </button>
        </TopBarIconsContainerStyled>
      </TopBarStyled>
    );
  };
  