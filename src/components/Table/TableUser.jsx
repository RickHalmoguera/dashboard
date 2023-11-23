import { TableStyled } from './TableStyled';
import { TableBodyStyled } from './TableBodyStyled';
import { TableButton } from './TableButton';
import { DotsStyledIcon, PhoneStyledIcon } from '../../components/Icons/IconsStyled';
import UserList from '../../assets/JSON/users.json';
import { TableCardUserStyled } from './TableUserCardStyled';

export const TableUser = () => {
  return (
    <TableStyled>
      <thead>
        <tr>
          <th>Employee</th>
          <th>Job Description</th>
          <th>Contact</th>
          <th>Status</th>
        </tr>
      </thead>
      <TableBodyStyled>
        {UserList.map((user) => (
          <tr key={user.id}>
            <td>
              <TableCardUserStyled>
                <img src={user.photo} alt="" />
                <div>
                    <strong>{user.name}</strong>
                    <p>{user.id}</p>
                    <span>{user.date}</span>
                </div>
              </TableCardUserStyled>
            </td>
            <td className='clamp'>
              <p>
                {user.description}
                </p>
            </td>
            <td className='flex'>
                <PhoneStyledIcon/>
                <p>{user.phone}</p>
            </td>
            <td>
                {!user.status && <TableButton $bg="transparent" $fc="#E23428">INACTIVE</TableButton>}
                {user.status  && <TableButton $bg="transparent" $fc="#5AD07A">ACTIVE</TableButton>}
              
            </td>
          </tr>
        ))}
      </TableBodyStyled>
    </TableStyled>
  );
};
