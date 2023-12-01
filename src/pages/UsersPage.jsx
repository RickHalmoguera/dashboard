import { FilterContainerStyled } from "../components/common/FilterContainerStyled"
import { FilterButtonStyled } from '../components/common/FilterButtonStyled'
import { SelectButtonStyled } from '../components/common/SelectButtonStyled'

import { TableUser } from "../components/Table/TableUser"
import { InputStyled } from "../components/Form/InputStyled"
import { useState } from "react"
import { ButtonStyled } from "../components/Button/ButtonStyled"
import { useNavigate } from "react-router-dom"


export const UsersPage = ()=>{
    const navigate = useNavigate()
    const [filterOption, setFilterOption] = useState("all")
    const [selectedSortOption, setSelectedSortOption] = useState("newest");
    const [searchName, setSearchName] = useState("")


    const handleSort =(e)=>{
        const selectedOption = e.target.value
        setSelectedSortOption(selectedOption)
    }

    const handleNewUser = ()=>{
        navigate("/root/newuser")
    }

  
    return(
        <>
        <FilterContainerStyled>
            <div className="filterContainer">
                <FilterButtonStyled onClick={()=> setFilterOption("all")}>
                    All Employees
                </FilterButtonStyled>
                <FilterButtonStyled onClick={()=> setFilterOption("active")}>
                    Active Employees
                </FilterButtonStyled>
                <FilterButtonStyled onClick={()=> setFilterOption("inactive")}>
                   Inactive Employees
                </FilterButtonStyled>
                <InputStyled type="text" name="" id="" placeholder="Search Name" onChange={(e)=> setSearchName(e.target.value)}/>
            </div>

                <ButtonStyled 
                $fc="#EBF1EF" 
                $bg="#135846" 
                onClick={handleNewUser} 
                >
                    New User
                </ButtonStyled>
                <SelectButtonStyled onChange={handleSort}  value={selectedSortOption}>
                    <option value="newest">Start Date</option>
                    <option value="abc">A-Z</option>
                </SelectButtonStyled>
            
           
        </FilterContainerStyled >

        <TableUser FilterOption={filterOption} selectedSortOption={selectedSortOption} SearchName={searchName}/>
        </>
    )
}