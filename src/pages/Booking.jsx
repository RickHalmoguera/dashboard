import React, { useState } from 'react'
import { FilterContainerStyled } from "../components/common/FilterContainerStyled"
import { FilterButtonStyled } from '../components/common/FilterButtonStyled'
import { SelectButtonStyled } from '../components/common/SelectButtonStyled'
import { TableGuest } from '../components/Table/TableGuest'



export const Booking = ()=>{
    const [activeButton, setActiveButton] = useState('All Guests')

    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName)
      
    }

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

            <SelectButtonStyled>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
            </SelectButtonStyled>
        </FilterContainerStyled>
        
        <TableGuest/>
        </>
    )
}