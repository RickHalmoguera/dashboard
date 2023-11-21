import Room1 from "../assets/rooms/room1.jpg"
import { TableStyled } from "../components/styled/TableStyled"
import { DotsStyledIcon } from "../components/styled/IconsStyled";
export const Rooms = ()=>{
    return(
        <>

        <TableStyled>
            <thead>
                <tr>
                    <th>Room Name</th>
                    <th>Bed Type</th>
                    <th>Facilities</th>
                    <th>Rate</th>
                    <th>Offer Price</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className="name__container">
                            <img src={Room1} alt="" />
                            <p><span>00123456</span><br/>Deluxe A-91234</p>
                        </div>
                    </td>
                    <td>
                        <p>Double Bed</p>
                    </td>
                    <td>
                        <p>AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</p>
                    </td>
                    <td>
                        <strong>$145<span>/night</span></strong>
                    </td>
                    <td>
                    <strong>$145<span>/night</span></strong>
                    </td>
                    <td>
                        <div className="status__container status__container--green ">
                            <p>Available</p>
                        </div>
                    </td>
                    <td>
                        <DotsStyledIcon />
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <div className="name__container">
                            <img src={Room1} alt="" />
                            <p><span>00123456</span><br/>Deluxe A-91234</p>
                        </div>
                    </td>
                    <td>
                        <p>Double Bed</p>
                    </td>
                    <td>
                        <p>AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</p>
                    </td>
                    <td>
                        <strong>$145<span>/night</span></strong>
                    </td>
                    <td>
                    <strong>$145<span>/night</span></strong>
                    </td>
                    <td>
                        <div className="status__container status__container--red">
                            <p>Booked</p>
                        </div>
                    </td>
                    <td>
                        <DotsStyledIcon />
                    </td>
                    

                </tr>
            </tbody>
           
        </TableStyled>
        </>
    )
}