import './error.css'
import { Link } from 'react-router-dom';


export default function Error(){
    return(
        <div className="container-erro">
            <img src="notfound.png" alt="Sujeito Link Logo"/>
            <h1>Página não encontrada!</h1>
            <Link className="home" to="/">
            VOLTAR PARA A HOME
            </Link>
        </div>
    )
}