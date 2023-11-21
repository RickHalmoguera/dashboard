import styled from "styled-components";

export const DashBoardStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2em;

    .top__container{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap:2em
    }

    .bottom__container{
        max-width: 150rem;
        background-color:#FFF;
        padding: 2em;
        border-radius: 1em;

        & h2{
            font-size: 2rem;
            margin-bottom: 1em;
            line-height: 3rem;
            font-weight: 500;
        }
    }

    
`