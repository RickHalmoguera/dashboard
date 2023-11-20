import { HiMenuAlt2 } from "react-icons/hi";
import { TopBarStyled } from "./styled/TopBarStyled";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";

export const TopBar = () =>{
    return(
        <TopBarStyled>
            <FaArrowLeft />
            <FaArrowRight />
            <h1>Dashboard</h1>
            
            <MdOutlineMailOutline />
            <FaRegBell />
            <RiLogoutBoxLine />
        </TopBarStyled>
    )
}