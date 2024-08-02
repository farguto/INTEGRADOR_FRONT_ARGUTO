import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html {
    scroll-behavior: smooth;
    height: 100%;
    color: black;
  
  }

  body {
    background: white;
    color: black;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 
  }

  #root {
    display: flex;
    flex-direction: column;
  
    margin:0;
    padding:0;
    width: 100vw;

    
  }

  main {
    flex: 1;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: white;

    &:hover {
      color: grey;
    }
  }

  li {
    list-style: none;
  }


  .sobre-nosotros {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 8% auto;
    padding: 5%;
    font-size: x-large;
  }

  .contacto-formulario {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 50px auto 0;
    padding: 5%;
    
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    width: 100%;
    max-width: 500px;   
    text-align: center;
    font-size: larger;
    font-weight: bold;
  }

  input,
  textarea {
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #ddd;
    width: 100%;
    max-width: 500px;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s;

    &:focus {
      border-color: #007BFF;
      outline: none;
    }
  }

  button {
    background-color: #007BFF;
    color: white;
    font-size: 14px;
    font-weight: bold;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100px;

    &:hover {
      background-color: #0056b3;
    }
  }

  .error {
    color: red;
    font-size: 0.9em;
  }

  @media (max-width: 768px) {
    .sobre-nosotros,
    .contacto-formulario,
    form,
    input,
    textarea {
      width: 90%;
    }
  }

  @media (max-width: 480px) {
    .sobre-nosotros,
    .contacto-formulario,
    form,
    input,
    textarea {
      width: 100%;
    }
  }
`;
