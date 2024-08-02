import { useRef } from "react";
import Categorias from "../../components/Categorias/Categorias";
import CardsProductos from "../../components/Productos/CardsProductos";
 

import {
  CategoriasWrapper,
  HomeWrapper,
  ProductosWrapper,
 
} from "./ProcutosStyles";

function Productos() {
  const productsRef = useRef();

  const doScroll = () => {
    window.scrollTo({
      left: productsRef.current.getBoundingClientRect().x,
      top: productsRef.current.getBoundingClientRect().y,
      behavior: "smooth",
    });
  };

  return (
    <HomeWrapper>
    
      <CategoriasWrapper>
        <h2 style={{ textAlign: "center" }}>Categorias</h2>
        <Categorias />
      </CategoriasWrapper>

 
      <ProductosWrapper ref={productsRef}>
        <h2 style={{ textAlign: "center" }}>Nuestros productos</h2>
        <CardsProductos />
      </ProductosWrapper>
    </HomeWrapper>
  );
}

export default Productos;
