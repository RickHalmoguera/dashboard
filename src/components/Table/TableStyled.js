import styled from "styled-components";

export const TableStyled = styled.table`
    margin: 3em 0;
    width: 100%;
    background-color: #FFF;
    border-radius: 1em;
    text-align: left;
    padding: 2em;
    border-spacing: 1rem 2em;
    height: 60rem;


`
export const TrStyled = styled.tr `
    &:hover{
        box-shadow: 0px 4px 30px #0000001A
    }
`

export const TdStyled = styled.td`
    width: 18rem;
    padding: 2em 0;
`
export const TdBtnStyled = styled.td`
    width: 10rem;
    padding: 2em 0;
`

export const TrHeadStyled = styled.th `
    font-size: 1.4rem;
    font-weight: 600;
    border-bottom: 2px solid #F5F5F5;
    padding-bottom:1em ;
    
`

export const TdHeadind = styled.p `
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 2.5rem;
    color: #393939;

`

export const TdText = styled.p `
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.5rem;
    color:#393939;
`

export const TdSubText = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 2.1rem;
    color:#393939;
`

export const TdIdText = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 2.1rem;
    color:#799283;
`

export const TableUserBtn = styled.button`
    border: none;
    border-radius: 8px;
    height: 3.5rem;
    background-color:transparent;
    font-size: 1.8rem;
    font-weight: 600;
    color: #E23428;
    text-align: left;
    cursor: pointer;
`