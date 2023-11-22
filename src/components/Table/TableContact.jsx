import { TableBodyStyled } from "./TableBodyStyled"
import { TableStyled } from "./TableStyled"
import CommentList from "../../assets/JSON/comments.json"
import {TableCardRoomStyled} from "./TableCardRoomStyled"
import { TableButton } from "./TableButton"
import { DotsStyledIcon } from "../Icons/IconsStyled"

export const TableContact = ()=>{
    return(
        <>
        <TableStyled>
      <thead>
        <tr>
          <th>Date & Id</th>
          <th>Customer, Email & Phone</th>
          <th>Comment</th>
          <th></th>
        </tr>
      </thead>
      <TableBodyStyled>
        {CommentList.map((comment) => (
          <tr key={comment.id}>
            <td>
                <p>{comment.date} </p>
                <p>{comment.dateTime}</p>
                <p># {comment.id}</p>
            </td>

            <td>
              <p>{comment.name}</p>
              <p>{comment.email}</p>
              <p>{comment.phone}</p>
            </td>

            <td className="clamp">
              <h2>{comment.commentTitle}</h2>
              <p>{comment.comment}</p>
            </td>
            <td>
                <TableButton $bg="transparent" $fc="#E23428">
                    Archive
                </TableButton>
              
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