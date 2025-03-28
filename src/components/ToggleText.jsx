// Importa o React e o hook useState para gerenciar o estado do componente
import React, { useState } from "react";

function ToggleText() {
  // Define um estado chamado isVisible, que controla a visibilidade do texto.
  // A função setIsVisible permite alterar esse estado.
  const [isVisible, setIsVisible] = useState(false);

  // Função que mostra ou oculta o texto
  const toggleVisibility = () => {
    setIsVisible(!isVisible); 
  };

  return (
    <div style={styles.container}>
      {/* Chamando a função toggleVisibility */}
      <button onClick={toggleVisibility} style={styles.button}>
        {/* O texto do botão muda */}
        {isVisible ? "Ocultar" : "Mostrar"}
      </button>

      {/* Se isVisible for true, o texto será exibido, senão não vai ser, né */}
      {isVisible && <p style={styles.text}>Este é um texto que pode ser ocultado.</p>}
    </div>
  );
}

// Objeto de estilos para estilizar o componente
const styles = {
  container: {
    textAlign: "center", 
    marginTop: "20px", 
  },
  button: {
  
    fontSize: "16px", // Define o tamanho do texto
    backgroundColor: "#007BFF", // Define uma cor do botão
    color: "white", // Define a cor do texto
  },
  text: {
    marginTop: "15px", // Adiciona um espaço acima do texto
    fontSize: "18px", // Define um tamanho de fonte maior
    color: "f0f0f0", // Define uma cor para o texto
  },
};

// Exporta o componente para ser utilizado em outros arquivos
export default ToggleText;
