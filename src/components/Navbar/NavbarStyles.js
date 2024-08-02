import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const NavbarContainerStyled = styled.div`
  height: 15vh;
  background-color: #113a78;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100vh;
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};

  @media (min-width: 769px) {
    display: none; 
  }
`;

export const LinksContainerStyled = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: row;

  @media (min-width: 1024px) {
    gap: 40px;
  }

  a {
    padding: 0.5rem 1rem;

    @media (min-width: 1024px) {
      padding: 1rem 1.5rem;
    }
  }

  a:first-child {
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')}; 
    flex-direction: column;
    position: absolute;
    top: 130px;
    left: 0;
    width: 100%;
    background-color: #113a78;
    z-index: 60;
    gap: 4rem;
  }
`;

export const LinkContainerStyled = styled.div`
  font-size: 1rem;
  color: ${(props) => (props.home ? "#ff9d01" : "#ff9300")};

  
  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const CartNavStyled = styled.div`
  position: relative;
  cursor: pointer;
  z-index: 70; 

  span {
    position: absolute;
    top: 0;
    height: 20px;
    width: 20px;
    text-align: center;
    margin-left: 10px;
    border-radius: 1rem;
    color: white;
    background-color: black;
    font-size: 0.8rem;


    @media (min-width: 1024px) {
      font-size: 0.9rem;
    }
  }
`;

export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

export const MenuToggleStyled = styled.div`
  display: none;
  cursor: pointer;
  z-index: 70; 
  

  @media (max-width: 768px) {
    display: block;
  }

  span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px 0;
    transition: all 0.3s ease-in-out;
  }
`;
