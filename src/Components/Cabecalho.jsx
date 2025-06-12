import estilo from './Cabecalho.module.css';
import { Link } from "react-router-dom"

export function Cabecalho(){
    return (
        <header className={estilo.container}>
            <h1>LOGO</h1>
            <nav>
                <ul>
                    <Link to="/home">
                        <li>Home</li>
                    </Link>
                    <Link to="/historico">
                        <li>Histórico</li>
                    </Link>
                    <Link to="/sensores">
                        <li>Sensores</li>
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