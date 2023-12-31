import styled from "styled-components";

export const DashBoardStyled = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2em;
`

export const DashBoardTopContainerStyled =  styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap:2em
`
export const DashBoardBottomContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 36.5rem;
    margin: 0 auto;
    width: 100%;
    background-color:#FFF;
    padding: 2em;
    border-radius: 1em;
    max-width: 150rem;

`
export const DashBoardHeading= styled.div`
    font-size: 2rem;
    margin-bottom: 1em;
    line-height: 3rem;
    font-weight: 500;
`