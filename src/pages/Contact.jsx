import { FilterContainerStyled } from "../components/common/FilterContainerStyled"
import { FilterButtonStyled } from '../components/common/FilterButtonStyled'
import { SelectButtonStyled } from '../components/common/SelectButtonStyled'

import { TableContact } from "../components/Table/TableContact"

export const Contact = ()=>{
    return(
        <>

        <FilterContainerStyled>
            <div className="filterContainer">
                <FilterButtonStyled>
                    All Contacts
                </FilterButtonStyled>
                <FilterButtonStyled>
                    Archived
                </FilterButtonStyled>
            </div>

            <SelectButtonStyled>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
            </SelectButtonStyled>
        </FilterContainerStyled>

        <TableContact/>
        </>
    )
}