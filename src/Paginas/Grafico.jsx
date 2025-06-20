import estilo from "./Grafico.module.css"
import { Chart } from "react-google-charts";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus,faPenToSquare,faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { tr } from "zod/v4/locales";

const API_URL = 'http://127.0.0.1:8000';

export function Grafico(){

    const [data, setData] = useState([
        ['Valor','Data']
        
    ]);

    // token de acesso
    const access_token = localStorage.getItem('access_token')

    // Metodos de Get e Delete
    const obterDados = async() => {
        
    };

    useEffect(() => {
        const carregarDados = async() => {
            try {
                const response = await axios.get(`${API_URL}/api/historicos`, {
                    headers: {
                        'Authorization': `Bearer ${access_token}`,
                        'Content-Type': 'application/json'
                    }
                });
                const formatar = response.data.map(item => [item.valor, new Date(item.timestamp)])
                setData(prev => [...prev, ...formatar])
            }catch (error) {
                console.log('error: ', error)
            }
        }
        carregarDados();
    }, []);


    if (!data) return null;
    return(
        <main className={estilo.container}>
            <section>
                <h1>Grafico de sensores</h1>

                <Chart
                    chartType="ScatterChart"
                    width="100%"
                    height="800px"
                    
                    data={data}
                    options={{
                        title: "valores por data",
                        colors: ['#000000'],
                        hAxis: { title: "Valor"},
                        vAxis: { title: "Data", format: "dd/MM/yyyy" },
                    }}
                legendToggle />

            </section>

        </main>
    )
}
