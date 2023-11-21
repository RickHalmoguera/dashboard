import styled from "styled-components";

export const CardDashBoardStyled = styled.div`
    background-color: #FFF;
    padding: 3em;
    display: flex;
    align-items: center;
    gap:2em;
    max-width: 34rem;
    min-width: 26.5rem;
    border-radius: 1em;

    .icon__container{
        background-color: #FFEDEC;
        width: 6.5rem;
        height: 6.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1em;
        

        &:hover{
            background-color: #E23428;

            & > * {
            color: #fff;
        }
        } 
    }

    .text__container{
        display: flex;
        flex-direction: column;

    }

    p{
        font-size: 3rem;
        line-height: 4.6rem;
        font-weight: 600;
        color: #393939;

    }
    span{
        font-size: 1.4rem;
        line-height: 2.1rem;
        font-weight: 300;
        color: #787878;
    }
`