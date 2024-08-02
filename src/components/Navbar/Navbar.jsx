import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon/CartIcon";
import ModalCart from "./ModalCart/ModalCart";
import {
  CartNavStyled,
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  MenuToggleStyled,
  ModalOverlayStyled,
} from "./NavbarStyles";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <NavbarContainerStyled>
      <ModalCart />

      <div>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dv9a5qgfw/image/upload/v1710187795/webydatos.png"
            alt="Logo"
            style={{ width: "100px", borderRadius: "50%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
          />
        </Link>
      </div>

      <MenuToggleStyled onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </MenuToggleStyled>

      <ModalOverlayStyled isHidden={!isMenuOpen} onClick={toggleMenu} />

      <LinksContainerStyled isOpen={isMenuOpen}>
        <motion.div whileTap={{ scale: 0.97 }}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <LinkContainerStyled home></LinkContainerStyled>
            Home
          </Link>
        </motion.div>

        <Link to="/SobreNosotros" onClick={() => setIsMenuOpen(false)}>
          <LinkContainerStyled home></LinkContainerStyled>
          Sobre Nosotros
        </Link>

        <Link to="/Productos" onClick={() => setIsMenuOpen(false)}>
          <LinkContainerStyled home></LinkContainerStyled>
          Productos
        </Link>

        <Link to="/Contacto" onClick={() => setIsMenuOpen(false)}>
          <LinkContainerStyled home></LinkContainerStyled>
          Contacto
        </Link>

        <CartNavStyled>
          <CartIcon />
        </CartNavStyled>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
