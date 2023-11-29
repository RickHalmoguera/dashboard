import { FilterContainerStyled } from "../components/common/FilterContainerStyled"
import { FilterButtonStyled } from '../components/common/FilterButtonStyled'
import { SelectButtonStyled } from '../components/common/SelectButtonStyled'

import { TableUser } from "../components/Table/TableUser"
import { InputStyled } from "../components/Form/InputStyled"


export const UsersPage = ()=>{
  
    return(
        <>
        <FilterContainerStyled>
            <div className="filterContainer">
                <FilterButtonStyled>
                    All Employees
                </FilterButtonStyled>
                <FilterButtonStyled>
                    Active Employees
                </FilterButtonStyled>
                <FilterButtonStyled>
                   Inactive Employees
                </FilterButtonStyled>
                <InputStyled type="text" name="" id="" placeholder="Search Name" />
            </div>

            
                <SelectButtonStyled>
                    <option value="newest">Start Date</option>
                    <option value="oldest">A-Z</option>
                </SelectButtonStyled>
            
           
        </FilterContainerStyled>

        <TableUser/>
        </>
    )
}