import estilo from './Home.module.css';
import img from '../assets/smart-city.svg'

export function Home(){

    return(
        <main className={estilo.container}>
            <section>
                <h1>Monitoramento de sensores</h1>
                
                <p>
                    Aqui você pode monitorar valores historicos dos sensores
                    e adicionar, editar e deletar valores desses sensores.
                    Cadastre-se para ter acesso ao historico e se você for
                    admininstrador, poder então manipular os dados dos sensores
                </p>
                
            </section>
            <img src={img} alt="Imagem cidade inteligente" />
        </main>
    )
}