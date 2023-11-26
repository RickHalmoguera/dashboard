import styled from "styled-components";

export const ButtonStyled = styled.button`
    border: none;
    border-radius: 8px;
    width: 16rem;
    height: 3.5rem;
    background-color:${({$bg})=> $bg};
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({$fc})=> $fc};

` 