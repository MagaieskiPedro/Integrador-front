import { Cabecalho } from "./Cabecalho";
//Outlet é um espaço que serve para renderizar o componente da rota, se clicar no link vai pra rota
import { Outlet } from "react-router-dom";
import { Rodape } from "./Rodape";
//estrutura
export function Corpo(){
    return(
        <>
            <Cabecalho/>
            <Outlet/>
            <Rodape/>
        </>
    )
}