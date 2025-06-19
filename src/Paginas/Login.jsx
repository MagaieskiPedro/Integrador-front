import estilo from "./Login.module.css"

export function Login(){

    return(
        <main className={estilo.container}>
            <section>
                <h1>Faça login: </h1>
                <form action="">
                    <label htmlFor="username">Nome: </label>
                    <input type="text" name="username" placeholder="Digite seu nome" />
                    <label htmlFor="password">Senha: </label>
                    <input type="password" name="password" placeholder="Digite sua senha" />
                    <button>Logar</button>
                </form>
                
            </section>

        </main>
    )
}