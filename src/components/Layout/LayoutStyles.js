import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  // Ajustes responsivos
  @media (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;  
  }
`;
