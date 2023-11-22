import { TableStyled } from "./styled/TableStyled"
import Ricardo from "../assets/users/ricardo.jpg"
import { ButtonStyled } from "./styled/ButtonStyled"
import { DotsStyledIcon } from "./styled/IconsStyled"
export const TableBooking = () =>{
    return (
        <TableStyled>
            <thead>
                <tr>
                    <th>Guest</th>
                    <th>Order Date</th>
                    <th>Check In</th>
                    <th>Check Out</th>
                    <th>Special Request</th>
                    <th>Room Type</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className="name__container">
                            <img src={Ricardo} alt="" className="guest__img" />
                            <p>Ricardo<br/><span>00123456</span></p>
                        </div>
                    </td>
                    <td>
                        <p>Oct 30th 2020 09:21 AM</p>
                        
                    </td>
                    <td>
                        <p>Nov 2th,2020</p>
                        <span>9.46 PM</span>
                    </td>
                    <td>
                        <p>Nov 4th,2020</p>
                        <span>6.12 PM</span>
                    </td>
                    <td>
                    <ButtonStyled $bg="#EEF9F2" $fc="#212121">
                        View Notes
                    </ButtonStyled>
                    </td>
                    <td>
                        <p> Deluxe A - 02</p>
                    </td>
                    <td>
                        <div className="status__guest status__guest--red">
                            <p>Refund</p>
                        </div>
                    </td>
                    <td>
                        <DotsStyledIcon />
                    </td>
                </tr>

                <tr>
                    <td>
                        <div className="name__container">
                            <img src={Ricardo} alt="" className="guest__img" />
                            <p>Ricardo<br/><span>00123456</span></p>
                        </div>
                    </td>
                    <td>
                        <p>Oct 30th 2020 09:21 AM</p>
                        
                    </td>
                    <td>
                        <p>Nov 2th,2020</p>
                        <span>9.46 PM</span>
                    </td>
                    <td>
                        <p>Nov 4th,2020</p>
                        <span>6.12 PM</span>
                    </td>
                    <td>
                    <ButtonStyled disabled $bg="#EEF9F2" $fc="#212121">
                        View Notes
                    </ButtonStyled>
                    </td>
                    <td>
                        <p> Deluxe A - 02</p>
                    </td>
                    <td>
                        <div className="status__guest status__guest--green">
                            <p>Booked</p>
                        </div>
                    </td>
                    <td>
                        <DotsStyledIcon />
                    </td>
                </tr>

                <tr>
                    <td>
                        <div className="name__container">
                            <img src={Ricardo} alt="" className="guest__img" />
                            <p>Ricardo<br/><span>00123456</span></p>
                        </div>
                    </td>
                    <td>
                        <p>Oct 30th 2020 09:21 AM</p>
                        
                    </td>
                    <td>
                        <p>Nov 2th,2020</p>
                        <span>9.46 PM</span>
                    </td>
                    <td>
                        <p>Nov 4th,2020</p>
                        <span>6.12 PM</span>
                    </td>
                    <td>
                    <ButtonStyled $bg="#EEF9F2" $fc="#212121">
                        View Notes
                    </ButtonStyled>
                    </td>
                    <td>
                        <p> Deluxe A - 02</p>
                    </td>
                    <td>
                        <div className="status__guest status__guest--grey">
                            <p>Pending</p>
                        </div>
                    </td>
                    <td>
                        <DotsStyledIcon />
                    </td>
                </tr>

                <tr>
                    <td>
                        <div className="name__container">
                            <img src={Ricardo} alt="" className="guest__img" />
                            <p>Ricardo<br/><span>00123456</span></p>
                        </div>
                    </td>
                    <td>
                        <p>Oct 30th 2020 09:21 AM</p>
                        
                    </td>
                    <td>
                        <p>Nov 2th,2020</p>
                        <span>9.46 PM</span>
                    </td>
                    <td>
                        <p>Nov 4th,2020</p>
                        <span>6.12 PM</span>
                    </td>
                    <td>
                    <ButtonStyled $bg="#EEF9F2" $fc="#212121">
                        View Notes
                    </ButtonStyled>
                    </td>
                    <td>
                        <p> Deluxe A - 02</p>
                    </td>
                    <td>
                        <div className="status__guest status__guest--black">
                            <p>Canceled</p>
                        </div>
                    </td>
                    <td>
                        <DotsStyledIcon />
                    </td>
                </tr>
            </tbody>
        </TableStyled>
    )
}