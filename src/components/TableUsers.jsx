import { TableStyled } from "./styled/TableStyled"
import Ricardo from "../assets/users/ricardo.jpg"
import { DotsStyledIcon, PhoneStyledIcon } from "./Icons/IconsStyled"

export const TableUsers = () =>{
    return(
        <TableStyled>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Contact</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className="flex__container">
                            <img src={Ricardo} alt="" className="guest__img" />
                            <p>Ricardo<br/><span>00123456</span><br /><span>Joined on Aug 2th 2017</span><br /><span>halmoguerar@gmail.com</span></p>
                        </div>
                    </td>
                    <td>
                        <p>Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
                    </td>
                    <td>
                        <div className="flex__container">
                            <PhoneStyledIcon/>
                            <p>012 334 55512</p>

                        </div>
                    </td>
                    <td>
                        <div className="status__user status__user--green">
                            active
                        </div>
                    </td>
                    <td>
                    <DotsStyledIcon />
                    </td>
                </tr>

                <tr>
                    <td>
                        <div className="flex__container">
                            <img src={Ricardo} alt="" className="guest__img" />
                            <p>Ricardo<br/><span>00123456</span><br /><span>Joined on Aug 2th 2017</span><br /><span>halmoguerar@gmail.com</span></p>
                        </div>
                    </td>
                    <td>
                        <p>Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
                    </td>
                    <td>
                        <div className="flex__container">
                            <PhoneStyledIcon/>
                            <p>012 334 55512</p>

                        </div>
                    </td>
                    <td>
                        <div className="status__user status__user--red">
                            inactive
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