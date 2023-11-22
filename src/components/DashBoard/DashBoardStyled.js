import styled from "styled-components";

export const DashBoardStyled = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2em;

    .top__container{
      
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap:2em
    }

    .bottom__container{
        margin:0 auto;
        width: 100%;
        height: 50%;
        background-color:#FFF;
        padding: 2em;
        border-radius: 1em;
        overflow: hidden;

        & h2{
            font-size: 2rem;
            margin-bottom: 1em;
            line-height: 3rem;
            font-weight: 500;
        }
    }

    
`