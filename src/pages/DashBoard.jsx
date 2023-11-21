import { CardDashBoardStyled } from "../components/styled/CardDashBoardStyled"
import { DashBoardStyled } from "../components/styled/DashBoardStyled"
import { BedStyledIcon } from "../components/styled/IconsStyled"
import { CalendarDashStyledIcon } from "../components/styled/IconsStyled"
import { CheckInStyledIcon } from "../components/styled/IconsStyled"
import { CheckOutStyledIcon } from "../components/styled/IconsStyled"

export const DashBoard = ()=>{
    return(
        <DashBoardStyled>
            <div className="top__container">
                <CardDashBoardStyled>
                    <div className="icon__container">
                        <BedStyledIcon/>
                    </div>
                    <div className="text__container">
                        <p>8,461</p>
                        <span>New Booking</span>
                    </div>
                </CardDashBoardStyled>

                <CardDashBoardStyled>
                    <div className="icon__container">
                        <CalendarDashStyledIcon/>
                    </div>
                    <div className="text__container">
                        <p>963</p>
                        <span>Scheduled Room</span>
                    </div>
                </CardDashBoardStyled>

                <CardDashBoardStyled>
                    <div className="icon__container">
                        <CheckInStyledIcon/>
                    </div>
                    <div className="text__container">
                        <p>753</p>
                        <span>Check In</span>
                    </div>
                </CardDashBoardStyled>
                
                <CardDashBoardStyled>
                    <div className="icon__container">
                        <CheckOutStyledIcon/>
                    </div>
                    <div className="text__container">
                        <p>516</p>
                        <span>Check Out</span>
                    </div>
                </CardDashBoardStyled>
            </div>
            <div className="bottom__container">
                <h2>Latest Reviews by Customers</h2>
            </div>
        </DashBoardStyled>
        

    )
}