import { FilterContainerStyled } from "../components/common/FilterContainerStyled"
import { FilterButtonStyled } from '../components/common/FilterButtonStyled'
import { SelectButtonStyled } from '../components/common/SelectButtonStyled'
import { TableGuest } from '../components/Table/TableGuest'
import { InputStyled } from "../components/Form/InputStyled"


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
                <InputStyled type="text" name="" id="" placeholder="Search Name" />
            </div>
                <SelectButtonStyled>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </SelectButtonStyled>
        </FilterContainerStyled>
        
        <TableGuest/>
        </>
    )
}