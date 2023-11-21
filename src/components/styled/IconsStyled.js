import styled from "styled-components";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiKeyLine } from "react-icons/ri";
import { LuCalendarCheck2 } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { HiOutlinePuzzle } from "react-icons/hi";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";

import { IoBedOutline } from "react-icons/io5";
import { RiLoginBoxLine } from "react-icons/ri";

const NavSharedIconStyle = `
    width: 24px;
    height: 24px;
    color:inherit;
`
const TopBarSharedIconStyle =`
    width: 24px;
    height: 24px;
    color: #135846;
`

const DashBoardSharedIconStyle =`
    width:28px;
    height:28px;
    color: #E23428;
    &:hover{
        color:#FFF;
    }
`

export const DashBoardStyledIcon = styled(LuLayoutDashboard)`
    ${NavSharedIconStyle}
` 
export const BookingStyledIcon = styled( RiKeyLine)`
    ${NavSharedIconStyle}
` 
export const RoomsStyledIcon = styled(LuCalendarCheck2)`
    ${NavSharedIconStyle}
` 
export const ContactStyledIcon = styled(CiUser)`
    ${NavSharedIconStyle}
` 
export const UsersStyledIcon = styled(HiOutlinePuzzle)`
    ${NavSharedIconStyle}
` 
export const ArrowLeftStyledIcon = styled(FaArrowLeft)`
    ${TopBarSharedIconStyle}
` 
export const ArrowRightStyledIcon = styled(FaArrowRight)`
    ${TopBarSharedIconStyle}
` 
export const MailStyledIcon = styled(MdOutlineMailOutline)`
    ${TopBarSharedIconStyle}
` 
export const BellStyledIcon = styled(FaRegBell)`
    ${TopBarSharedIconStyle}
` 
export const LogoutStyledIcon = styled(RiLogoutBoxLine)`
    ${TopBarSharedIconStyle}
` 

export const BedStyledIcon = styled(IoBedOutline)`
    ${DashBoardSharedIconStyle}
`
export const CalendarDashStyledIcon = styled(LuCalendarCheck2)`
    ${DashBoardSharedIconStyle}
`

export const CheckInStyledIcon = styled(RiLoginBoxLine)`
    ${DashBoardSharedIconStyle}
`

export const CheckOutStyledIcon = styled(RiLogoutBoxLine)`
    ${DashBoardSharedIconStyle}
`