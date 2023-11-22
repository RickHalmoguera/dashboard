import { TableStyled } from './TableStyled';
import { TableBodyStyled } from './TableBodyStyled';
import { TableCardGuestStyled } from './TableCardGuestStyled';
import { TableButton } from './TableButton';
import { DotsStyledIcon } from '../../components/Icons/IconsStyled';
import GuestList from '../../assets/JSON/guest.json';

export const TableGuest = () => {
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
      <TableBodyStyled>
        {GuestList.map((guest) => (
          <tr key={guest.id}>
            <td>
              <TableCardGuestStyled>
                <img src={guest.photo} alt="" />
                <p>
                  {guest.name}
                  <br />
                  <span>{guest.id}</span>
                </p>
              </TableCardGuestStyled>
            </td>
            <td>
              <p>
                {guest.orderDate}
                <br />
                <span>{guest.orderTime}</span>
                </p>
            </td>
            <td>
              <p>
                {guest.checkin}
                <br />
                <span>{guest.chekinTime}</span>
                </p>
            </td>
            <td>
              <p>
                {guest.checkout}
                <br />
                <span>{guest.checkoutTime}</span>
                </p>
            </td>
            <td>
              <TableButton disabled={guest.notes === null} $bg="#EEF9F2" $fc="#212121">
                View Notes
              </TableButton>
            </td>
            <td>
              <p>{guest.Room}</p>
            </td>
            <td>
                {guest.status ==="refund" && <TableButton $bg="#FFEDEC" $fc="#E23428">
                    Refund
                </TableButton>}
                {guest.status ==="booked" && <TableButton $bg="#E8FFEE" $fc="#5AD07A">
                    Booked
                </TableButton>}
                {guest.status ==="pending" && <TableButton $bg="#E2E2E2" $fc="#6D6D6D">
                    Pending
                </TableButton>}
                {guest.status ==="canceled" && <TableButton $bg="#575757" $fc="#BEBEBE">
                    Canceled
                </TableButton>}
            </td>
            <td>
              <DotsStyledIcon />
            </td>
          </tr>
        ))}
      </TableBodyStyled>
    </TableStyled>
  );
};
