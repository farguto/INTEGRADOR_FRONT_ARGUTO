import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 90vw;
  max-width: 1600px;
  padding: 2rem;
  margin: 0 auto;

  
  @media (min-width: 1024px) {
    width: 80vw;  
  }

  h2 {
    font-weight: 400;
  }
`;

export const CategoriasWrapper = styled.section`
  margin-top: 8rem;
 
  @media (min-width: 1024px) {
    margin-top: 10rem;  
  }
`;

export const ProductosWrapper = styled.section`
  padding-top: 5rem;
 
  @media (min-width: 1024px) {
    padding-top: 7rem;  
  }
`;


 

export const ButtonContainerStyled = styled.div`


 
  width: 100%;  
  max-width: 200px;  
  margin: 0 auto;  
 

  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 3rem;
  background-color: red;
 
  @media (min-width: 1024px) {
    gap: 30px;  
    margin-top: 4rem;  
  }
`;

export const AboutWrapper = styled.div`
  padding: 20px;
  text-align: center;

  h1 {
    margin-bottom: 20px;
  }

  div {
    margin-bottom: 10px;
    line-height: 1.6;
    font-size: 20px;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
 
    @media (min-width: 1024px) {
      font-size: 22px;  
    }
  }

  button {
    width: 100%;  
    max-width: 200px;  
    margin: 0 auto; 
  }
 
  @media (min-width: 1024px) {
    padding: 40px;  
  }
`;
