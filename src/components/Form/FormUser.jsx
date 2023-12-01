import { useDispatch, useSelector } from "react-redux"
import { ButtonStyled } from "../Button/ButtonStyled"
import { SelectButtonStyled } from "../common/SelectButtonStyled"
import { FormPageStyled } from "./FormPageStyled"
import { FormStyled } from "./FormStyled"
import { InputStyled } from "./InputStyled"
import { LabelStyled } from "./LabelStyled"
import { addUser, getUsersData, getUsersStatus } from "../../features/users/usersSlice"
import { useEffect, useState } from "react"
import { getUsersListFromAPIThunk } from "../../features/users/usersThunk"
import { useNavigate } from "react-router-dom"

export const FormUser = ()=>{
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const usersListData = useSelector(getUsersData)
    const usersListStatus = useSelector(getUsersStatus)
    const [newId,setNewId]= useState(0)
    

    const FormatDate =(inputDate)=>{
        const date = new Date(inputDate);

        const day = date.getDate().toString().padStart(2, '0')
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        const monthNames = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]
        const formattedDate = `${day}-${monthNames[monthIndex]}-${year}`

        return formattedDate;
    }

    useEffect(()=>{

    if (usersListStatus === "idle") {
        dispatch(getUsersListFromAPIThunk());
      } else if (usersListStatus === "pending") {
       
      } else if (usersListStatus === "fulfilled") {
       setNewId(usersListData.length + 1)
       
      }
  
    },[dispatch, usersListData, usersListStatus])

    const handleSubmit = (e)=>{
        e.preventDefault()
        const newUser ={
            id: newId,
            name:e.target.name.value,
            email:e.target.email.value,
            start_date: FormatDate(e.target.start_date.value),
            description:e.target.description.value,
            phone: e.target.phone.value,
            is_active:e.target.is_active.value === 'true'
        }

        dispatch(addUser(newUser))
    }

    const handleClear = (e)=>{
        navigate("/root/newuser")
    }


    return(
        <FormPageStyled>
            <FormStyled onSubmit={handleSubmit}>    
                <LabelStyled>Full Name</LabelStyled>
                <InputStyled type="text" name="name"/>
                <LabelStyled>Job Title</LabelStyled>
                <SelectButtonStyled>
                    <option value="manager">Manager</option>
                    <option value="manager">Recepcion</option>
                    <option value="manager">Servicio Habitaciones</option>
                </SelectButtonStyled>
                <LabelStyled>Phone</LabelStyled>
                <InputStyled type="text" name="phone"/>
                <LabelStyled>Email</LabelStyled>
                <InputStyled type="email" name="email"/>
                <LabelStyled>Start Date</LabelStyled>
                <InputStyled type="date" name="start_date"/>
                <LabelStyled>Job Description</LabelStyled>
                <textarea   name="description" rows={4}/>
                <LabelStyled>Status</LabelStyled>
                <SelectButtonStyled name="is_active">
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                </SelectButtonStyled>
                <LabelStyled>Password</LabelStyled>
                <InputStyled type="password" name="password"/>
                <ButtonStyled 
                type="submit" 
                $bg="#135846"
                $fc="#FFF"
                >
                    Create
                </ButtonStyled>
                <ButtonStyled 
                onClick={handleClear}
                type="submit" 
                $bg="#E23428"
                $fc="#FFF"
                >
                    Clear
                </ButtonStyled>
            </FormStyled>
        </FormPageStyled>

    )

}