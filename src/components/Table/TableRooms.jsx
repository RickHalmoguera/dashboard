import { TableBodyStyled } from "./TableBodyStyled"
import { TableStyled } from "./TableStyled"
import RoomList from "../../assets/JSON/rooms.json"
import {TableCardRoomStyled} from "./TableCardRoomStyled"
import { TableButton } from "./TableButton"
import { DotsStyledIcon } from "../Icons/IconsStyled"

export const TableRooms = ()=>{
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
      <TableBodyStyled>
        {RoomList.map((room) => (
          <tr key={room.id}>
            <td>
              <TableCardRoomStyled>
                <img src={room.photo} alt="" />
                <p>
                  <span>{room.id}</span>
                  <br />
                  {room.room}
                </p>
              </TableCardRoomStyled>
            </td>
            <td>
              <p>{room.bed}</p>
            </td>
            <td>
              <p>{room.amenities}</p>
            </td>
            <td>
              <p>{room.rate}/Night</p>
            </td>
            <td>
              <p>{room.rate - (room.rate * room.discount)}/Night</p>
            </td>
            <td>
              <p>{room.Room}</p>
            </td>
            <td>
                {room.available && <TableButton $bg="#5AD07A" $fc="#FFF">
                    Refund
                </TableButton>}
                {!room.available  && <TableButton $bg="#E23428" $fc="#FFF">
                    Booked
                </TableButton>}
               
            </td>
            <td>
              <DotsStyledIcon />
            </td>
          </tr>
        ))}
      </TableBodyStyled>
    </TableStyled>
        </>
    )
}