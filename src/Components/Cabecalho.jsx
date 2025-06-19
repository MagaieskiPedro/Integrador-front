import estilo from './Cabecalho.module.css';
import { Link } from "react-router-dom"

export function Cabecalho(){
    return (
        <header className={estilo.container}>
            <h1>LOGO</h1>
            <nav>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/sensores">
                        <li>Sensores</li>
                    </Link>
                    <Link to="/grafico">
                        <li>Grafico</li>
                    </Link>
                    <Link to="/cadastro">
                        <li>Cadastro</li>
                    </Link>
                    <Link to="/login">
                        <li>Login</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}