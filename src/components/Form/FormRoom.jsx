import { ButtonStyled } from "../common/ButtonStyled"
import { FormStyled } from "./FormStyled"
import { LabelStyled } from "./LabelStyled"

export const FormRooms = ()=>{
    return(
        <>
            <FormStyled>    
                <LabelStyled>Photo</LabelStyled>
                <input type="file"/>
                <LabelStyled>Room Type</LabelStyled>
                <select>
                    <option value="single bed">Single Bed</option>
                    <option value="double bed">Double Bed</option>
                    <option value="double superior">Double Superior</option>
                    <option value="suite">Suite</option>

                </select>
                <LabelStyled>Room number</LabelStyled>
                <input type="text"/>
                <LabelStyled>Description</LabelStyled>
                <textarea rows={4}/>
                <LabelStyled>Offer</LabelStyled>
                <select>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <LabelStyled>Price</LabelStyled>
                <input type="text"/>
                <LabelStyled>Discount</LabelStyled>
                <select>
                    <option value="10">10%</option>
                    <option value="20">20%</option>
                    <option value="30">30%</option>
                    <option value="40">40%</option>
                    <option value="50">50%</option>
                    <option value="60">60%</option>
                    <option value="70">70%</option>
                    <option value="80">80%</option>
                    <option value="90">90%</option>
                    <option value="100">100%</option>
                </select>
              
                <label for="amenities">Amenities:</label>

    <input type="checkbox" id="airConditioner" name="amenities" value="Air Conditioner"/>
    <label for="airConditioner">Air Conditioner</label>

    <input type="checkbox" id="breakfast" name="amenities" value="Breakfast"/>
    <label for="breakfast">Breakfast</label>

    <input type="checkbox" id="cleaning" name="amenities" value="Cleaning"/>
    <label for="cleaning">Cleaning</label>

    <input type="checkbox" id="grocery" name="amenities" value="Grocery"/>
    <label for="grocery">Grocery</label>

    <input type="checkbox" id="shopNear" name="amenities" value="Shop Near"/>
    <label for="shopNear">Shop Near</label>

    <input type="checkbox" id="highSpeedWifi" name="amenities" value="High Speed Wifi"/>
    <label for="highSpeedWifi">High Speed Wifi</label>

    <input type="checkbox" id="kitchen" name="amenities" value="Kitchen"/>
    <label for="kitchen">Kitchen</label>

    <input type="checkbox" id="shower" name="amenities" value="Shower"/>
    <label for="shower">Shower</label>

    <input type="checkbox" id="singleBed" name="amenities" value="Single Bed"/>
    <label for="singleBed">Single Bed</label>

    <input type="checkbox" id="doubleBed" name="amenities" value="Double Bed"/>
    <label for="doubleBed">Double Bed</label>

    <input type="checkbox" id="towels" name="amenities" value="Towels"/>
    <label for="towels">Towels</label>

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