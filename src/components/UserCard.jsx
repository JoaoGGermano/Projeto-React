// Importa o React para criar o componente
import React from "react";

// Importa os estilos do cartão
import "./UserCard.css";

// Define o componente UserCard recebendo as props solicitadas
function UserCard({ nome, idade }) {
  return (
    <div className="user-card">
      {/* Exibe o nome e a idade*/}
      <h2>{nome}</h2>
      <p>Idade: {idade} anos</p>
    </div>
  );
}

// Exporta o componente
export default UserCard;
