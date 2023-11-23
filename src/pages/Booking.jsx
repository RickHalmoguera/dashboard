import { FilterContainerStyled } from "../components/common/FilterContainerStyled"
import { FilterButtonStyled } from '../components/common/FilterButtonStyled'
import { SelectButtonStyled } from '../components/common/SelectButtonStyled'
import { TableGuest } from '../components/Table/TableGuest'


export const Booking = ()=>{
    return(
        <>
        <FilterContainerStyled>
            <div className="filterContainer">
                <FilterButtonStyled>
                    All Guests
                </FilterButtonStyled>
                <FilterButtonStyled>
                    Pending
                </FilterButtonStyled>
                <FilterButtonStyled>
                    Booked
                </FilterButtonStyled>
                <FilterButtonStyled>
                    Canceled
                </FilterButtonStyled>
                <FilterButtonStyled>
                    Refund
                </FilterButtonStyled>
            </div>
            <div>
                <input type="text" name="" id="" placeholder="Search Name" />
                <SelectButtonStyled>
                    <input type="text" name="" id="" placeholder="Search Name" />
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </SelectButtonStyled>

            </div>
        </FilterContainerStyled>
        
        <TableGuest/>
        </>
    )
}