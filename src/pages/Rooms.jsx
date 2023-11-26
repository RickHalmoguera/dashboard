import { FilterContainerStyled } from "../components/common/FilterContainerStyled"
import { FilterButtonStyled } from '../components/common/FilterButtonStyled'
import { SelectButtonStyled } from '../components/common/SelectButtonStyled'
import { TableRooms } from "../components/Table/TableRooms"
import { ButtonStyled } from "../components/Button/ButtonStyled"
import { useNavigate } from "react-router-dom"

export const Rooms = ()=>{
    const navigate = useNavigate()

    const handleClick =()=>{
        navigate("/root/createroom")
    }
    
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

            <FilterContainerStyled>
            <ButtonStyled 
                onClick={handleClick}
                type="submit" 
                $bg="#135846"
                $fc="#FFF"
                >
                    Create Room
                </ButtonStyled>

                <SelectButtonStyled>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </SelectButtonStyled>

            </FilterContainerStyled>
        </FilterContainerStyled>

        <TableRooms/>
        </>
    )
}