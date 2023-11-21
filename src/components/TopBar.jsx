import { TopBarStyled } from "./styled/TopBarStyled";
import { ArrowLeftStyledIcon, ArrowRightStyledIcon, MailStyledIcon, BellStyledIcon, LogoutStyledIcon } from "./styled/IconsStyled";
import { TopBarIconsContainerStyled } from "./styled/TopBarIconsContainerStyled";
import { useNavigate } from "react-router-dom";

export const TopBar = ({ onToggleMenu, isMenuOpen }) => {
    const navigate = useNavigate()

    const handleLogOut = ()=>{

        navigate("/")
    }
    
    return (
      <TopBarStyled>
        <button onClick={onToggleMenu}>
          {isMenuOpen ? <ArrowLeftStyledIcon /> : <ArrowRightStyledIcon/>}
        </button>
        <h1>Dashboard</h1>
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
  