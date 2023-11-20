import styled from "styled-components";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiKeyLine } from "react-icons/ri";
import { LuCalendarCheck2 } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { HiOutlinePuzzle } from "react-icons/hi";

const sharedIconStyle = `
    width: 24px;
    height: 24px;
    color:inherit;
    margin-right: 2em;
   
`

export const DashBoardStyledIcon = styled(LuLayoutDashboard)`
    ${sharedIconStyle}
` 
export const BookingStyledIcon = styled( RiKeyLine)`
    ${sharedIconStyle}
` 
export const RoomsStyledIcon = styled(LuCalendarCheck2)`
    ${sharedIconStyle}
` 
export const ContactStyledIcon = styled(CiUser)`
    ${sharedIconStyle}
` 
export const UsersStyledIcon = styled(HiOutlinePuzzle)`
    ${sharedIconStyle}
` 
