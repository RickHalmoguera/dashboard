import styled from "styled-components";
import Modal from 'react-modal';


export const ModalReviewsStyled = styled(Modal)`
    
    position: relative;
    top:10%;
    left: 40%;
    width:60rem;
    padding: 5em;
    background-color: #FFF;
    border: 2px solid #135846;
    border-radius:1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
`
export const OverlayStyled = styled.div`
    background-color: red;
`
export const ModalTitle = styled.p`
    font-size:3rem;
    line-height: 2.8rem;
    font-weight: 600;
`

export const ModalText = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40rem;
    font-size:1.6rem;
    line-height: 2.8rem;
    font-weight: 400;
`
