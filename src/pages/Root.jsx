import { OutletStyled } from "../components/styled/OutletStyled";
import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav";
import { RootStyled } from "../components/styled/RootStyled";
import { TopBar } from "../components/TopBar";
import { FlexColumnStyled } from "../components/styled/FlexColumnStyled";
import { useState } from "react";



export const Root = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return(
        <RootStyled>
            <Nav isVisible={isMenuOpen}/>
            <FlexColumnStyled>
                <TopBar onToggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>
                <OutletStyled>
                    <Outlet/>
                </OutletStyled>
            </FlexColumnStyled>
        </RootStyled>
    )
}