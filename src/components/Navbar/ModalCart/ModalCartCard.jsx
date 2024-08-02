import React from "react";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { addToCart, removeFromCart } from "../../../redux/cart/cartSlice";
import Count from "../../UI/Count/Count";
import Increase from "../../UI/Increase/Increase";   

import {
  CardTitleStyled,
  PriceStyled,
  ProductContainerStyled,
  QuantityContainerStyled,
  TextContainerStyled,
  TextStyled,
} from "./ModalCartStyles";

const ModalCartCard = ({ img, title, desc, price, quantity, id }) => {
  const dispatch = useDispatch();

  const showAlert = (message) => {
    Swal.fire({
   
      text: message,
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  return (
    <ProductContainerStyled>
      <img src={img} alt={title} />
      <TextContainerStyled>
        <CardTitleStyled>{title}</CardTitleStyled>
        <TextStyled>{desc}</TextStyled>
        <PriceStyled>{price}</PriceStyled>
      </TextContainerStyled>
      <QuantityContainerStyled>
        <Increase onClick={() => {
          dispatch(removeFromCart(id));
          showAlert('Producto eliminado con éxito');
        }}>
          {quantity === 1 ? "0" : "-"}
        </Increase>
        <Count>{quantity}</Count>
        <Increase onClick={() => {
          dispatch(addToCart({ img, title, desc, price, id }));
          showAlert('Producto añadido con éxito');
        }}>
          +
        </Increase>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard;
