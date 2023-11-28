import { FilterContainerStyled } from "../components/common/FilterContainerStyled"
import { FilterButtonStyled } from '../components/common/FilterButtonStyled'
import { SelectButtonStyled } from '../components/common/SelectButtonStyled'

import { TableContact } from "../components/Table/TableContact"
import { SwiperReviews } from "../components/SwiperReviews/SwiperReviews"
import { ContactStyled, ContactTopContainerStyled } from "../components/Contact/ContactStyled"
import { useState } from "react"

export const ContactPage = ()=>{
    const [isFiltered, setIsFiltered] = useState(false)
    const [selectedSortOption, setSelectedSortOption] = useState("newest");


    const handleSort =(e)=>{
        const selectedOption = e.target.value
        setSelectedSortOption(selectedOption)
    }

    const SetNoFilterTable =()=>{
        setIsFiltered(false)
    }

    const SetFilterTable = ()=>{
        setIsFiltered(true)
    }
    return(
        <ContactStyled>
            <ContactTopContainerStyled>
                <SwiperReviews/>
            </ContactTopContainerStyled>
            
            <FilterContainerStyled>
                <div className="filterContainer">
                    <FilterButtonStyled onClick={SetNoFilterTable}>
                        All Contacts
                    </FilterButtonStyled>
                    <FilterButtonStyled on onClick={SetFilterTable}>
                        Archived
                    </FilterButtonStyled>
                </div>

                <SelectButtonStyled onChange={handleSort} value={selectedSortOption}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </SelectButtonStyled>
            </FilterContainerStyled>

            <TableContact isFiltered={isFiltered} selectedSortOption={selectedSortOption}/>
        </ContactStyled>
    )
}