import styled from "styled-components";
import { motion } from "framer-motion";

export const CategoriasContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;  
  align-items: center;
  gap: 10px;
  padding: 20px;  
  max-width: 1200px;  
  margin: 0 auto;  
  box-sizing: border-box;  
 
 
`;

  

export const CardCategoria = styled(motion.div)`
  display: flex;
  
  background-color: lightgrey;
  flex-direction: column;
  width: 200px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
 


  h2 {
    font-size: 1rem;
    font-weight: bold;
    color: black;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  img {
    padding-top: 7px;
    padding-bottom: 7px;
    width: 100%;
  }

 

  @media (max-width: 768px) {
    width: 150px;  
    gap: 10px;
  }

 
`;

export const BorderDecoration = styled.div`
  height: 5px;
  width: 30%;
  background: red;
  border-radius: 15px;
  margin: 0 auto;  
`;
