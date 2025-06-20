import estilo from  "./Rodape.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export function Rodape(){
    return(
        <footer className={estilo.container}>
            
            <h1>Smart City</h1>
            
            <nav>
                <p>Contatos: </p>
                <a href="https://github.com/MagaieskiPedro/Integrador-front"><FontAwesomeIcon icon={faGithub} />Front end</a>
                <a href="https://github.com/MagaieskiPedro/Integrador-back"><FontAwesomeIcon icon={faGithub} />Back end</a>
            </nav>
            
        </footer>
    )
}