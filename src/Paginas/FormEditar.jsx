import estilo  from "./FormEditar.module.css"
import React, { useEffect, useState } from 'react';
import {data, useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Url base da api
const API_URL = 'http://127.0.0.1:8000'

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
    latitude: z.number()
        .gte(1,'Informe a latitude do sensor')
        .lte(999999999999999999999999999999999999999999999999, 'Informe uma latitude de até 50 caracteres'),
    longitude: z.number()
        .gte(1,'Informe a longitude do sensor')
        .lte(999999999999999999999999999999999999999999999999, 'Informe uma longitude de até 50 caracteres'),

    status: z.string().refine(
        (value) => value === "true" || value === "false",
        {message: 'Value must be true or false'}
    ).transform((value) => value === 'true')      
});

export function FormEditar(){

    // Hook de dados
    const [data, setData] = useState([]);
    // Navegação
    const navigate = useNavigate();
    // token de acesso
    const access_token = localStorage.getItem('access_token')

    //Registros do formulario passam por validação ao submit
    const{
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
            resolver: zodResolver(schemaSensor)
    })



    const obterDadosFormulario = async (data) =>{
        console.log(`Me chamou`)
        const id = localStorage.getItem("id-atual")
        try{
            const response = await axios.patch(`${API_URL}/api/sensores/${id}/`, {
                'sensor': data.sensor,
                'mac_address': data.mac_address,
                'unidade_med': data.unidade_med,
                'latitude': data.latitude,
                'longitude': data.longitude,
                'status': data.status
            },{
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json'
                },
            });
            console.log(response)
            localStorage.setItem("id-atual", "")
            navigate('/sensores')
        }catch(error){
            console.error('erro no cadastro', error);
            alert('erro ao cadastrar')
        }
    }

    return (
        <main className={estilo.container}>
            <section>
                <h1>Altere um dado: </h1>
                <form onSubmit={handleSubmit(obterDadosFormulario)} >
                    <label htmlFor="sensor">Sensor: 
                        <input {...register('sensor')} type="text" name="sensor"/>
                        {errors.sensor && <p className={estilo.erro}>{errors.sensor.message}</p>}
                    </label>
                    
                    <label htmlFor="mac_address">Endereço mac: 
                        <input {...register('mac_address')} type="text" name="mac_address" />
                        {errors.mac_address && <p className={estilo.erro}>{errors.mac_address.message}</p>}
                    </label>
                    
                    <label htmlFor="unidade_med">Unidade de medida:
                        <input {...register('unidade_med')} type="text" name="unidade_med" />
                        {errors.unidade_med && <p className={estilo.erro}>{errors.unidade_med.message}</p>}
                    </label>
                    
                    <label htmlFor="latitude">Latitude:
                        <input {...register
                                    ('latitude',
                                        {setValueAs: (latitude) => Number(latitude),}
                                    )
                                } 
                        type="number" name="latitude" />
                        {errors.latitude && <p className={estilo.erro}>{errors.latitude.message}</p>}
                    </label>

                    <label htmlFor="longitude">Longitude:
                        <input 
                            {...register
                                ('longitude', 
                                    {setValueAs: (longitude) => Number(longitude),}
                                )
                            } 
                        type="number" name="longitude" />
                        {errors.longitude && <p className={estilo.erro}>{errors.longitude.message}</p>}
                    </label>

                    <label htmlFor="status">Status: 
                        <select {...register('status')} name="status" >
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </label>
                    
                    <button type="submit">Alterar</button>
                </form>
            </section>
        </main>
    )
}