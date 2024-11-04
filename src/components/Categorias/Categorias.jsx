import Categoria from "./Categoria";
import { CategoriasContainer } from "./CategoriasStyles";
import { useSelector } from "react-redux";

const Categorias = ({ onSelectCategory }) => {
  const { categories } = useSelector((state) => state.categories);

  return (
    <CategoriasContainer>
      {categories.map((category) => (
        <Categoria
          key={category.id}
          {...category}
          onSelect={() => onSelectCategory(category.name)} // Llamamos a la función al seleccionar
        />
      ))}
    </CategoriasContainer>
  );
};

export default Categorias;
