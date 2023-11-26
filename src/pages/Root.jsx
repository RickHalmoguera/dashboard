import { OutletStyled } from "../components/Root/OutletStyled";
import { Outlet } from "react-router-dom";
import { RootStyled } from "../components/Root/RootStyled";
import { TopBar } from "../components/TopBar/TopBar";
import { FlexColumnStyled } from "../components/Root/FlexColumnStyled";
import { useState } from "react";
import { SideMenu } from "../components/SideMenu/SideMenu"



export const Root = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return(
        <RootStyled>
            <SideMenu isVisible={isMenuOpen}/>
            <FlexColumnStyled>
                <TopBar onToggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>
                <OutletStyled>
                    <Outlet/>
                </OutletStyled>
            </FlexColumnStyled>
        </RootStyled>
    )
}