import { ButtonStyled } from "../Button/ButtonStyled"
import { FormStyled } from "./FormStyled"
import { LabelStyled } from "./LabelStyled"

export const FormUser = ()=>{
    return(
        <>
            <FormStyled>    
                <LabelStyled>Photo</LabelStyled>
                <input type="file"/>
                <LabelStyled>Full Name</LabelStyled>
                <input type="text"/>
                <LabelStyled>Job Title</LabelStyled>
                <select>
                    <option value="manager">Manager</option>
                    <option value="manager">Recepcion</option>
                    <option value="manager">Servicio Habitaciones</option>
                </select>
                <LabelStyled>Email</LabelStyled>
                <input type="email"/>
                <LabelStyled>Start Date</LabelStyled>
                <input type="date"/>
                <LabelStyled>Job Description</LabelStyled>
                <textarea rows={4}/>
                <LabelStyled>Status</LabelStyled>
                <select>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
                <LabelStyled>Password</LabelStyled>
                <input type="password"/>
                <ButtonStyled 
                type="submit" 
                $bg="#135846"
                $fc="#FFF"
                >
                    Create
                </ButtonStyled>
                <ButtonStyled 
                type="submit" 
                $bg="#E23428"
                $fc="#FFF"
                >
                    Clear
                </ButtonStyled>
            </FormStyled>
        </>

    )

}