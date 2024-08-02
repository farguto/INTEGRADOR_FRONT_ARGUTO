import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import SobreNosotros from "../pages/SobreNosotros/SobreNosotros";
import Contacto from "../pages/Contacto/Contacto";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Productos from "../pages/Productos/Productos";

 

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/SobreNosotros" element={<SobreNosotros />} />
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="/Productos" element={<Productos />} />
      <Route path="*" element={<PageNotFound />} />
    </ReactDomRoutes>
  );
}

export default Routes;
