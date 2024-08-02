import styled from 'styled-components';

export const HeroContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
 margin-top: 20px;
  // Ajustes responsivos
  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }

  h1 {
    margin-bottom: 2rem;
  }

  img{
  margin-top: 2rem;
  margin-bottom: 2rem;
  }


`;

export const HeroFormStyled = styled.form`
  display: flex;
  gap: 40px;
  position: relative;

  // Ajustes responsivos
  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    gap: 40px;
  }
`;

export const HeroSearchBarStyled = styled.input`
  background-color: white;
  color: black;
  border-radius: 15px;
  padding: 10px;
  width: 80%;

  // Ajustes responsivos
  @media (max-width: 1024px) {
    width: calc(100% - 24px); // Ajustar ancho considerando el padding
  }
`;

export const IconWrapperStyled = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 1.1rem;
`;
