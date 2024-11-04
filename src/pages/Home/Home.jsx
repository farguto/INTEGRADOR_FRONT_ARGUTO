import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Categorias from "../../components/Categorias/Categorias";
import Hero from "../../components/Hero/Hero";
import CardsProductos from "../../components/Productos/CardsProductos";
import About from "../../components/About/About";  

import {
  CategoriasWrapper,
  HomeWrapper,
  ProductosWrapper,
  AboutWrapper,  
} from "./HomeStyles";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);  
  const productsRef = useRef();

  const doScroll = () => {
    window.scrollTo(
      productsRef.current.getBoundingClientRect().x,
      productsRef.current.getBoundingClientRect().y
    );
  };

  
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <HomeWrapper>
      <Hero doScroll={doScroll} />

      <CategoriasWrapper>
        <h2 style={{ textAlign: 'center' }}>Categorias</h2>
        <Categorias onSelectCategory={handleCategorySelect} />  
      </CategoriasWrapper>

      <ProductosWrapper ref={productsRef}>
        <h2 style={{ textAlign: 'center' }}>Nuestros productos destacados</h2>
        <CardsProductos category={selectedCategory} /> 
        <div style={{ textAlign: 'center', marginTop: '20px', width: '100%' }}>
          <Link to="/Productos">
            <button> Ver más</button>
          </Link>
        </div>
      </ProductosWrapper>

      <AboutWrapper>
        <About />
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/SobreNosotros">
            <button>Sobre Nosotros</button>
          </Link>
        </div>
      </AboutWrapper>
    </HomeWrapper>
  );
}

export default Home;
