import { TableStyled, TableUserBtn, TdBtnStyled, TdFlex, TdHeadind, TdIdText, TdStyled, TdSubText, TdText, TdUserCardStyled, TrHeadStyled, TrStyled } from './TableStyled';
import { DotsStyledIcon, PhoneStyledIcon } from '../../components/Icons/IconsStyled';
import UserList from '../../assets/JSON/users.json';


export const TableUser = () => {
  
  return (
    <TableStyled>
      <thead>
        <tr>
          <TrHeadStyled>Employee</TrHeadStyled>
          <TrHeadStyled>Job Description</TrHeadStyled>
          <TrHeadStyled>Contact</TrHeadStyled>
          <TrHeadStyled>Status</TrHeadStyled>
        </tr>
      </thead>
      <tbody>
        {UserList.map((user) => (
          <TrStyled key={user.id}>
            <TdUserCardStyled>
              <img src={user.photo} alt="" />
              <div>
                  <TdHeadind>{user.name}</TdHeadind>
                  <TdIdText># {user.id}</TdIdText>
                  <TdSubText>{user.start_date}</TdSubText>
              </div>
            </TdUserCardStyled>
            <td>
              <TdText>{user.description}</TdText>
            </td>
            <TdFlex>
              <PhoneStyledIcon/>
              <TdText>{user.phone}</TdText>
            </TdFlex>

            <TdBtnStyled>
                {!user.is_active && <TableUserBtn $bg="transparent" $color="#E23428">INACTIVE</TableUserBtn>}
                {user.is_active  && <TableUserBtn $bg="transparent" $color="#5AD07A">ACTIVE</TableUserBtn>}
            </TdBtnStyled>
          </TrStyled>
        ))}
      </tbody>
    </TableStyled>
  );
};
