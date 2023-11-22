

import { KpiCard } from "../components/DashBoard/KpiCard"
import { DashBoardStyled } from "../components/DashBoard/DashBoardStyled"
import { BedStyledIcon, CalendarDashStyledIcon,CheckInStyledIcon, CheckOutStyledIcon } from "../components/Icons/IconsStyled"


export const DashBoard = ()=>{
    return(
        <DashBoardStyled>
            <div className="top__container">
                <KpiCard Icon={BedStyledIcon} number={8461} text="New Booking"/>
                <KpiCard Icon={CalendarDashStyledIcon} number={963} text="Scheduled Rooms"/>
                <KpiCard Icon={CheckInStyledIcon} number={753} text="Check in"/>
                <KpiCard Icon={CheckOutStyledIcon} number={516} text="Check Out"/>
            </div>
            <div className="bottom__container">
                <h2>Latest Reviews by Customers</h2>
               
            </div>
        </DashBoardStyled>
        
        

    )
}