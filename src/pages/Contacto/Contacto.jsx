import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Contacto() {
 
  
  const validationSchema = Yup.object({
    nombre: Yup.string().required('El nombre es requerido'),
    apellido: Yup.string().required('El apellido es requerido'),
    email: Yup.string().email('Email no válido').required('El email es requerido'),
    asunto: Yup.string().required('El asunto es requerido')
  });

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Contacto</h2>
      <div className="contacto-formulario">
        <Formik
          initialValues={{ nombre: '', apellido: '', email: '', asunto: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('Formulario enviado', values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div>
                <label>Nombre:</label>
                <Field name="nombre" type="text" />
                <ErrorMessage name="nombre" component="div" className="error" />
              </div>

              <div>
                <label>Apellido:</label>
                <Field name="apellido" type="text" />
                <ErrorMessage name="apellido" component="div" className="error" />
              </div>

              <div>
                <label>Email:</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div>
                <label>Asunto:</label>
                <Field name="asunto" as="textarea" />
                <ErrorMessage name="asunto" component="div" className="error" />
              </div>

              <button type="submit">Enviar</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Contacto;
