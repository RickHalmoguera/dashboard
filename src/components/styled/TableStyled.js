import styled from "styled-components";

export const TableStyled = styled.table `
    width: 100%;
    background-color: #FFF;
    border-radius: 2em;
    text-align: center;
    .name__container{
        display: flex;
        align-items: center;
        text-align: left;
        gap: 2em;

    }

    th{
        font-size: 1.8rem;
        font-weight: 600;
        line-height:2.7rem;
        
    }
    td{
        padding: 2em;
        border-bottom: 1px solid #EBF1EF;
        border-top: 1px solid #EBF1EF;
    }
    
    img{
        width:15rem;
        height:7.7rem ;
        border-radius: 1em;
        object-fit: cover;
        object-position: center center;
    }

    p{
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 2.5rem;
    }

    span{
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 2.1;

    }

    strong{
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 2.5rem;
    }

    .status__container {
        width: 12.5rem;
        height: 4.8rem;
        border-radius: 2em;
        
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    
        &--red{
            background-color:#E23428 ;
        }

        &--green{
            background-color: #5AD07A;
        }
    }
    
`