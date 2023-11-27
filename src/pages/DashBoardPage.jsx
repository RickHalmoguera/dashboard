import { KpiCard } from "../components/DashBoard/KpiCard"
import { DashBoardBottomContainerStyled, DashBoardHeading, DashBoardStyled, DashBoardTopContainerStyled } from "../components/DashBoard/DashBoardStyled"
import { BedStyledIcon, CalendarDashStyledIcon,CheckInStyledIcon, CheckOutStyledIcon } from "../components/Icons/IconsStyled"
import { SwiperReviews } from "../components/SwiperReviews/SwiperReviews"
import { useDispatch } from "react-redux"

export const DashBoardPage = ()=>{
    const dispatch = useDispatch()
    return(
        <DashBoardStyled>
            <DashBoardTopContainerStyled>
                <KpiCard Icon={BedStyledIcon} number={8461} text="New Booking"/>
                <KpiCard Icon={CalendarDashStyledIcon} number={963} text="Scheduled Rooms"/>
                <KpiCard Icon={CheckInStyledIcon} number={753} text="Check in"/>
                <KpiCard Icon={CheckOutStyledIcon} number={516} text="Check Out"/>
            </DashBoardTopContainerStyled>
            <DashBoardBottomContainerStyled>
                <DashBoardHeading>Latest Reviews by Customers</DashBoardHeading>
                <SwiperReviews/>
            </DashBoardBottomContainerStyled>
        </DashBoardStyled>
        
        

    )
}