import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 90vw;

  padding: 2rem;
  margin: 0 auto;

  h2 {
    font-weight: 400;
  }
 
  @media (min-width: 768px) {
    width: 80vw;  
  }
`;

export const CategoriasWrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;  
  align-items: center;  
  gap: 20px; 
  padding: 10px;
  flex-direction: column;
`;

export const ProductosWrapper = styled.section`
  margin-top: 5rem;
  
  @media (min-width: 768px) {
    margin-top: 6rem;  
  }
 
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 3rem;
 
  @media (min-width: 768px) {
    gap: 30px;  
    margin-top: 4rem; 
  }

  @media (min-width: 1024px) {
    margin-top: 5rem;  
  }
`;
