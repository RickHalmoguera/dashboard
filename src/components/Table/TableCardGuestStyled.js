import styled from "styled-components";

export const TableCardGuestStyled = styled.div`
    display: flex;
    gap: 1em;
    align-items: center;
    img{
        width: 4.5rem;
        height: 4.5rem;
        object-fit:center;
        object-position: center center;
        border-radius: 1em;
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