import estilo from "./Sensores.module.css"
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus,faPenToSquare,faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';


export function Sensores(){
    // Hook de dados
    const [data, setData] = useState([]);

    // token de acesso
    const access_token = localStorage.getItem('access_token')

    // Metodos de Get e Delete
    const obterDados = async() => {
        try {
            const response = await axios.get(`${API_URL}/api/sensores/`, {
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    'Content-Type': 'application/json'
                  }
            });
            setData(response.data)
        }catch (error) {
            console.log('error: ', error)
        }
    };

    const editarDado = async (IDNTY) => {
        // Sei q é gambiarra, mas n vou mudar todo o código pra fazer um modal só agora
        localStorage.setItem("id-atual",IDNTY)
    }

    const deletarDado = async (IDNTY) => {
        try{
           const response = await axios.delete(`${API_URL}/api/sensores/${IDNTY}/`, {
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    'Content-Type': 'application/json'
                  }
            });
            obterDados();
        }catch (error) {
            console.log('errinho: ', IDNTY, " - ",  error)
        }
    }
    
    useEffect(() => {
        obterDados();
    }, []);

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
                {data.length > 0 ? ( 
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
                        {data.map ((sensor) =>(
                            <tr key={sensor.id}>
                                <td>{sensor.sensor}</td>
                                <td>{sensor.mac_address}</td>
                                <td>{sensor.unidade_med}</td>
                                <td>{sensor.latitude}</td>
                                <td>{sensor.longitude}</td>
                                <td>{sensor.status ? 'True': 'False'}</td>
                                <td>
                                    <Link to={`/sensores/${sensor.id}`} >
                                        <button className={estilo.editar} onClick={() =>editarDado(sensor.id)}><FontAwesomeIcon icon={faPenToSquare} /></button> 
                                    </Link>
                                </td>
                                <td><button className={estilo.deletar} onClick={() =>deletarDado(sensor.id)}><FontAwesomeIcon icon={faTrash}  size="sm"/></button></td> 
                            </tr>
                        ))}
   
                        
                    </tbody>

                </table>
                ) : (
            <table>
                <thead>
                    <tr>
                        <th>Sem Dados aqui</th>
                    </tr>
                </thead>
            </table>
            )}

            </section>

        </main>
    )
}