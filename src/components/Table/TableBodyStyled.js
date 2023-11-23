import styled from "styled-components";

export const TableBodyStyled = styled.tbody`

    tr{
        border-radius: 1em;
        &:hover{
            box-shadow: 0px 4px 30px #0000001A
        }
    }

    td{
        padding: 2em 0;
        
    }

    .clamp{
        max-width: 30rem;
    }

    .flex{
        display: flex;
        gap: 1em;
        align-items: center;
    }

    p{
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 2.5rem;
    }

    h2{
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 2.5rem;
        margin-bottom: .5em;
    }
`