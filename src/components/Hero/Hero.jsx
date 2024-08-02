import { useState } from "react";
import {useDispatch,useSelector} from "react-redux";
import { selectCategory } from "../../redux/categories/categoriesSlice";
import Button from "../UI/Button/Button";

import {
  HeroContainerStyled,
  HeroFormStyled,
  HeroSearchBarStyled,
 
} from "./HeroStyles";

const Hero = ({doScroll}) => {
  const [value,setValue]=useState("");

  const listOfCategories=useSelector(
    (state)=> state.categories.categories)
    .map((category)=>category.category);

    const dispatch =useDispatch();

    const handlerSubmit=(e,value)=>{
      e.preventDefault();

      const newCategory=value.trim().toLowerCase().split(" ").join("");

      const selectedCategory = listOfCategories.find((category)=>category.toLowerCase()=== newCategory);

      if (selectedCategory) {
        dispatch(selectCategory(selectedCategory));
        doScroll();
      } else {
        return alert("No se encuentra la categoría mencionada")
      }

      setValue("");
    }
  
  return (
    <HeroContainerStyled>
      <div>
        <h1 className="title"> Tienda Webydatos</h1>
        <h2 className="title"> Llevamos la tecnología del mundo a tu puerta</h2>
        <HeroFormStyled>
          <HeroSearchBarStyled
            value={value}
            onChange={(e)=> setValue(e.target.value)}
            type="text"
            
          />
         
          <Button
           
            onClick={(e) => handlerSubmit(e,value)}
            radius="10"
            disabled={!value}
          >
            Buscar
          </Button>
        </HeroFormStyled>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dv9a5qgfw/image/upload/v1710187795/webydatos.png"
          alt="Logo de Webydatos"
          style={{ width: "60%",    borderRadius: '15px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', }}
        />
      </div>
    </HeroContainerStyled>
  );
};

export default Hero;
