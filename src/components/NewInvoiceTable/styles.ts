import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;
    background-color: #fff;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th { 
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5;
            font-size: 2rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child {
                color: var(--text-title);
            }
        }
    }

`;

export const Invoice = styled.div`
    width: 100%;
      
    background-color: #2ec4b6;
`;


export const LineItem = styled.div`
     width: 100%;
     height: 3rem;
     align-items: center;
     display: flex;

     h1 {
         color: #fff;
         margin-left: 2.1rem;
         font-size: 1rem;
     }

     h1:nth-child(2) {
         color: #fff;
         margin-left: 9.9rem;
         font-size: 1rem;
     }

     h1:nth-child(3) {
         color: #fff;
         margin-left: 13rem;
         font-size: 1rem;
     }

     h1:nth-child(4) {
         color: #fff;
         margin-left: 11rem;
         font-size: 1rem;
     }

     h1:nth-child(5) {
         color: #fff;
         margin-left: 8rem;
         font-size: 1rem;
     }
     
`;

