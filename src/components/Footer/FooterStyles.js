import styled from 'styled-components';

export const FooterContainerStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
 
  padding: 1rem;
  background-color: #113a78;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    width: 100%;
    max-width: 1900px;
    margin: 0 auto;
  }

  p span {
    font-weight: 800;
  }
`;

export const LinksContainerStyled = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;

  @media (min-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 1024px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
