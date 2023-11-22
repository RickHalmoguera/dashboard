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
        border-radius: 1em;
        object-fit: cover;
        object-position: center center;
    }

    .room__img{
        width:15rem;
        height:7.7rem ;
    }

    .guest__img{
        width:4.5rem;
        height: 4.5rem ;
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

    .green{
        color:#799283;
    }

    strong{
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 2.5rem;
    }

    .status__room {
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

    .status__guest{
        width:10.9rem;
        height: 4.8rem;
        border-radius:2em;
        display: flex;
        align-items: center;
        justify-content: center;

        &--red{
            background-color: #FFEDEC;
            color: #E23428;
        }

        &--green{
            background-color: #E8FFEE;
            color: #5AD07A;
        }

        &--grey{
            background-color: #E2E2E2;
            color: #6D6D6D;
        }

        &--black{
            background-color: #575757;
            color: #BEBEBE;
        }
    }
    
`