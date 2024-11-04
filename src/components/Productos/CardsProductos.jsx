import CardProducto from './CardProducto';
import { useSelector } from "react-redux";
import { ProductosContainer } from './CardsProductosStyles';

const CardsProductos = () => {
  const products = useSelector((state) => state.products.products);
  const selectedCategory = useSelector((state) => state.categories.selectedCategory);

  return (
    <ProductosContainer>
      {Object.entries(products).map(([, tecnos]) =>
        tecnos
          // Mostrar todos los productos si no hay categoría seleccionada
          .filter((tecno) => !selectedCategory || tecno.category === selectedCategory)
          .map((tecno) => <CardProducto key={tecno.id} {...tecno} />)
      )}
    </ProductosContainer>
  );
};

export default CardsProductos;
