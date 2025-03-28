// Importa o React e o hook useState
import React, { useState } from "react";

function TextForm() {
  // Estado que armazena o texto digitado
  const [inputText, setInputText] = useState("");

  // Estado que armazena o texto enviado
  const [submittedText, setSubmittedText] = useState("");

  // Função chamada sempre que o usuário digita
  const handleChange = (event) => {
    setInputText(event.target.value); 
  };

  // Função chamada ao clicar no botão de envio
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o recarregamento da página
    setSubmittedText(inputText); 
    setInputText("");
  };

  return (
    <div style={styles.container}>
  
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Campo de entrada de texto */}
        <input
          type="text"
          value={inputText} 
          onChange={handleChange} 
          placeholder="Digite algo..."
          style={styles.input}
        />

        {/* Botão de envio */}
        <button type="submit" style={styles.button}>
          Enviar
        </button>
      </form>

      {/* Exibe o texto enviado se houver algum */}
      {submittedText && <p style={styles.text}> {submittedText}</p>}
    </div>
  );
}

// Objeto de estilos para estilizar o formulário
const styles = {
  container: {
    textAlign: "center", 
    marginTop: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    fontSize: "16px",
    marginBottom: "10px", // Adiciona espaço abaixo do campo
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "white",
  },
  text: {
    marginTop: "15px",
    fontSize: "18px",
    color: "f0f0f0",
  },
};

// Exporta o componente para ser utilizado em outros arquivos
export default TextForm;
