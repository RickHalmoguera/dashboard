import { CardReviewStyled, CardReviewUserContainer, CommentText, ReviewTime, UserImg, UserName } from "./CardReviewStyled";
import RicardoPhoto from "../../assets/users/ricardo.jpg"


import { XCircleStyledIcon } from "../Icons/IconsStyled";

export const CardReview = ()=>{
    return(
        <CardReviewStyled>
            <CommentText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</CommentText>

            <CardReviewUserContainer>
                <UserImg src={RicardoPhoto} alt="" />
                <UserName>Kusnaidi Anderson <br /><ReviewTime>4m ago</ReviewTime></UserName>
                <XCircleStyledIcon />
            </CardReviewUserContainer>
        </CardReviewStyled>
    )
}
