// Importa o React para criar o componente principal
//import React from "react";
//import Message from "./components/Message";
//import Greeting from "./components/Greeting";
//import Count from "./components/Count";
// Importa o componente Button
//import Button from "./components/Button";
//import UserCard from "./components/UserCard";
//import ToggleText from "./components/ToggleText";
//import TextForm from "./components/TextForm";
import { Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Products from './pages/Products';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Header from './components/Header';


function App(){
  return (
    <>
    
    <Header/>
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/about" element={<About />} />
      <Route path = "/products" element={<Products/>} />
      <Route path = "/contact" element={<Contact />} />
      <Route path = "*" element={<NotFound/>} />
    </Routes>
    </>
  );
}
export default App; 



/*function App() { 
return ( 
  <div> 
      {/*<h1>Olá, React!</h1> 
      <Greeting name = "João"/>
      <Greeting name = "Maria"/>
      <Message /> 
      <Count/>

      {/* Usa o componente Button e passa a prop "label" com o texto desejado   *** Atividade 1
      <Button label="Botão" /> 

      <h1>A lista sagrada</h1>

      {/* Exibe dois cartões de usuário com diferentes informações              *** Atividade 2
      <UserCard nome="Darwin Raglan Caspian Ahab Poseidon   Nicodemus Watterson III" idade={12} />
      <UserCard nome="Isabel Cristina Leopoldina Augusta Micaela Gabriela Rafaela Gonzaga de Bragança e Bourbon" idade={30} /> 
      
       <Count/>                                                                 *** Atividade 3

      
      <ToggleText/>                                                             ***Atividade 4

      }
      <TextForm/>                                                               ***Atividade 5

  </div> 
    //); 
  //} */
 
