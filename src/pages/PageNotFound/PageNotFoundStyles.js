import styled from 'styled-components';

export const FoundContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
  margin: 0 auto;
  height: 90vh;
  width: 100vw;
  gap: 5rem; 
 
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;  
  }
`;

export const FoundTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
 
  @media (max-width: 768px) {
    align-items: center;  
    text-align: center;  
    gap: 1rem;  
  }
`;

export const FoundTitleStyled = styled.h1`
  font-weight: 800;
  font-size: 2rem;
 
  @media (max-width: 768px) {
    font-size: 1.5rem;  
  }
`;

export const FoundSubtitleStyled = styled.h2`
  font-weight: 400;
 
  @media (max-width: 768px) {
    font-size: 1.2rem;  
  }
`;
