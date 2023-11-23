import styled from "styled-components";

export const TableCardUserStyled = styled.div`
    display: flex;
    gap: 1em;
    align-items: center;
    img{
        width: 8.8rem;
        height: 8.8rem;
        object-fit:center;
        object-position: center center;
        border-radius: 1em;
    }

    strong{
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 2.5rem;
    }
    
    p{
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 2.5rem;
    }

    span{
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 2.1rem;
        color:#799283;
    }
`