import { CardReviewStyled } from "./styled/CardReviewStyled";
import RicardoPhoto from "../assets/users/ricardo.jpg"


import { CheckCircleStyledIcon, XCircleStyledIcon } from "./styled/IconsStyled";

export const CardReview = ()=>{
    return(
        <CardReviewStyled>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

            <div className="customer__card">
                <img src={RicardoPhoto} alt="" />
                <p>Kusnaidi Anderson <br /><span>4m ago</span></p>

                <div className="review__icons">
                    <CheckCircleStyledIcon />
                    <XCircleStyledIcon />
                </div> 
            </div>
        </CardReviewStyled>
    )
}
