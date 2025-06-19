import {Routes, Route} from 'react-router-dom';
import { Corpo } from '../Components/Corpo';
import { Home } from '../Paginas/Home';
import { Sensores } from '../Paginas/Sensores'
import { Grafico } from '../Paginas/Grafico'
import { Cadastro } from '../Paginas/Cadastro'
import { Login } from '../Paginas/Login'
import { FormCriar } from '../Paginas/FormCriar';
import { FormEditar } from '../Paginas/FormEditar';

export function Rotas(){
    return(
            <Routes>
                <Route path="/" element={<Corpo/>}>
                    <Route path='/' index element={<Home/>}/>
                    <Route path='/sensores' element={<Sensores/>}/>
                    <Route path='/grafico' element={<Grafico/>}/>
                    <Route path='/cadastro' element={<Cadastro/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/criar' element={<FormCriar/>}/>
                    <Route path='/sensores/:id'element={<FormEditar/>}/>
                </Route>
            </Routes>
    )
}