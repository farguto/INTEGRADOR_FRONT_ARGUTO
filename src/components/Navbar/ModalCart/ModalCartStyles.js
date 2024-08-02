import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;  
 
  width: 90vw; 
  max-width: 400px;
  height: calc(100vh - 4rem); 
  padding: 2rem;  
  background-color: white;
  border-radius: 0 0 0 1rem;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 90vw;  
    height: 90vh;  
    border-radius: 0;  
    padding: 2rem;  
  }
`;

export const CloseButtonContainerStyled = styled.div`
  height: 32px;
`;

export const CloseButtonStyled = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;  
  height: 1.5rem; 
  outline: none;
  border: none;
  border-radius: 10px;
 
  color: white;
  cursor: pointer;
`;

export const TitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 0 1rem 0;
 

  & h1 {
    margin-top: 0;
    font-size: 1.25rem;  
  }

  @media (max-width: 768px) {
    flex-direction: column;  
    align-items: flex-start; 
  }

  @media (max-width: 400px) {
    & h1 {
      font-size: 1rem;  
    }
  }
`;

export const MainContainerStyled = styled.div`
  height: 55%;
 
`;

export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;  
  width: 100%;
  height: 300px;  
  margin: 0 auto;
  padding: 0.5rem;  
  overflow: scroll;
  

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 200px;  
  }

  @media (max-width: 768px) {
    height: 50vh;  
  }

  @media (max-width: 400px) {
    height: 40vh;  
    padding: 0.5rem;  
  }
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 300px; 
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 0.5rem;
  border-radius: 15px;
  

  & img {
    width: 50px; 
    height: 50px;  
    border-radius: 16px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    max-width: 80%;  
  }

  @media (max-width: 400px) {
    max-width: 90%;  
  }
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 150px;  

  @media (max-width: 768px) {
    width: 90%;  
  }

  @media (max-width: 400px) {
    width: 90%;  
  }
`;

export const CardTitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 500;
  font-size: 0.8rem;  

  @media (max-width: 400px) {
    font-size: 0.8rem;  
  }
`;

export const TextStyled = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.8rem;  

  @media (max-width: 400px) {
    font-size: 0.7rem;  
  }
`;

export const PriceStyled = styled.span`
  font-weight: 800;
  font-size: 0.9rem;  
  color: black;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 400px) {
    font-size: 0.8rem;  
  }
`;

export const PriceContainerStyled = styled.div`
  z-index: 1000;
  color: black;

  & p {
    text-align: center;
    margin-bottom: 0;
    color: black;
  }
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const ButtonContainerStyled = styled(SubtotalStyled)`
  justify-content: center;
 
`;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;
  color: black;
   
`;
