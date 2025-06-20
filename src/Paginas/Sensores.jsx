import estilo from "./Sensores.module.css"
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus,faPenToSquare,faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import axios from 'axios';


import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const API_URL = 'http://127.0.0.1:8000';

const schemaSensor = z.object({
    sensor: z.string()
        .min(1,'Informe o nome do sensor')
        .max(50, 'Informe um nome de sensor de até 50 caracteres'),
    mac_address: z.string()
        .min(1,'Informe o endereço mac')
        .max(50, 'Informe um endereço mac de até 50 caracteres'),
    unidade_med: z.string()
        .min(1,'Informe a unidade de medida')
        .max(50, 'Informe uma unidade de medida de até 50 caracteres'),
    latitude: z.string()
        .min(1,'Informe a latitude do sensor')
        .max(50, 'Informe uma latitude de até 50 caracteres'),
    longitude: z.string()
        .min(1,'Informe a longitude do sensor')
        .max(50, 'Informe uma longitude de até 50 caracteres'),
    status: z.string()
        .min(1,'Informe o Status')
        .max(50, 'Informe um Status de até 50 caracteres'),
})

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

    const deletarDado = async (IDNTY) => {
        try{
           const response = await axios.delete(`${API_URL}/api/sensores/${IDNTY}`, {
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
                                <td>{sensor.status}</td>

                                {/* ${item.id} */}
                                <Link to={`/sensores/${sensor.id}`} >
                                    <td><button className={estilo.editar}><FontAwesomeIcon icon={faPenToSquare} /></button></td> 
                                </Link>
                                <td><button className={estilo.deletar}><FontAwesomeIcon icon={faTrash}  size="sm"/></button></td> 
                            </tr>
                        ))}
   
                        
                    </tbody>

                </table>
                ) : (
            <table>
                <tr>
                    <th>Sem Dados aqui</th>
                </tr>
            </table>
            )}

            </section>

        </main>
    )
}