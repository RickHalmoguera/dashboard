import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav";
import { RootStyled } from "../components/styled/RootStyled";


export const Root = () =>{
    return(
        <RootStyled>
            <Nav/>
            <Outlet/>
        </RootStyled>
    )
}