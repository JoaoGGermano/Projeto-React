// Importa o React para poder criar o componente
import React from "react";

// Define o componente Button que recebe uma prop chamada de label
function Button({ label }) {
  // Retorna um botão com o texto vindo da prop label criada acima
  return <button>{label}</button>;
}

// Exporta o componente
export default Button;
