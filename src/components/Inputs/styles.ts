import styled from "styled-components";

export const Container = styled.section `
  
  display: flex;
  padding-left: 10rem;
  height: 60rem;
`
export const Content = styled.form `

  display: flex;
  flex-direction: row;
  align-items: center;

  .principal {
    // background: darkred;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }

  h1 {
    font-weight: 700;
    font-size: 3.5rem;
    color: #FFFF;
  }

  input {
    width: 35rem;
    height: 3rem;
    background: #FBFBFD;
    border: none;
    border-radius: 8px 8px 0 0;
  }


  .submit {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: #FFF;
    background: var(--maya-blue);
    border: 0;
    padding: 0 2rem;
    width: 17rem;
    height: 3rem;
    border-radius: 50px;
    transition: filter 0.2s;

    p {
      color: black;
      font-weight: 700;
      width: 100%;
    }


    &:hover {
      filter: brightness(0.9);
    }


  }


  .ong {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    color: #FFF;
    background: var(--maya-blue);
    border: 0;
    padding: 0 2rem;
    width: 14rem;
    height: 3rem;
    border-radius: 50px;
    transition: filter 0.2s;
    

    p {
      color: black;
      font-weight: 700;
      width: 100%;
    }


    &:hover {
      filter: brightness(0.9);
    }



`