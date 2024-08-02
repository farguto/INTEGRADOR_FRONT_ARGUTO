import React from "react";

function SobreNosotros() {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Sobre Nosotros</h2>

      <div  className="sobre-nosotros"   style={{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        width: '75%',
      }}>
        Somos un equipo multidisciplinario enfocado en la excelencia. Buscamos brindar nuestro mayor esfuerzo para lograr la satisfacción de nuestros clientes. 
        En cada etapa del proceso, nos enfocamos en lograr niveles de calidad superiores a la competencia, con la finalidad de lograr una experiencia de compra plena, buscando brindar no solo productos de calidad sino también un servicio que este a la altura.
      </div>
    </div>
  );
}

export default SobreNosotros;
