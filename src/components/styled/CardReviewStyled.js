import styled from "styled-components";


export const CardReviewStyled = styled.div`
    border: 1px solid #EBEBEB;
    border-radius: 1em;
    background-color: #FFF;
    min-width: 27.5rem;
    max-width: 43rem;
    padding: 2em;

    p{
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.8rem;
    }
    .customer__card{
        display: flex;
        align-items: center;
        gap: 2em;
        margin-top: 2em;

        img{
            width: 5.6rem;
            height: 5.6rem;
            border-radius: 1em;
        }
    
        
        p{
           font-size: 1.6rem;
           font-weight:600;
           line-height: 2.5rem;
        }
    
        span{
            font-size: 1.4rem;
            font-weight: 400;
            line-height: 2.1rem;
            color: #799283;
        }
    }

    .review__icons{
        align-self: flex-end;
        margin-left: auto;
    }

`