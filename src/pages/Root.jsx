import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav";
import { RootStyled } from "../components/styled/RootStyled";
import { TopBar } from "../components/TopBar";
import { FlexColumnStyled } from "../components/styled/FlexColumnStyle";



export const Root = () =>{
    return(
        <RootStyled>
            <Nav/>
            <FlexColumnStyled>
                <TopBar/>
                <Outlet/>
            </FlexColumnStyled>
        </RootStyled>
    )
}