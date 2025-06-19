import estilo from "./Sensores.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus,faPenToSquare,faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export function Sensores(){

    return(
        <main className={estilo.container}>
            <section>
                <h1>Dados dos sensores </h1>
                <Link to={'/criar'}>
                    <button className={estilo.criar}>
                        <FontAwesomeIcon icon={faFileCirclePlus} size="lg"/>
                         Novo registro
                    </button>
                </Link>
                <table>
                    <thead>
                        <tr>
                            <th>Sensor</th>
                            <th>Endereço mac</th> 
                            <th>Unidade de medida</th> 
                            <th>Latitude</th> 
                            <th>Longitude</th> 
                            <th>Status</th>
                            <th>Editar</th> 
                            <th>Deletar</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sensor</td>
                            <td>Endereço mac</td>
                            <td>Unidade de medida</td>
                            <td>Latitude</td>
                            <td>Longitude</td>
                            <td>Status</td>

                            {/* ${item.id} */}
                            <Link to={`/sensores/1`} >
                                <td><button className={estilo.editar}><FontAwesomeIcon icon={faPenToSquare} /></button></td> 
                            </Link>
                            <td><button className={estilo.deletar}><FontAwesomeIcon icon={faTrash}  size="sm"/></button></td> 
                        </tr>
                    </tbody>

                </table>
                
            </section>

        </main>
    )
}