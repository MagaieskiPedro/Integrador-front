import {Routes, Route} from 'react-router-dom';
import { Corpo } from '../Components/Corpo';
import { Home } from '../Paginas/Home';
import { Historico } from '../Paginas/Historico'
import { Sensores } from '../Paginas/Sensores'
import { Cadastro } from '../Paginas/Cadastro'
import { Login } from '../Paginas/Login'

export function Rotas(){
    return(
            <Routes>
                <Route path="/" element={<Corpo/>}>
                    <Route path='/home' index element={<Home/>}/>
                    <Route path='/historico' element={<Historico/>}/>
                    <Route path='/sensores' element={<Sensores/>}/>
                    <Route path='/cadastro' element={<Cadastro/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Route>
            </Routes>
    )
}