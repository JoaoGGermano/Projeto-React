import { useState } from "react"; 
 
function Count() { 
  const [count, setCount] = useState(0); 
 
  function Incrementar() { 
    setCount(count + 1); 
  } 
 
  function Decrementar() { 
    setCount(count - 1); 
  }

  //Essa é função para resetar o contador
  function Resetar(){
    setCount(count == 0);
  }
 
  return ( 
    <div> 
      <h2>Contador: {count}</h2> 
      <button onClick={Incrementar}>Incrementar</button> 
      <button onClick={Decrementar}>Decrementar</button>
      <button onClick={Resetar}>Resetar</button>
    </div> 
); 
} 
export default Count;