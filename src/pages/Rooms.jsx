import { FilterContainerStyled } from "../components/common/FilterContainerStyled"
import { FilterButtonStyled } from '../components/common/FilterButtonStyled'
import { SelectButtonStyled } from '../components/common/SelectButtonStyled'
import { TableRooms } from "../components/Table/TableRooms"

export const Rooms = ()=>{
    return(
        <>
        <FilterContainerStyled>
            <div className="filterContainer">
                <FilterButtonStyled>
                    All Rooms
                </FilterButtonStyled>
                <FilterButtonStyled>
                    Availables
                </FilterButtonStyled>
                <FilterButtonStyled>
                   Booked
                </FilterButtonStyled>
                <FilterButtonStyled>
                   Price
                </FilterButtonStyled>
            </div>

            <SelectButtonStyled>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
            </SelectButtonStyled>
        </FilterContainerStyled>

        <TableRooms/>
        </>
    )
}