import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    function irParaProdutos(){
        navigate('/products')
    }
    return(
        <div>
        <h1>Página inicial Home</h1>
        <button onClick={irParaProdutos}>Ver produtos</button>
        </div>
    );
}
export default Home;