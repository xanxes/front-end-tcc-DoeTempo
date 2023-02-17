import styled from "styled-components";

export const Container = styled.header `

   
`

export const Content = styled.div `
  
    margin: 0 auto;
    padding: 2rem 1rem 2rem;
    display: flex;

    button {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.2rem;
        color: #FFF;
        background: var(--blueberry);
        border: 0;
        padding: 0 2rem;
        height: 3rem;
        border-radius: 50px;
        transition: filter 0.2s;

        &:hover{
           filter: brightness(0.9);
        }
    }
`