import styled from 'styled-components';


export const ProductosContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  gap: 2rem; 
  width: 100%;
  padding: 1rem 0;

  
  @media (min-width: 768px) {
    gap: 2.5rem; 


  }

  @media (min-width: 1024px) {
    gap: 2rem; 
    max-width: 1300px; 
    margin: 0 auto;   }
`;

export const ProductosCard = styled.div`
  background: lightgrey;
  width: 250px; 
  height: 40vh; 
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 

 

  img {
    width: 100%;
    margin-bottom: 1rem;
  }
  
  h2 {
    font-weight: 600;
    margin: 0;
  }

  p {
    color: black;
    font-size: 1rem; 
    font-style: italic;
  }

  
  @media (min-width: 1024px) {
    width: 200px; 
    height: 35vh;
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 1.5rem;
  color: black;
`;
