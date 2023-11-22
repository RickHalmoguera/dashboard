import { TableStyled } from './TableStyled';
import { TableBodyStyled } from './TableBodyStyled';
import { TableCardGuestStyled } from './TableCardGuestStyled';

import Ricardo from '../../assets/users/ricardo.jpg';
import { TableGuestButton } from './TableGuestButton';
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
          <tr key={guest.user_id}>
            <td>
              <TableCardGuestStyled>
                <img src={Ricardo} alt="" />
                <p>
                  {guest.name}
                  <br />
                  <span>{guest.user_id}</span>
                </p>
              </TableCardGuestStyled>
            </td>
            <td>
              <p>{guest.date}</p>
            </td>
            <td>
              <p>{guest.check_in}</p>
            </td>
            <td>
              <p>{guest.check_out}</p>
            </td>
            <td>
              <TableGuestButton disabled={guest.notes === null} $bg="#EEF9F2" $fc="#212121">
                View Notes
              </TableGuestButton>
            </td>
            <td>
              <p>{guest.Room}</p>
            </td>
            <td>
                {guest.Status ==="Refund" && <TableGuestButton $bg="#FFEDEC" $fc="#E23428">
                    Refund
                </TableGuestButton>}
                {guest.Status ==="Booked" && <TableGuestButton $bg="#E8FFEE" $fc="#5AD07A">
                    Booked
                </TableGuestButton>}
                {guest.Status ==="Pending" && <TableGuestButton $bg="#E2E2E2" $fc="#6D6D6D">
                    Pending
                </TableGuestButton>}
                {guest.Status ==="Canceled" && <TableGuestButton $bg="#575757" $fc="#BEBEBE">
                    Canceled
                </TableGuestButton>}
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
