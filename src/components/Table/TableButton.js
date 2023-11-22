import styled from "styled-components";

export const TableButton = styled.button`
    border: none;
    border-radius: 8px;
    width: 13rem;
    padding: .6em 1.5em;
    background-color:${({$bg})=> $bg};
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({$fc})=> $fc};

    &:disabled{
        background-color: #FFF;
        color:#799283;
        border: 1px solid #799283;
        border-radius: 12px;        
    }
`